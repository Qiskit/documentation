cmake_minimum_required(VERSION 3.15)
project(SqDRIFT VERSION 1.0 LANGUAGES CXX)

# Set C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Build type
if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()

# Compiler flags
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

# Include ExternalProject module for building dependencies
include(ExternalProject)
include(FetchContent)

# ============================================================================
# Options
# ============================================================================

option(BUILD_DEPENDENCIES "Build all dependencies from source" ON)
option(USE_SYSTEM_BOOST "Use system-installed Boost" ON)
option(USE_SYSTEM_JSON "Use system-installed nlohmann-json" ON)

# ============================================================================
# Find System Dependencies
# ============================================================================

# Boost (required for dynamic_bitset)
if(USE_SYSTEM_BOOST)
    find_package(Boost REQUIRED)
    if(Boost_FOUND)
        message(STATUS "Found system Boost: ${Boost_INCLUDE_DIRS}")
    endif()
else()
    message(STATUS "Will build Boost from source (not implemented - use system Boost)")
    set(USE_SYSTEM_BOOST ON)
    find_package(Boost REQUIRED)
endif()

# nlohmann-json (required for qiskit-cpp)
if(USE_SYSTEM_JSON)
    find_package(nlohmann_json 3.2.0 QUIET)
    if(nlohmann_json_FOUND)
        message(STATUS "Found system nlohmann-json: ${nlohmann_json_DIR}")
    else()
        message(STATUS "System nlohmann-json not found, will fetch from GitHub")
        set(USE_SYSTEM_JSON OFF)
    endif()
endif()

if(NOT USE_SYSTEM_JSON)
    FetchContent_Declare(
        nlohmann_json
        GIT_REPOSITORY https://github.com/nlohmann/json.git
        GIT_TAG v3.11.3
    )
    FetchContent_MakeAvailable(nlohmann_json)
    message(STATUS "Fetched nlohmann-json from GitHub")
endif()

# ============================================================================
# Set up dependency paths
# ============================================================================

set(DEPS_DIR "${CMAKE_CURRENT_SOURCE_DIR}/deps")
set(DEPS_BUILD_DIR "${CMAKE_CURRENT_BINARY_DIR}/deps-build")
set(DEPS_INSTALL_DIR "${CMAKE_CURRENT_BINARY_DIR}/deps-install")

# Create directories
file(MAKE_DIRECTORY ${DEPS_BUILD_DIR})
file(MAKE_DIRECTORY ${DEPS_INSTALL_DIR})

# ============================================================================
# Build Dependencies with ExternalProject
# ============================================================================

if(BUILD_DEPENDENCIES)
    message(STATUS "")
    message(STATUS "=== Building Dependencies ===")

    # 1. Qiskit C API
    # Pinned to 2.5.2 (latest stable). qiskit-ibm-runtime-c's README documents
    # support up to 2.4, but in practice fix-type-17 works with 2.5.
    # TODO: update pin when a newer stable release is verified.
    ExternalProject_Add(
        qiskit_external
        GIT_REPOSITORY https://github.com/Qiskit/qiskit.git
        GIT_TAG 2.5.2
        PREFIX ${DEPS_BUILD_DIR}/qiskit
        SOURCE_DIR ${DEPS_DIR}/qiskit
        CONFIGURE_COMMAND ""
        BUILD_COMMAND make c
        BUILD_IN_SOURCE 1
        INSTALL_COMMAND ""
        LOG_DOWNLOAD ON
        LOG_BUILD ON
    )

    set(QISKIT_INCLUDE_DIR "${DEPS_DIR}/qiskit/dist/c/include")
    set(QISKIT_LIB_DIR "${DEPS_DIR}/qiskit/dist/c/lib")

    # 2. Qiskit Fermions C API
    # Need to find the actual qiskit library file
    if(APPLE)
        set(QISKIT_LIB_FILE "${QISKIT_LIB_DIR}/libqiskit.dylib")
    elseif(WIN32)
        set(QISKIT_LIB_FILE "${QISKIT_LIB_DIR}/qiskit.dll")
    else()
        set(QISKIT_LIB_FILE "${QISKIT_LIB_DIR}/libqiskit.so")
    endif()

    ExternalProject_Add(
        qiskit_fermions_external
        GIT_REPOSITORY https://github.com/Qiskit/qiskit-fermions.git
        GIT_TAG 2199efae3d127f5abfb142566c5cbd985bba05ff
        PREFIX ${DEPS_BUILD_DIR}/qiskit-fermions
        SOURCE_DIR ${DEPS_DIR}/qiskit-fermions
        CONFIGURE_COMMAND ""
        BUILD_COMMAND ${CMAKE_COMMAND} -E env
            "QISKIT_LIB=${QISKIT_LIB_FILE}"
            "QISKIT_INCLUDE=${QISKIT_INCLUDE_DIR}"
            "RUSTFLAGS=-L ${QISKIT_LIB_DIR}"
            make cext
        BUILD_IN_SOURCE 1
        INSTALL_COMMAND ""
        DEPENDS qiskit_external
        LOG_DOWNLOAD ON
        LOG_BUILD ON
    )

    set(QISKIT_FERMIONS_INCLUDE_DIR "${DEPS_DIR}/qiskit-fermions/dist/c/include")
    set(QISKIT_FERMIONS_LIB_DIR "${DEPS_DIR}/qiskit-fermions/dist/c/lib")

    # 3. Qiskit IBM Runtime C API
    # TODO: open a PR to mtreinish/qiskit-ibm-runtime-c (and upstream Qiskit/qiskit-ibm-runtime-c)
    #       to add #pragma once to qiskit_ibm_runtime.h, then remove the patch below.
    #
    # `#pragma once` is an include guard — it tells the compiler to process the header
    # only once per translation unit. Without it, qiskit-cpp's headers each pull in
    # qiskit_ibm_runtime.h independently, causing typedef redefinition errors at compile time.
    #
    # We generate the patch script into the build directory at configure time so there
    # is no extra source file to track.
    set(_IBM_RT_HEADER
        "${DEPS_DIR}/qiskit-ibm-runtime-c/include/qiskit_ibm_runtime/qiskit_ibm_runtime.h")
    file(WRITE "${CMAKE_CURRENT_BINARY_DIR}/patch_pragma_once.cmake" [=[
set(HDR "@_IBM_RT_HEADER@")
if(NOT EXISTS "${HDR}")
    message(FATAL_ERROR "patch_pragma_once: header not found: ${HDR}")
endif()
file(READ "${HDR}" CONTENTS)
if(NOT CONTENTS MATCHES "^#pragma once")
    message(STATUS "patch_pragma_once: prepending #pragma once to qiskit_ibm_runtime.h")
    file(WRITE "${HDR}" "#pragma once\n\n${CONTENTS}")
else()
    message(STATUS "patch_pragma_once: #pragma once already present, skipping")
endif()
]=])
    configure_file(
        "${CMAKE_CURRENT_BINARY_DIR}/patch_pragma_once.cmake"
        "${CMAKE_CURRENT_BINARY_DIR}/patch_pragma_once.cmake"
        @ONLY
    )
    ExternalProject_Add(
        qiskit_ibm_runtime_external
        GIT_REPOSITORY https://github.com/mtreinish/qiskit-ibm-runtime-c.git
        # TODO: revert to upstream Qiskit/qiskit-ibm-runtime-c once PR #27 merges
        GIT_TAG fix-type-17
        PREFIX ${DEPS_BUILD_DIR}/qiskit-ibm-runtime-c
        SOURCE_DIR ${DEPS_DIR}/qiskit-ibm-runtime-c
        PATCH_COMMAND ${CMAKE_COMMAND} -P "${CMAKE_CURRENT_BINARY_DIR}/patch_pragma_once.cmake"
        CMAKE_ARGS
            -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}
            -DCMAKE_INSTALL_PREFIX=${DEPS_INSTALL_DIR}/qiskit-ibm-runtime-c
        BUILD_COMMAND ${CMAKE_COMMAND} --build . --config ${CMAKE_BUILD_TYPE}
        INSTALL_COMMAND ""
        LOG_DOWNLOAD ON
        LOG_CONFIGURE ON
        LOG_BUILD ON
    )

    set(QISKIT_IBM_RUNTIME_INCLUDE_DIR "${DEPS_DIR}/qiskit-ibm-runtime-c/include")
    # The library is built in the ExternalProject build directory
    if(CMAKE_BUILD_TYPE STREQUAL "Debug")
        set(QISKIT_IBM_RUNTIME_LIB_DIR "${DEPS_BUILD_DIR}/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/debug")
    else()
        set(QISKIT_IBM_RUNTIME_LIB_DIR "${DEPS_BUILD_DIR}/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release")
    endif()

    # 4. Qiskit C++ (header-only)
    # qiskit-cpp has no versioned tags; pinned to current HEAD.
    # TODO: switch to a tag once the project starts tagging releases.
    ExternalProject_Add(
        qiskit_cpp_external
        GIT_REPOSITORY https://github.com/Qiskit/qiskit-cpp.git
        GIT_TAG 41d821c758d42a3e85adcb03638f0bbd4497186c
        PREFIX ${DEPS_BUILD_DIR}/qiskit-cpp
        SOURCE_DIR ${DEPS_DIR}/qiskit-cpp
        CONFIGURE_COMMAND ""
        BUILD_COMMAND ""
        INSTALL_COMMAND ""
        LOG_DOWNLOAD ON
    )

    set(QISKIT_CPP_INCLUDE_DIR "${DEPS_DIR}/qiskit-cpp/src")

    # 5. Qiskit Addon SQD HPC (header-only)
    # Only one tag exists (0.0.0) and it predates fermion.hpp; pinned to HEAD.
    # TODO: switch to a release tag once one is cut.
    ExternalProject_Add(
        qiskit_addon_sqd_external
        GIT_REPOSITORY https://github.com/Qiskit/qiskit-addon-sqd-hpc.git
        GIT_TAG 733b8455572dfac851df169a5c28a77e050c28c2
        PREFIX ${DEPS_BUILD_DIR}/qiskit-addon-sqd-hpc
        SOURCE_DIR ${DEPS_DIR}/qiskit-addon-sqd-hpc
        CONFIGURE_COMMAND ""
        BUILD_COMMAND ""
        INSTALL_COMMAND ""
        LOG_DOWNLOAD ON
    )

    set(QISKIT_ADDON_SQD_INCLUDE_DIR "${DEPS_DIR}/qiskit-addon-sqd-hpc/include")

    # 6. SBD (header-only)
    ExternalProject_Add(
        sbd_external
        GIT_REPOSITORY https://github.com/r-ccs-cms/sbd.git
        GIT_TAG v1.3.0
        PREFIX ${DEPS_BUILD_DIR}/sbd
        SOURCE_DIR ${DEPS_DIR}/sbd
        CONFIGURE_COMMAND ""
        BUILD_COMMAND ""
        INSTALL_COMMAND ""
        LOG_DOWNLOAD ON
    )

    set(SBD_INCLUDE_DIR "${DEPS_DIR}/sbd/include")

    message(STATUS "Dependencies will be built automatically")
    message(STATUS "=== End Dependencies ===")
    message(STATUS "")

else()
    # Use existing dependencies
    set(QISKIT_INCLUDE_DIR "${DEPS_DIR}/qiskit/dist/c/include")
    set(QISKIT_LIB_DIR "${DEPS_DIR}/qiskit/dist/c/lib")
    set(QISKIT_FERMIONS_INCLUDE_DIR "${DEPS_DIR}/qiskit-fermions/dist/c/include")
    set(QISKIT_FERMIONS_LIB_DIR "${DEPS_DIR}/qiskit-fermions/dist/c/lib")
    set(QISKIT_IBM_RUNTIME_INCLUDE_DIR "${DEPS_DIR}/qiskit-ibm-runtime-c/include")
    set(QISKIT_IBM_RUNTIME_LIB_DIR "${DEPS_DIR}/qiskit-ibm-runtime-c/build/cargo/release")
    set(QISKIT_CPP_INCLUDE_DIR "${DEPS_DIR}/qiskit-cpp/src")
    set(QISKIT_ADDON_SQD_INCLUDE_DIR "${DEPS_DIR}/qiskit-addon-sqd-hpc/include")
    set(SBD_INCLUDE_DIR "${DEPS_DIR}/sbd/include")
endif()

# ============================================================================
# Set library paths (platform-agnostic)
# ============================================================================

# When building dependencies, we know where they will be, so set paths directly
if(BUILD_DEPENDENCIES)
    # Platform-specific library extensions
    if(APPLE)
        set(LIB_EXT "dylib")
    elseif(WIN32)
        set(LIB_EXT "dll")
    else()
        set(LIB_EXT "so")
    endif()

    # Set library paths directly
    set(QISKIT_LIBRARY "${QISKIT_LIB_DIR}/libqiskit.${LIB_EXT}")
    set(QISKIT_FERMIONS_LIBRARY "${QISKIT_FERMIONS_LIB_DIR}/libqiskit_fermions.${LIB_EXT}")
    set(QISKIT_IBM_RUNTIME_LIBRARY "${QISKIT_IBM_RUNTIME_LIB_DIR}/libqiskit_ibm_runtime.${LIB_EXT}")

    message(STATUS "Will link against:")
    message(STATUS "  Qiskit: ${QISKIT_LIBRARY}")
    message(STATUS "  Qiskit Fermions: ${QISKIT_FERMIONS_LIBRARY}")
    message(STATUS "  Qiskit IBM Runtime: ${QISKIT_IBM_RUNTIME_LIBRARY}")
else()
    # Find existing libraries
    find_library(QISKIT_LIBRARY
        NAMES qiskit libqiskit
        PATHS "${QISKIT_LIB_DIR}"
        NO_DEFAULT_PATH
    )

    find_library(QISKIT_FERMIONS_LIBRARY
        NAMES qiskit_fermions libqiskit_fermions
        PATHS "${QISKIT_FERMIONS_LIB_DIR}"
        NO_DEFAULT_PATH
    )

    find_library(QISKIT_IBM_RUNTIME_LIBRARY
        NAMES qiskit_ibm_runtime libqiskit_ibm_runtime
        PATHS "${QISKIT_IBM_RUNTIME_LIB_DIR}"
        NO_DEFAULT_PATH
    )

    # Report found libraries
    if(QISKIT_LIBRARY)
        message(STATUS "Found Qiskit library: ${QISKIT_LIBRARY}")
    else()
        message(WARNING "Qiskit library not found at: ${QISKIT_LIB_DIR}")
    endif()

    if(QISKIT_FERMIONS_LIBRARY)
        message(STATUS "Found Qiskit Fermions library: ${QISKIT_FERMIONS_LIBRARY}")
    else()
        message(WARNING "Qiskit Fermions library not found at: ${QISKIT_FERMIONS_LIB_DIR}")
    endif()

    if(QISKIT_IBM_RUNTIME_LIBRARY)
        message(STATUS "Found Qiskit IBM Runtime library: ${QISKIT_IBM_RUNTIME_LIBRARY}")
    else()
        message(WARNING "Qiskit IBM Runtime library not found at: ${QISKIT_IBM_RUNTIME_LIB_DIR}")
    endif()
endif()

# ============================================================================
# Create executable
# ============================================================================

add_executable(SqDRIFT SqDRIFT.cpp)

# Set output directory to project root so it can access fcidump_files
set_target_properties(SqDRIFT PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}"
    RUNTIME_OUTPUT_DIRECTORY_DEBUG "${CMAKE_CURRENT_SOURCE_DIR}"
    RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_CURRENT_SOURCE_DIR}"
)

# Add dependencies if building them
if(BUILD_DEPENDENCIES)
    add_dependencies(SqDRIFT
        qiskit_external
        qiskit_fermions_external
        qiskit_ibm_runtime_external
        qiskit_cpp_external
        qiskit_addon_sqd_external
        sbd_external
    )
endif()

# ============================================================================
# Set include directories
# ============================================================================

target_include_directories(SqDRIFT PRIVATE
    ${QISKIT_INCLUDE_DIR}
    ${QISKIT_FERMIONS_INCLUDE_DIR}
    ${QISKIT_IBM_RUNTIME_INCLUDE_DIR}
    ${QISKIT_CPP_INCLUDE_DIR}
    ${QISKIT_ADDON_SQD_INCLUDE_DIR}
    ${SBD_INCLUDE_DIR}
    ${Boost_INCLUDE_DIRS}
)

# ============================================================================
# Link libraries
# ============================================================================

target_link_libraries(SqDRIFT PRIVATE
    ${QISKIT_LIBRARY}
    ${QISKIT_FERMIONS_LIBRARY}
    ${QISKIT_IBM_RUNTIME_LIBRARY}
)

# Link nlohmann-json
if(USE_SYSTEM_JSON AND nlohmann_json_FOUND)
    target_link_libraries(SqDRIFT PRIVATE nlohmann_json::nlohmann_json)
else()
    target_link_libraries(SqDRIFT PRIVATE nlohmann_json)
endif()

# ============================================================================
# Platform-specific settings
# ============================================================================

# macOS specific settings
if(APPLE)
    # Set RPATH for finding dynamic libraries at runtime
    set_target_properties(SqDRIFT PROPERTIES
        BUILD_RPATH "${QISKIT_LIB_DIR};${QISKIT_FERMIONS_LIB_DIR};${QISKIT_IBM_RUNTIME_LIB_DIR}"
        INSTALL_RPATH "${QISKIT_LIB_DIR};${QISKIT_FERMIONS_LIB_DIR};${QISKIT_IBM_RUNTIME_LIB_DIR}"
    )
endif()

# Linux specific settings
if(UNIX AND NOT APPLE)
    # Set RPATH for finding dynamic libraries at runtime
    set_target_properties(SqDRIFT PROPERTIES
        BUILD_RPATH "${QISKIT_LIB_DIR}:${QISKIT_FERMIONS_LIB_DIR}:${QISKIT_IBM_RUNTIME_LIB_DIR}"
        INSTALL_RPATH "${QISKIT_LIB_DIR}:${QISKIT_FERMIONS_LIB_DIR}:${QISKIT_IBM_RUNTIME_LIB_DIR}"
    )
    # Link pthread on Linux
    target_link_libraries(SqDRIFT PRIVATE pthread)
endif()

# Windows specific settings
if(WIN32)
    # Windows may need additional configuration for DLL paths
    set_target_properties(SqDRIFT PROPERTIES
        VS_DEBUGGER_ENVIRONMENT "PATH=${QISKIT_LIB_DIR};${QISKIT_FERMIONS_LIB_DIR};${QISKIT_IBM_RUNTIME_LIB_DIR};$ENV{PATH}"
    )
endif()

# ============================================================================
# Installation
# ============================================================================

install(TARGETS SqDRIFT
    RUNTIME DESTINATION bin
)

# ============================================================================
# Print configuration summary
# ============================================================================

message(STATUS "")
message(STATUS "=== SqDRIFT Build Configuration ===")
message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")
message(STATUS "C++ compiler: ${CMAKE_CXX_COMPILER}")
message(STATUS "C++ standard: ${CMAKE_CXX_STANDARD}")
message(STATUS "System: ${CMAKE_SYSTEM_NAME}")
message(STATUS "Build dependencies: ${BUILD_DEPENDENCIES}")
message(STATUS "")
message(STATUS "Dependencies:")
message(STATUS "  Boost: ${Boost_INCLUDE_DIRS}")
if(USE_SYSTEM_JSON AND nlohmann_json_FOUND)
    message(STATUS "  nlohmann-json: ${nlohmann_json_DIR} (system)")
else()
    message(STATUS "  nlohmann-json: fetched from GitHub")
endif()
message(STATUS "  Qiskit: ${QISKIT_INCLUDE_DIR}")
message(STATUS "  Qiskit Fermions: ${QISKIT_FERMIONS_INCLUDE_DIR}")
message(STATUS "  Qiskit IBM Runtime: ${QISKIT_IBM_RUNTIME_INCLUDE_DIR}")
message(STATUS "  Qiskit C++: ${QISKIT_CPP_INCLUDE_DIR}")
message(STATUS "  Qiskit Addon SQD: ${QISKIT_ADDON_SQD_INCLUDE_DIR}")
message(STATUS "  SBD: ${SBD_INCLUDE_DIR}")
message(STATUS "")
if(NOT BUILD_DEPENDENCIES)
    message(STATUS "Libraries:")
    message(STATUS "  Qiskit: ${QISKIT_LIBRARY}")
    message(STATUS "  Qiskit Fermions: ${QISKIT_FERMIONS_LIBRARY}")
    message(STATUS "  Qiskit IBM Runtime: ${QISKIT_IBM_RUNTIME_LIBRARY}")
    message(STATUS "")
endif()
message(STATUS "===================================")
message(STATUS "")