#!usr/bin/bash
set -e

echo "Making new Python environment"
rm -rf .venv
python -m venv .venv
. .venv/bin/activate

echo "Installing the uploader tool"
pip install --upgrade pip
pip install ../

echo "Attempting upload to staging"
# Generate a new notebook with a UUID, then check that UUID appears on the
# staging website
UUID=$(python -c "import uuid; print(uuid.uuid4())")
echo "UUID: $UUID"
sed s"s/REPLACE_WITH_UUID/$UUID/" test-lesson/template.ipynb > test-lesson/upload-me.ipynb
sync-lessons
rm test-lesson/upload-me.ipynb

echo "Sleeping 2s to let changes reflect on-site"
sleep 2

echo "Checking for UUID in web page"
curl https://learning.www-dev.quantum-computing.ibm.com/course/upload-test/test-lesson &> /dev/stdout | grep -q "$UUID"
