import shutil
import tempfile
import os
from pathlib import Path
from getpass import getpass
import random
import requests
import sys
from yaspin import yaspin
from yaspin.spinners import Spinners


class Lesson:
    def __init__(self, lesson_path, lesson_id):
        self.path = Path(lesson_path)
        self.name = self.path.parts[-1]
        self.id = lesson_id
        self.zip_path = None

    def zip(self):
        self.zip_path = Path(
            shutil.make_archive(
                Path(tempfile.gettempdir(), "iql_lesson_sync", self.name),
                "zip",
                root_dir=self.path,
            )
        )

    def delete_zip(self):
        if self.zip_path and self.zip_path.exists():
            os.remove(self.zip_path)


class API:
    def __init__(self, name, api_url, website_url, hide_urls=False):
        self.name = name
        self.url = api_url
        self.website_url = website_url
        self.auth_header = {"Authorization": f"Bearer {self.get_access_token()}"}
        self.hide_urls = hide_urls

    def get_access_token(self):
        """
        Either token is in env variable, or we use login details to get temporary
        access token.
        """
        # Highlight where we're pushing to avoid accidental push to production
        color = "\033[93m" if self.name == "production" else "\033[94m"

        if os.environ.get("LEARNING_API_TOKEN", None) is not None:
            print(f'✅ Found token for {color}\033[1m{self.name}\033[0m')
            return os.environ.get("LEARNING_API_TOKEN")

        print(f'🔑 Log into {color}\033[1m{self.name}\033[0m:')
        response = requests.post(
            f"{self.url}/auth/login",
            json=(
                {
                    "email": input("   Email: "),
                    "password": getpass("   Password: "),
                }
            ),
        )
        if response.status_code != 200:
            print("❌ Couldn't log in 😕")
            sys.exit()

        print(f'✅ Logged in')
        return response.json()["data"]["access_token"]

    def push(self, lesson: Lesson):
        """
        Wrapper for `_push` to handle spinner and Exceptions
        """
        base_msg = f'Push \033[1m{lesson.name}\033[0m'
        spinner = yaspin(Spinners.dots12, text=base_msg, color="blue")
        spinner.start()

        def _log_fn(msg):
            spinner.text = f"{base_msg}: {msg}"

        try:
            web_page = self._push(lesson, _log_fn)

        except KeyboardInterrupt:
            _log_fn("Cancelled by user")
            spinner.fail("❌")
            lesson.delete_zip()
            sys.exit()

        except Exception as err:
            spinner.fail("❌")
            lesson.delete_zip()
            raise err

        spinner.text = base_msg
        spinner.ok("✅")

        if not self.hide_urls:
            print(f"   \033[30m╷\033[0m Web page: \033[96m{web_page}\033[0m")
            print(f"   \033[30m╵\033[0m Lesson data: \033[96m{self.url}/admin/content/lessons/{lesson.id}\033[0m")

    def _push(self, lesson: Lesson, log):
        """
        Steps:
          1. Get the translation ID of the English translation (needed for upload)
          2. Zip the folder containing source files
          3. Upload the zip file to the API
          4. Link the zip file in the API to the lesson
          5. Clean up: delete the zip file from local disk

        Args:
            lesson (Lesson)
            log (callable): accepts a string to show to user
        Returns:
            str: URL of lesson on the website
        """
        # 1. Get ID of english translation (needed for upload)
        log("Finding English translation...")
        response = requests.get(
            f"{self.url}/items/lessons/{lesson.id}"
            "?fields[]=translations.id,translations.languages_code",
            headers=self.auth_header
        )
        response.raise_for_status()

        for translation in response.json()["data"]["translations"]:
            if translation["languages_code"] == "en-US":
                translation_id = translation["id"]
                break
            raise ValueError("No 'en-US' translation found!")

        # 2. Zip file
        log("Zipping folder...")
        lesson.zip()

        # 3. Upload .zip
        log("Uploading...")
        with open(lesson.zip_path, "rb") as fileobj:
            response = requests.post(
                self.url + "/files",
                files={"file": (fileobj)},
                data={"filename": lesson.zip_path.stem},
                headers=self.auth_header,
            )
        response.raise_for_status()
        temp_file_id = response.json()["data"]["id"]

        log("Linking upload...")
        # 4. Link .zip to content
        response = requests.patch(
            f"{self.url}/items/lessons/{lesson.id}",
            json={
                "translations": [{"id": translation_id, "temporal_file": temp_file_id}]
            },
            headers=self.auth_header,
        )
        response.raise_for_status()

        # 5. Clean up zipped file afterwards
        log("Cleaning up...")
        lesson.delete_zip()

        # 6. Return URLs
        log("Getting URLs...")
        response = requests.get(
            f"{self.url}/items/lessons/{lesson.id}",
            headers=self.auth_header
        )
        response.raise_for_status()
        lesson_slug = response.json()['data']['slug']

        log("Getting URLs...")
        response = requests.get(
            f"{self.url}/items/courses/{response.json()['data']['course']}",
            headers=self.auth_header
        )
        response.raise_for_status()
        course_slug = response.json()['data']['slug']
        return f"{self.website_url}/course/{course_slug}/{lesson_slug}"
