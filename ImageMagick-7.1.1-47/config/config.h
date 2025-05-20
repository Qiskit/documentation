/* config/config.h.  Generated from config.h.in by configure.  */
/* config/config.h.in.  Generated from configure.ac by autoheader.  */

/* Define if building universal (internal helper macro) */
/* #undef AC_APPLE_UNIVERSAL_BUILD */

/* Define if you have AUTOTRACE library */
/* #undef AUTOTRACE_DELEGATE */

/* Define if coders and filters are to be built as modules. */
/* #undef BUILD_MODULES */

/* Define if you have the bzip2 library */
#define BZLIB_DELEGATE 1

/* Define if you have CAIRO library */
/* #undef CAIRO_DELEGATE */

/* Channel mask depth */
#define CHANNEL_MASK_DEPTH 32

/* permit enciphering and deciphering image pixels */
#define CIPHER_SUPPORT 1

/* coders subdirectory. */
#define CODER_DIRNAME "coders"

/* Directory where architecture-dependent configuration files live. */
#define CONFIGURE_PATH "/usr/local/etc/ImageMagick-7/"

/* Subdirectory of lib where architecture-dependent configuration files live.
   */
#define CONFIGURE_RELATIVE_PATH "ImageMagick-7"

/* Define if you have DJVU library */
/* #undef DJVU_DELEGATE */

/* Define if you have DMR library */
/* #undef DMR_DELEGATE */

/* Directory where ImageMagick documents live. */
#define DOCUMENTATION_PATH "/usr/local/share/doc/ImageMagick-7/"

/* Define to 1 to enable distributed pixel cache support. */
#define DPC_SUPPORT 1

/* Define if you have Display Postscript */
/* #undef DPS_DELEGATE */

/* exclude deprecated methods in MagickCore API */
/* #undef EXCLUDE_DEPRECATED */

/* Directory where executables are installed. */
#define EXECUTABLE_PATH "/usr/local/bin/"

/* Define if you have FFTW library */
/* #undef FFTW_DELEGATE */

/* filter subdirectory. */
#define FILTER_DIRNAME "filters"

/* Define if you have FLIF library */
/* #undef FLIF_DELEGATE */

/* Define if you have FONTCONFIG library */
#define FONTCONFIG_DELEGATE 1

/* Define if you have FlashPIX library */
/* #undef FPX_DELEGATE */

/* Define if you have FREETYPE library */
#define FREETYPE_DELEGATE 1

/* Define if you have Ghostscript library or framework */
/* #undef GS_DELEGATE */

/* Define if you have GVC library */
/* #undef GVC_DELEGATE */

/* Define to 1 if you have the 'acosh' function. */
#define HAVE_ACOSH 1

/* Define to 1 if you have the 'aligned_malloc' function. */
/* #undef HAVE_ALIGNED_MALLOC */

/* Define to 1 if you have the <arm/limits.h> header file. */
/* #undef HAVE_ARM_LIMITS_H */

/* Define to 1 if you have the <arpa/inet.h> header file. */
#define HAVE_ARPA_INET_H 1

/* Define to 1 if you have the 'asinh' function. */
#define HAVE_ASINH 1

/* Define to 1 if you have the 'atanh' function. */
#define HAVE_ATANH 1

/* Define to 1 if you have the 'atexit' function. */
#define HAVE_ATEXIT 1

/* Define to 1 if you have the 'atoll' function. */
#define HAVE_ATOLL 1

/* define if bool is a built-in type */
#define HAVE_BOOL /**/

/* Define to 1 if you have the 'cabs' function. */
#define HAVE_CABS 1

/* Define to 1 if you have the 'carg' function. */
#define HAVE_CARG 1

/* Define to 1 if you have the 'cimag' function. */
#define HAVE_CIMAG 1

/* Define to 1 if you have the 'clock' function. */
#define HAVE_CLOCK 1

/* Define to 1 if you have the 'clock_getres' function. */
#define HAVE_CLOCK_GETRES 1

/* Define to 1 if you have the 'clock_gettime' function. */
#define HAVE_CLOCK_GETTIME 1

/* Define to 1 if clock_gettime supports CLOCK_REALTIME. */
#define HAVE_CLOCK_REALTIME 1

/* Define to 1 if you have the <CL/cl.h> header file. */
/* #undef HAVE_CL_CL_H */

/* Define to 1 if you have the <complex.h> header file. */
#define HAVE_COMPLEX_H 1

/* Define to 1 if you have the 'creal' function. */
#define HAVE_CREAL 1

/* Define to 1 if you have the 'ctime_r' function. */
#define HAVE_CTIME_R 1

/* Define to 1 if you have the declaration of 'pread', and to 0 if you don't.
   */
#define HAVE_DECL_PREAD 1

/* Define to 1 if you have the declaration of 'pwrite', and to 0 if you don't.
   */
#define HAVE_DECL_PWRITE 1

/* Define to 1 if you have the declaration of 'strerror_r', and to 0 if you
   don't. */
#define HAVE_DECL_STRERROR_R 1

/* Define to 1 if you have the declaration of 'strlcpy', and to 0 if you
   don't. */
#define HAVE_DECL_STRLCPY 0

/* Define to 1 if you have the declaration of 'tzname', and to 0 if you don't.
   */
/* #undef HAVE_DECL_TZNAME */

/* Define to 1 if you have the declaration of 'vsnprintf', and to 0 if you
   don't. */
#define HAVE_DECL_VSNPRINTF 1

/* Define to 1 if you have the 'directio' function. */
/* #undef HAVE_DIRECTIO */

/* Define to 1 if you have the <dirent.h> header file, and it defines 'DIR'.
   */
#define HAVE_DIRENT_H 1

/* Define to 1 if you have the <dlfcn.h> header file. */
#define HAVE_DLFCN_H 1

/* Define to 1 if you have the 'erf' function. */
#define HAVE_ERF 1

/* Define to 1 if you have the <errno.h> header file. */
#define HAVE_ERRNO_H 1

/* Define to 1 if you have the 'execvp' function. */
#define HAVE_EXECVP 1

/* Define to 1 if you have the 'fchmod' function. */
#define HAVE_FCHMOD 1

/* Define to 1 if you have the <fcntl.h> header file. */
#define HAVE_FCNTL_H 1

/* Define to 1 if you have the <float.h> header file. */
#define HAVE_FLOAT_H 1

/* Define to 1 if you have the 'floor' function. */
#define HAVE_FLOOR 1

/* Define to 1 if you have the 'fork' function. */
#define HAVE_FORK 1

/* Define to 1 if fseeko (and ftello) are declared in stdio.h. */
#define HAVE_FSEEKO 1

/* Define to 1 if you have the 'ftime' function. */
#define HAVE_FTIME 1

/* Define to 1 if you have the 'ftruncate' function. */
#define HAVE_FTRUNCATE 1

/* Define to 1 if you have the 'getcwd' function. */
#define HAVE_GETCWD 1

/* Define to 1 if you have the 'getc_unlocked' function. */
#define HAVE_GETC_UNLOCKED 1

/* Define to 1 if you have the 'getdtablesize' function. */
#define HAVE_GETDTABLESIZE 1

/* Define to 1 if you have the 'getentropy' function. */
#define HAVE_GETENTROPY 1

/* Define to 1 if you have the 'getexecname' function. */
/* #undef HAVE_GETEXECNAME */

/* Define to 1 if you have the 'getpagesize' function. */
#define HAVE_GETPAGESIZE 1

/* Define to 1 if you have the 'getpid' function. */
#define HAVE_GETPID 1

/* Define to 1 if you have the 'getpwnam_r' function. */
#define HAVE_GETPWNAM_R 1

/* Define to 1 if you have the 'getrlimit' function. */
#define HAVE_GETRLIMIT 1

/* Define to 1 if you have the 'getrusage' function. */
#define HAVE_GETRUSAGE 1

/* Define to 1 if you have the 'gettimeofday' function. */
#define HAVE_GETTIMEOFDAY 1

/* Define to 1 if you have the 'gmtime_r' function. */
#define HAVE_GMTIME_R 1

/* [Compile with hugepage support] */
/* #undef HAVE_HUGEPAGES */

/* Define to 1 if the system has the type 'intmax_t'. */
#define HAVE_INTMAX_T 1

/* Define to 1 if the system has the type 'intptr_t'. */
#define HAVE_INTPTR_T 1

/* Define to 1 if you have the <inttypes.h> header file. */
#define HAVE_INTTYPES_H 1

/* Define to 1 if you have the 'isnan' function. */
#define HAVE_ISNAN 1

/* Define to 1 if you have the 'j0' function. */
#define HAVE_J0 1

/* Define to 1 if you have the 'j1' function. */
#define HAVE_J1 1

/* Define if you have jemalloc memory allocation library */
/* #undef HAVE_JEMALLOC */

/* Define to 1 if you have the 'jpeg12_read_scanlines' function. */
/* #undef HAVE_JPEG12_READ_SCANLINES */

/* Define to 1 if you have the 'jpeg12_write_scanlines' function. */
/* #undef HAVE_JPEG12_WRITE_SCANLINES */

/* Define to 1 if you have the 'jpeg16_read_scanlines' function. */
/* #undef HAVE_JPEG16_READ_SCANLINES */

/* Define to 1 if you have the 'jpeg16_write_scanlines' function. */
/* #undef HAVE_JPEG16_WRITE_SCANLINES */

/* Define to 1 if you have the 'jpeg_enable_lossless' function. */
/* #undef HAVE_JPEG_ENABLE_LOSSLESS */

/* Define to 1 if you have the 'jpeg_simple_lossless' function. */
/* #undef HAVE_JPEG_SIMPLE_LOSSLESS */

/* Define if you have the <lcms2.h> header file. */
/* #undef HAVE_LCMS2_H */

/* Define if you have the <lcms2/lcms2.h> header file. */
/* #undef HAVE_LCMS2_LCMS2_H */

/* Define to 1 if you have the 'gcov' library (-lgcov). */
/* #undef HAVE_LIBGCOV */

/* Define to 1 if you have the <limits.h> header file. */
#define HAVE_LIMITS_H 1

/* Define if you have Linux-compatible sendfile() */
#define HAVE_LINUX_SENDFILE 1

/* Define to 1 if you have the <linux/unistd.h> header file. */
#define HAVE_LINUX_UNISTD_H 1

/* Define to 1 if you have the 'lltostr' function. */
/* #undef HAVE_LLTOSTR */

/* Define to 1 if you have the <locale.h> header file. */
#define HAVE_LOCALE_H 1

/* Define to 1 if you have the 'localtime_r' function. */
#define HAVE_LOCALTIME_R 1

/* Define to 1 if the system has the type 'long long int'. */
#define HAVE_LONG_LONG_INT 1

/* Define to 1 if you have the 'lstat' function. */
#define HAVE_LSTAT 1

/* Define to 1 if you have the <machine/param.h> header file. */
/* #undef HAVE_MACHINE_PARAM_H */

/* Define to 1 if you have the <mach-o/dyld.h> header file. */
/* #undef HAVE_MACH_O_DYLD_H */

/* Define to 1 if you have the <malloc.h> header file. */
#define HAVE_MALLOC_H 1

/* Define to 1 if <wchar.h> declares mbstate_t. */
#define HAVE_MBSTATE_T 1

/* Define to 1 if you have the 'memmove' function. */
#define HAVE_MEMMOVE 1

/* Define to 1 if you have the 'memset' function. */
#define HAVE_MEMSET 1

/* Define to 1 if you have the <minix/config.h> header file. */
/* #undef HAVE_MINIX_CONFIG_H */

/* Define to 1 if you have the 'mkdir' function. */
#define HAVE_MKDIR 1

/* Define to 1 if you have the 'mkstemp' function. */
#define HAVE_MKSTEMP 1

/* Define to 1 if you have the 'mmap' function. */
#define HAVE_MMAP 1

/* Define if you have the mtmalloc memory allocation library */
/* #undef HAVE_MTMALLOC */

/* Define to 1 if you have the 'munmap' function. */
#define HAVE_MUNMAP 1

/* define if the compiler implements namespaces */
#define HAVE_NAMESPACES /**/

/* Define if g++ supports namespace std. */
#define HAVE_NAMESPACE_STD /**/

/* Define to 1 if you have the 'nanosleep' function. */
#define HAVE_NANOSLEEP 1

/* Define to 1 if you have the <ndir.h> header file, and it defines 'DIR'. */
/* #undef HAVE_NDIR_H */

/* Define to 1 if you have the <netdb.h> header file. */
#define HAVE_NETDB_H 1

/* Define to 1 if you have the <netinet/in.h> header file. */
#define HAVE_NETINET_IN_H 1

/* Define to 1 if you have the 'newlocale' function. */
#define HAVE_NEWLOCALE 1

/* Define to 1 if you have the <OpenCL/cl.h> header file. */
/* #undef HAVE_OPENCL_CL_H */

/* Define to 1 if you have the <OS.h> header file. */
/* #undef HAVE_OS_H */

/* Define to 1 if you have the 'pclose' function. */
#define HAVE_PCLOSE 1

/* Define to 1 if you have the 'poll' function. */
#define HAVE_POLL 1

/* Define to 1 if you have the 'popen' function. */
#define HAVE_POPEN 1

/* Define to 1 if you have the 'posix_fadvise' function. */
#define HAVE_POSIX_FADVISE 1

/* Define to 1 if you have the 'posix_fallocate' function. */
#define HAVE_POSIX_FALLOCATE 1

/* Define to 1 if you have the 'posix_madvise' function. */
#define HAVE_POSIX_MADVISE 1

/* Define to 1 if you have the 'posix_memalign' function. */
#define HAVE_POSIX_MEMALIGN 1

/* Define to 1 if you have the 'posix_spawnp' function. */
#define HAVE_POSIX_SPAWNP 1

/* Define to 1 if you have the 'pow' function. */
#define HAVE_POW 1

/* Define to 1 if you have the 'pread' function. */
#define HAVE_PREAD 1

/* Define to 1 if you have the <process.h> header file. */
/* #undef HAVE_PROCESS_H */

/* Define if you have POSIX threads libraries and header files. */
#define HAVE_PTHREAD 1

/* Have PTHREAD_PRIO_INHERIT. */
#define HAVE_PTHREAD_PRIO_INHERIT 1

/* Define to 1 if you have the 'putenv' function. */
#define HAVE_PUTENV 1

/* Define to 1 if you have the 'pwrite' function. */
#define HAVE_PWRITE 1

/* Define to 1 if you have the 'qsort_r' function. */
#define HAVE_QSORT_R 1

/* Define to 1 if you have the 'raise' function. */
#define HAVE_RAISE 1

/* Define to 1 if you have the 'rand_r' function. */
#define HAVE_RAND_R 1

/* Define to 1 if you have the 'readlink' function. */
#define HAVE_READLINK 1

/* Define to 1 if you have the 'realpath' function. */
#define HAVE_REALPATH 1

/* Define to 1 if you have the 'seekdir' function. */
#define HAVE_SEEKDIR 1

/* Define to 1 if you have the 'select' function. */
#define HAVE_SELECT 1

/* Define to 1 if you have the 'sendfile' function. */
#define HAVE_SENDFILE 1

/* Define to 1 if you have the 'setlocale' function. */
#define HAVE_SETLOCALE 1

/* Define to 1 if you have the 'setvbuf' function. */
#define HAVE_SETVBUF 1

/* X11 server supports shape extension */
#define HAVE_SHAPE 1

/* X11 server supports shared memory extension */
#define HAVE_SHARED_MEMORY 1

/* Define to 1 if you have the 'sigaction' function. */
#define HAVE_SIGACTION 1

/* Define to 1 if you have the 'sigemptyset' function. */
#define HAVE_SIGEMPTYSET 1

/* Define to 1 if you have the 'socket' function. */
#define HAVE_SOCKET 1

/* Define to 1 if you have the 'spawnvp' function. */
/* #undef HAVE_SPAWNVP */

/* Define to 1 if you have the 'sqrt' function. */
#define HAVE_SQRT 1

/* Define to 1 if you have the 'stat' function. */
#define HAVE_STAT 1

/* Define to 1 if you have the <stdarg.h> header file. */
#define HAVE_STDARG_H 1

/* Define to 1 if stdbool.h conforms to C99. */
#define HAVE_STDBOOL_H 1

/* Define to 1 if you have the <stddef.h> header file. */
#define HAVE_STDDEF_H 1

/* Define to 1 if you have the <stdint.h> header file. */
#define HAVE_STDINT_H 1

/* Define to 1 if you have the <stdio.h> header file. */
#define HAVE_STDIO_H 1

/* Define to 1 if you have the <stdlib.h> header file. */
#define HAVE_STDLIB_H 1

/* Define to 1 if you have the 'strcasecmp' function. */
#define HAVE_STRCASECMP 1

/* Define to 1 if you have the 'strcasestr' function. */
#define HAVE_STRCASESTR 1

/* Define to 1 if you have the 'strchr' function. */
#define HAVE_STRCHR 1

/* Define to 1 if you have the 'strcspn' function. */
#define HAVE_STRCSPN 1

/* Define to 1 if you have the 'strdup' function. */
#define HAVE_STRDUP 1

/* Define to 1 if you have the 'strerror' function. */
#define HAVE_STRERROR 1

/* Define if you have 'strerror_r'. */
#define HAVE_STRERROR_R 1

/* Define to 1 if cpp supports the ANSI # stringizing operator. */
#define HAVE_STRINGIZE 1

/* Define to 1 if you have the <strings.h> header file. */
#define HAVE_STRINGS_H 1

/* Define to 1 if you have the <string.h> header file. */
#define HAVE_STRING_H 1

/* Define to 1 if you have the 'strlcat' function. */
/* #undef HAVE_STRLCAT */

/* Define to 1 if you have the 'strlcpy' function. */
/* #undef HAVE_STRLCPY */

/* Define to 1 if you have the 'strncasecmp' function. */
#define HAVE_STRNCASECMP 1

/* Define to 1 if you have the 'strpbrk' function. */
#define HAVE_STRPBRK 1

/* Define to 1 if you have the 'strrchr' function. */
#define HAVE_STRRCHR 1

/* Define to 1 if you have the 'strspn' function. */
#define HAVE_STRSPN 1

/* Define to 1 if you have the 'strstr' function. */
#define HAVE_STRSTR 1

/* Define to 1 if you have the 'strtod' function. */
#define HAVE_STRTOD 1

/* Define to 1 if you have the 'strtod_l' function. */
#define HAVE_STRTOD_L 1

/* Define to 1 if you have the 'strtol' function. */
#define HAVE_STRTOL 1

/* Define to 1 if you have the 'strtoul' function. */
#define HAVE_STRTOUL 1

/* Define to 1 if 'tm_zone' is a member of 'struct tm'. */
#define HAVE_STRUCT_TM_TM_ZONE 1

/* Define to 1 if you have the <sun_prefetch.h> header file. */
/* #undef HAVE_SUN_PREFETCH_H */

/* Define to 1 if you have the 'symlink' function. */
#define HAVE_SYMLINK 1

/* Define to 1 if you have the 'sysconf' function. */
#define HAVE_SYSCONF 1

/* Define to 1 if you have the 'system' function. */
#define HAVE_SYSTEM 1

/* Define to 1 if you have the <sys/dir.h> header file, and it defines 'DIR'.
   */
/* #undef HAVE_SYS_DIR_H */

/* Define to 1 if you have the <sys/ipc.h> header file. */
#define HAVE_SYS_IPC_H 1

/* Define to 1 if you have the <sys/mman.h> header file. */
#define HAVE_SYS_MMAN_H 1

/* Define to 1 if you have the <sys/ndir.h> header file, and it defines 'DIR'.
   */
/* #undef HAVE_SYS_NDIR_H */

/* Define to 1 if you have the <sys/param.h> header file. */
#define HAVE_SYS_PARAM_H 1

/* Define to 1 if you have the <sys/resource.h> header file. */
#define HAVE_SYS_RESOURCE_H 1

/* Define to 1 if you have the <sys/sendfile.h> header file. */
#define HAVE_SYS_SENDFILE_H 1

/* Define to 1 if you have the <sys/socket.h> header file. */
#define HAVE_SYS_SOCKET_H 1

/* Define to 1 if you have the <sys/stat.h> header file. */
#define HAVE_SYS_STAT_H 1

/* Define to 1 if you have the <sys/syslimits.h> header file. */
/* #undef HAVE_SYS_SYSLIMITS_H */

/* Define to 1 if you have the <sys/times.h> header file. */
#define HAVE_SYS_TIMES_H 1

/* Define to 1 if you have the <sys/time.h> header file. */
#define HAVE_SYS_TIME_H 1

/* Define to 1 if you have the <sys/types.h> header file. */
#define HAVE_SYS_TYPES_H 1

/* Define to 1 if you have the <sys/uio.h> header file. */
#define HAVE_SYS_UIO_H 1

/* Define to 1 if you have the <sys/wait.h> header file. */
#define HAVE_SYS_WAIT_H 1

/* Define if you have the tcmalloc memory allocation library */
/* #undef HAVE_TCMALLOC */

/* Define to 1 if you have the 'telldir' function. */
#define HAVE_TELLDIR 1

/* Define to 1 if you have the 'tempnam' function. */
#define HAVE_TEMPNAM 1

/* Define to 1 if you have the 'times' function. */
#define HAVE_TIMES 1

/* Define to 1 if your 'struct tm' has 'tm_zone'. Deprecated, use
   'HAVE_STRUCT_TM_TM_ZONE' instead. */
#define HAVE_TM_ZONE 1

/* Define to 1 if you don't have 'tm_zone' but do have the external array
   'tzname'. */
/* #undef HAVE_TZNAME */

/* Define to 1 if the system has the type 'uintmax_t'. */
#define HAVE_UINTMAX_T 1

/* Define to 1 if the system has the type 'uintptr_t'. */
#define HAVE_UINTPTR_T 1

/* Define to 1 if you have the 'ulltostr' function. */
/* #undef HAVE_ULLTOSTR */

/* Define if you have umem memory allocation library */
/* #undef HAVE_UMEM */

/* Define to 1 if you have the <unistd.h> header file. */
#define HAVE_UNISTD_H 1

/* Define to 1 if the system has the type 'unsigned long long int'. */
#define HAVE_UNSIGNED_LONG_LONG_INT 1

/* Define to 1 if you have the 'uselocale' function. */
#define HAVE_USELOCALE 1

/* Define to 1 if you have the 'usleep' function. */
#define HAVE_USLEEP 1

/* Define to 1 if you have the 'utime' function. */
#define HAVE_UTIME 1

/* Define to 1 if you have the 'utimensat' function. */
#define HAVE_UTIMENSAT 1

/* Define to 1 if you have the <utime.h> header file. */
#define HAVE_UTIME_H 1

/* Define to 1 if you have the 'vfprintf' function. */
#define HAVE_VFPRINTF 1

/* Define to 1 if you have the 'vfprintf_l' function. */
/* #undef HAVE_VFPRINTF_L */

/* Define to 1 if you have the 'vsnprintf' function. */
#define HAVE_VSNPRINTF 1

/* Define to 1 if you have the 'vsnprintf_l' function. */
/* #undef HAVE_VSNPRINTF_L */

/* Define to 1 if you have the 'vsprintf' function. */
#define HAVE_VSPRINTF 1

/* Define to 1 if you have the 'waitpid' function. */
#define HAVE_WAITPID 1

/* Define to 1 if you have the <wchar.h> header file. */
#define HAVE_WCHAR_H 1

/* Define to 1 if you have the <xlocale.h> header file. */
/* #undef HAVE_XLOCALE_H */

/* Define to 1 if you have the '_aligned_malloc' function. */
/* #undef HAVE__ALIGNED_MALLOC */

/* Define to 1 if the system has the type '_Bool'. */
#define HAVE__BOOL 1

/* Define to 1 if you have the '_exit' function. */
#define HAVE__EXIT 1

/* Define to 1 if you have the '_NSGetExecutablePath' function. */
/* #undef HAVE__NSGETEXECUTABLEPATH */

/* Define to 1 if you have the '_pclose' function. */
/* #undef HAVE__PCLOSE */

/* Define to 1 if you have the '_popen' function. */
/* #undef HAVE__POPEN */

/* Define to 1 if you have the '_wfopen' function. */
/* #undef HAVE__WFOPEN */

/* Define to 1 if you have the '_wstat' function. */
/* #undef HAVE__WSTAT */

/* define if your compiler has __attribute__ */
#define HAVE___ATTRIBUTE__ 1

/* Define if you have libheif library */
#define HEIC_DELEGATE 1

/* Directory where ImageMagick architecture headers live. */
#define INCLUDEARCH_PATH "/usr/local/include/ImageMagick-7/"

/* Directory where ImageMagick headers live. */
#define INCLUDE_PATH "/usr/local/include/ImageMagick-7/"

/* ImageMagick is formally installed under prefix */
#define INSTALLED_SUPPORT 1

/* Define if you have JBIG library */
#define JBIG_DELEGATE 1

/* Define if you have JPEG library */
#define JPEG_DELEGATE 1

/* Define if you have jpeg-xl library */
/* #undef JXL_DELEGATE */

/* Define if you have LCMS library */
/* #undef LCMS_DELEGATE */

/* Define if you have OPENJP2 library */
/* #undef LIBOPENJP2_DELEGATE */

/* Directory where architecture-dependent files live. */
#define LIBRARY_ABSOLUTE_PATH "/usr/local/lib/ImageMagick-7.1.1/"

/* Subdirectory of lib where ImageMagick architecture dependent files are
   installed. */
#define LIBRARY_RELATIVE_PATH "ImageMagick-7.1.1"

/* Binaries in libraries path base name (will be during install linked to bin)
   */
#define LIB_BIN_BASEDIRNAME "bin"

/* Define if you have LQR library */
/* #undef LQR_DELEGATE */

/* Define if using libltdl to support dynamically loadable modules and OpenCL
   */
/* #undef LTDL_DELEGATE */

/* Native module suffix */
/* #undef LTDL_MODULE_EXT */

/* Define to the sub-directory where libtool stores uninstalled libraries. */
#define LT_OBJDIR ".libs/"

/* Define if you have LZMA library */
#define LZMA_DELEGATE 1

/* Define to prepend to default font search path. */
/* #undef MAGICK_FONT_PATH */

/* Target Host CPU */
#define MAGICK_TARGET_CPU x86_64

/* Target Host OS */
#define MAGICK_TARGET_OS linux-gnu

/* Target Host Vendor */
#define MAGICK_TARGET_VENDOR pc

/* Module directory name without ABI part. */
#define MODULES_BASEDIRNAME "modules"

/* Module directory dirname */
/* #undef MODULES_DIRNAME */

/* Magick API method prefix */
/* #undef NAMESPACE_PREFIX */

/* Magick API method prefix tag */
/* #undef NAMESPACE_PREFIX_TAG */

/* Define to 1 if assertions should be disabled. */
/* #undef NDEBUG */

/* Define if you have OPENEXR library */
/* #undef OPENEXR_DELEGATE */

/* Define to the address where bug reports for this package should be sent. */
#define PACKAGE_BUGREPORT "https://github.com/ImageMagick/ImageMagick/issues"

/* Define to the full name of this package. */
#define PACKAGE_NAME "ImageMagick"

/* Define to the full name and version of this package. */
#define PACKAGE_STRING "ImageMagick 7.1.1-47"

/* Define to the one symbol short name of this package. */
#define PACKAGE_TARNAME "ImageMagick"

/* Define to the home page for this package. */
#define PACKAGE_URL "https://imagemagick.org"

/* Define to the version of this package. */
#define PACKAGE_VERSION "7.1.1-47"

/* Define if you have PANGOCAIRO library */
/* #undef PANGOCAIRO_DELEGATE */

/* enable pipes (|) in filenames */
/* #undef PIPES_SUPPORT */

/* Define if you have PNG library */
#define PNG_DELEGATE 1

/* Define to necessary symbol if this constant uses a non-standard name on
   your system. */
/* #undef PTHREAD_CREATE_JOINABLE */

/* Pixel cache memory threshold (defaults to available memory) */
/* #undef PixelCacheThreshold */

/* Number of bits in a pixel Quantum (8/16/32/64) */
#define QUANTUM_DEPTH_OBSOLETE_IN_H 16

/* Define if you have RAQM library */
/* #undef RAQM_DELEGATE */

/* Define if you have LIBRAW library */
/* #undef RAW_R_DELEGATE */

/* Define if you have RSVG library */
/* #undef RSVG_DELEGATE */

/* Setjmp/longjmp are thread safe */
#define SETJMP_IS_THREAD_SAFE 1

/* Sharearch directory name without ABI part. */
#define SHAREARCH_BASEDIRNAME "config"

/* Sharearch directory dirname */
/* #undef SHAREARCH_DIRNAME */

/* Directory where architecture-independent configuration files live. */
#define SHARE_PATH "/usr/local/share/ImageMagick-7/"

/* Subdirectory of lib where architecture-independent configuration files
   live. */
#define SHARE_RELATIVE_PATH "ImageMagick-7"

/* The size of 'double', as computed by sizeof. */
#define SIZEOF_DOUBLE 8

/* The size of 'double_t', as computed by sizeof. */
#define SIZEOF_DOUBLE_T 8

/* The size of 'float', as computed by sizeof. */
#define SIZEOF_FLOAT 4

/* The size of 'float_t', as computed by sizeof. */
#define SIZEOF_FLOAT_T 4

/* The size of 'long double', as computed by sizeof. */
#define SIZEOF_LONG_DOUBLE 16

/* The size of 'size_t', as computed by sizeof. */
#define SIZEOF_SIZE_T 8

/* The size of 'unsigned long long', as computed by sizeof. */
#define SIZEOF_UNSIGNED_LONG_LONG 8

/* The size of 'void *', as computed by sizeof. */
#define SIZEOF_VOID_P 8

/* Define to 1 if the 'S_IS*' macros in <sys/stat.h> do not work properly. */
/* #undef STAT_MACROS_BROKEN */

/* Define to 1 if all of the C89 standard headers exist (not just the ones
   required in a freestanding environment). This macro is provided for
   backward compatibility; new code need not use it. */
#define STDC_HEADERS 1

/* Define to 1 if strerror_r returns char *. */
#define STRERROR_R_CHAR_P 1

/* Define if you have POSIX threads libraries and header files. */
#define THREAD_SUPPORT 1

/* Define if you have TIFF library */
#define TIFF_DELEGATE 1

/* Define to 1 if your <sys/time.h> declares 'struct tm'. */
/* #undef TM_IN_SYS_TIME */

/* Define if you have google ultrahdr library */
/* #undef UHDR_DELEGATE */

/* Enable extensions on AIX, Interix, z/OS.  */
#ifndef _ALL_SOURCE
# define _ALL_SOURCE 1
#endif
/* Enable general extensions on macOS.  */
#ifndef _DARWIN_C_SOURCE
# define _DARWIN_C_SOURCE 1
#endif
/* Enable general extensions on Solaris.  */
#ifndef __EXTENSIONS__
# define __EXTENSIONS__ 1
#endif
/* Enable GNU extensions on systems that have them.  */
#ifndef _GNU_SOURCE
# define _GNU_SOURCE 1
#endif
/* Enable X/Open compliant socket functions that do not require linking
   with -lxnet on HP-UX 11.11.  */
#ifndef _HPUX_ALT_XOPEN_SOCKET_API
# define _HPUX_ALT_XOPEN_SOCKET_API 1
#endif
/* Identify the host operating system as Minix.
   This macro does not affect the system headers' behavior.
   A future release of Autoconf may stop defining this macro.  */
#ifndef _MINIX
/* # undef _MINIX */
#endif
/* Enable general extensions on NetBSD.
   Enable NetBSD compatibility extensions on Minix.  */
#ifndef _NETBSD_SOURCE
# define _NETBSD_SOURCE 1
#endif
/* Enable OpenBSD compatibility extensions on NetBSD.
   Oddly enough, this does nothing on OpenBSD.  */
#ifndef _OPENBSD_SOURCE
# define _OPENBSD_SOURCE 1
#endif
/* Define to 1 if needed for POSIX-compatible behavior.  */
#ifndef _POSIX_SOURCE
/* # undef _POSIX_SOURCE */
#endif
/* Define to 2 if needed for POSIX-compatible behavior.  */
#ifndef _POSIX_1_SOURCE
/* # undef _POSIX_1_SOURCE */
#endif
/* Enable POSIX-compatible threading on Solaris.  */
#ifndef _POSIX_PTHREAD_SEMANTICS
# define _POSIX_PTHREAD_SEMANTICS 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-5:2014.  */
#ifndef __STDC_WANT_IEC_60559_ATTRIBS_EXT__
# define __STDC_WANT_IEC_60559_ATTRIBS_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-1:2014.  */
#ifndef __STDC_WANT_IEC_60559_BFP_EXT__
# define __STDC_WANT_IEC_60559_BFP_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-2:2015.  */
#ifndef __STDC_WANT_IEC_60559_DFP_EXT__
# define __STDC_WANT_IEC_60559_DFP_EXT__ 1
#endif
/* Enable extensions specified by C23 Annex F.  */
#ifndef __STDC_WANT_IEC_60559_EXT__
# define __STDC_WANT_IEC_60559_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-4:2015.  */
#ifndef __STDC_WANT_IEC_60559_FUNCS_EXT__
# define __STDC_WANT_IEC_60559_FUNCS_EXT__ 1
#endif
/* Enable extensions specified by C23 Annex H and ISO/IEC TS 18661-3:2015.  */
#ifndef __STDC_WANT_IEC_60559_TYPES_EXT__
# define __STDC_WANT_IEC_60559_TYPES_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TR 24731-2:2010.  */
#ifndef __STDC_WANT_LIB_EXT2__
# define __STDC_WANT_LIB_EXT2__ 1
#endif
/* Enable extensions specified by ISO/IEC 24747:2009.  */
#ifndef __STDC_WANT_MATH_SPEC_FUNCS__
# define __STDC_WANT_MATH_SPEC_FUNCS__ 1
#endif
/* Enable extensions on HP NonStop.  */
#ifndef _TANDEM_SOURCE
# define _TANDEM_SOURCE 1
#endif
/* Enable X/Open extensions.  Define to 500 only if necessary
   to make mbstate_t available.  */
#ifndef _XOPEN_SOURCE
/* # undef _XOPEN_SOURCE */
#endif


/* Define if you have WEBPMUX library */
#define WEBPMUX_DELEGATE 1

/* Define if you have WEBP library */
#define WEBP_DELEGATE 1

/* Define to use the Windows GDI32 library */
/* #undef WINGDI32_DELEGATE */

/* Define if using the dmalloc debugging malloc package */
/* #undef WITH_DMALLOC */

/* Define if you have WMF library */
/* #undef WMF_DELEGATE */

/* Define WORDS_BIGENDIAN to 1 if your processor stores words with the most
   significant byte first (like Motorola and SPARC, unlike Intel). */
#if defined AC_APPLE_UNIVERSAL_BUILD
# if defined __BIG_ENDIAN__
#  define WORDS_BIGENDIAN 1
# endif
#else
# ifndef WORDS_BIGENDIAN
/* #  undef WORDS_BIGENDIAN */
# endif
#endif

/* Location of X11 configure files */
#define X11_CONFIGURE_PATH ""

/* Define if you have X11 library */
#define X11_DELEGATE 1

/* Define if you have XML library */
#define XML_DELEGATE 1

/* Define to 1 if the X Window System is missing or not being used. */
/* #undef X_DISPLAY_MISSING */

/* Build self-contained, embeddable, zero-configuration ImageMagick */
/* #undef ZERO_CONFIGURATION_SUPPORT */

/* Define if you have ZIP library */
/* #undef ZIP_DELEGATE */

/* Define if you have ZLIB library */
#define ZLIB_DELEGATE 1

/* Define if you have ZSTD library */
/* #undef ZSTD_DELEGATE */

/* Number of bits in a file offset, on hosts where this is settable. */
/* #undef _FILE_OFFSET_BITS */

/* enable run-time bounds-checking */
/* #undef _FORTIFY_SOURCE */

/* Define to 1 if necessary to make fseeko visible. */
/* #undef _LARGEFILE_SOURCE */

/* Define to 1 on platforms where this makes off_t a 64-bit type. */
/* #undef _LARGE_FILES */

/* Number of bits in time_t, on hosts where this is settable. */
/* #undef _TIME_BITS */

/* Define for Solaris 2.5.1 so the uint32_t typedef from <sys/synch.h>,
   <pthread.h>, or <semaphore.h> is not used. If the typedef were allowed, the
   #define below would cause a syntax error. */
/* #undef _UINT32_T */

/* Define for Solaris 2.5.1 so the uint64_t typedef from <sys/synch.h>,
   <pthread.h>, or <semaphore.h> is not used. If the typedef were allowed, the
   #define below would cause a syntax error. */
/* #undef _UINT64_T */

/* Define for Solaris 2.5.1 so the uint8_t typedef from <sys/synch.h>,
   <pthread.h>, or <semaphore.h> is not used. If the typedef were allowed, the
   #define below would cause a syntax error. */
/* #undef _UINT8_T */

/* Define to 1 if type 'char' is unsigned and your compiler does not
   predefine this macro.  */
#ifndef __CHAR_UNSIGNED__
/* # undef __CHAR_UNSIGNED__ */
#endif

/* Define to 1 on platforms where this makes time_t a 64-bit type. */
/* #undef __MINGW_USE_VC2005_COMPAT */

/* Define to appropriate substitute if compiler does not have __func__ */
/* #undef __func__ */

/* Define to empty if 'const' does not conform to ANSI C. */
/* #undef const */

/* Define as 'int' if <sys/types.h> doesn't define. */
/* #undef gid_t */

/* Define to '__inline__' or '__inline' if that's what the C compiler
   calls it, or to nothing if 'inline' is not supported under any name.  */
#ifndef __cplusplus
/* #undef inline */
#endif

/* Define to the type of a signed integer type of width exactly 16 bits if
   such a type exists and the standard includes do not define it. */
/* #undef int16_t */

/* Define to the type of a signed integer type of width exactly 32 bits if
   such a type exists and the standard includes do not define it. */
/* #undef int32_t */

/* Define to the type of a signed integer type of width exactly 64 bits if
   such a type exists and the standard includes do not define it. */
/* #undef int64_t */

/* Define to the type of a signed integer type of width exactly 8 bits if such
   a type exists and the standard includes do not define it. */
/* #undef int8_t */

/* Define to the widest signed integer type if <stdint.h> and <inttypes.h> do
   not define. */
/* #undef intmax_t */

/* Define to the type of a signed integer type wide enough to hold a pointer,
   if such a type exists, and if the system does not define it. */
/* #undef intptr_t */

/* Define to a type if <wchar.h> does not define. */
/* #undef mbstate_t */

/* Define to 'int' if <sys/types.h> does not define. */
/* #undef mode_t */

/* Define to 'long int' if <sys/types.h> does not define. */
/* #undef off_t */

/* Define as a signed integer type capable of holding a process identifier. */
/* #undef pid_t */

/* Define to the equivalent of the C99 'restrict' keyword, or to
   nothing if this is not supported.  Do not define if restrict is
   supported only directly.  */
#define restrict __restrict__
/* Work around a bug in older versions of Sun C++, which did not
   #define __restrict__ or support _Restrict or __restrict__
   even though the corresponding Sun C compiler ended up with
   "#define restrict _Restrict" or "#define restrict __restrict__"
   in the previous line.  This workaround can be removed once
   we assume Oracle Developer Studio 12.5 (2016) or later.  */
#if defined __SUNPRO_CC && !defined __RESTRICT && !defined __restrict__
# define _Restrict
# define __restrict__
#endif

/* Define as 'unsigned int' if <stddef.h> doesn't define. */
/* #undef size_t */

/* Define as 'int' if <sys/types.h> doesn't define. */
/* #undef ssize_t */

/* Define as 'int' if <sys/types.h> doesn't define. */
/* #undef uid_t */

/* Define to the type of an unsigned integer type of width exactly 16 bits if
   such a type exists and the standard includes do not define it. */
/* #undef uint16_t */

/* Define to the type of an unsigned integer type of width exactly 32 bits if
   such a type exists and the standard includes do not define it. */
/* #undef uint32_t */

/* Define to the type of an unsigned integer type of width exactly 64 bits if
   such a type exists and the standard includes do not define it. */
/* #undef uint64_t */

/* Define to the type of an unsigned integer type of width exactly 8 bits if
   such a type exists and the standard includes do not define it. */
/* #undef uint8_t */

/* Define to the widest unsigned integer type if <stdint.h> and <inttypes.h>
   do not define. */
/* #undef uintmax_t */

/* Define to the type of an unsigned integer type wide enough to hold a
   pointer, if such a type exists, and if the system does not define it. */
/* #undef uintptr_t */

/* Define to empty if the keyword 'volatile' does not work. Warning: valid
   code using 'volatile' can become incorrect without. Disable with care. */
/* #undef volatile */
