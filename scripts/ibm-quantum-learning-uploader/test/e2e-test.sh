#!/usr/bin/env bash
#
# This test installs the uploader tool, generates a notebook that contains a
# unique ID, uploads the notebook, then checks that ID appears on the staging
# site.
 
set -e

echo "Making new Python environment"
rm -rf .venv
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install selenium

echo "Installing the uploader tool"
pip install ../

UUID=$(python -c "import uuid; print(uuid.uuid4())")
echo "Attempting to upload to staging with UUID: $UUID"
mkdir -p test-lesson test-tutorial
sed "s/_REPLACE_WITH_UUID_/$UUID/" template.ipynb > test-lesson/upload-me.ipynb
cp test-lesson/upload-me.ipynb test-tutorial/upload-me.ipynb
sync-lessons
rm test-lesson/upload-me.ipynb test-tutorial/upload-me.ipynb

echo "Sleeping 2s to let changes reflect on-site"
sleep 2

echo "Checking for UUID in web pages"
python assert-string-on-page.py $UUID
