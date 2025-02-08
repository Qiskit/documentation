# Define the directories to search
$directories = @("docs/guides", "docs/migration-guides")

# Define the search pattern and replacement format
$searchPattern = ">>> (.+)"
$replacementText = "print(`$1)"

# Loop through each directory and process the files
foreach ($directory in $directories) {
    Get-ChildItem -Path $directory -Recurse -File | ForEach-Object {
        # Read file content
        $content = Get-Content -Path $_.FullName

        # Replace occurrences of >>> with print()
        $newContent = $content -replace $searchPattern, $replacementText

        # Write back the modified content
        $newContent | Set-Content -Path $_.FullName
    }
}
