#Define the directories to search
$directories = @("docs/guides", "docs/migration-guides")

#Define the search pattern and replacement format
$searchPattern = ">>> (.+)"
$replacementText = "$1"

foreach ($directory in $directories) {
    Get-ChildItem -Path $directory -Recurse -File | ForEach-Object {
        # Read file content
        $content = Get-Content -Path $_.FullName

        # Replace occurrences of >>> with the matched group
        $newContent = $content -replace $searchPattern, $replacementText

        # Write back the modified content
        $newContent | Set-Content -Path $_.FullName
    }
}