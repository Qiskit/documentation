import sys
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
driver = webdriver.Firefox()
driver.get('https://learning.www-dev.quantum-computing.ibm.com/course/upload-tool-tester/test-lesson')
import time
time.sleep(2)
assert sys.argv[1] in driver.page_source
driver.quit()
