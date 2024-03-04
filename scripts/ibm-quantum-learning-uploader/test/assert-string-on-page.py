import sys
import time
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

PAGES_TO_CHECK = [
    "https://learning.www-dev.quantum.ibm.com/course/upload-tool-tester/test-lesson",
    "https://learning.www-dev.quantum.ibm.com/tutorial/e2-e-uploader-test-tutorial"
]

options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(options)
for page in PAGES_TO_CHECK:
    driver.get(page)
    time.sleep(2)
    assert sys.argv[1] in driver.page_source
driver.quit()
