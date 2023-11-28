import sys
import os
import yaml
from pathlib import Path
from .upload import Lesson, API

CONF_FILE = "./learning-api.conf.yaml"
API_URLS = {
    "staging": "https://learning-api-dev.quantum-computing.ibm.com",
    "production": "https://learning-api.quantum-computing.ibm.com",
}
WEBSITE_URLS = {
    "staging": "https://learning.www-dev.quantum-computing.ibm.com",
    "production": "https://learning.quantum-computing.ibm.com",
}


def get_api_name():
    """
    Either from environment token or user
    """
    if os.environ.get("LEARNING_API_ENVIRONMENT", False):
        return os.environ.get("LEARNING_API_ENVIRONMENT").lower()

    if os.environ.get("LEARNING_API_TOKEN", False):
        raise EnvironmentError(
            "Set 'LEARNING_API_ENVIRONMENT' variable to 'staging' or "
            "'production' when using the 'LEARNING_API_TOKEN' environment "
            "variable. You can unset the token using the command:\n\n    "
            "unset LEARNING_API_TOKEN\n"
        )

    response = input("Push to staging or production? (s/p): ").lower()
    if response in ["s", "staging"]:
        return "staging"
    if response in ["p", "production"]:
        return "production"
    print("Not understood; enter either 's' for staging or 'p' for production.")
    print("Trying again...")
    return get_api_name()


def get_switch(switch, pop=True):
    """
    Return True if switch in sys.argv, else False
    If `pop`, also remove switch from sys.argv
    """
    if switch not in sys.argv:
        return False
    if pop:
        sys.argv.remove(switch)
    return True


def check_for_unrecognized_switches():
    for arg in sys.argv:
        if arg.startswith("-"):
            print(f'Unsupported argument: "{arg}"')
            sys.exit(1)


def sync_lessons():
    if get_switch("--help"):
        print(
            "Usage: sync-lessons [ path(s)/to/folder(s) ]\n"
            "Optional switches:\n"
            "  --hide-urls:  Don't print URLs after uploading a lesson\n"
            "  --help: Show this message and exit"
        )
        sys.exit()
    hide_urls = get_switch("--hide-urls")
    check_for_unrecognized_switches()

    api_name = get_api_name()
    api = API(
        name=api_name,
        api_url=API_URLS[api_name],
        website_url=WEBSITE_URLS[api_name],
        hide_urls=hide_urls,
    )

    lesson_urls = parse_yaml(api_name)
    if len(sys.argv) > 1:
        paths = sys.argv[1:]
    else:
        paths = lesson_urls.keys()

    for lesson_path in paths:
        lesson = Lesson(lesson_path, lesson_urls[lesson_path])
        api.push(lesson)

    print("✨ Sync complete! ✨\n")


def parse_yaml(api_name):
    """
    Get dict of lesson paths and lesson URLs
    Args:
        api_name (str): "staging" or "production"
    Returns:
        dict: { lesson_path: lesson_url }
    """
    with open(CONF_FILE) as f:
        api_info = yaml.safe_load(f.read())

    output = {}
    for lesson in api_info["lessons"]:
        path = lesson["path"]
        lesson_url = lesson[f"url{api_name.lower().capitalize()}"]
        output[path] = lesson_url

    return output
