# Define the directories to search
$directories = @("docs/guides", "docs/migration-guides")

# Define the search pattern and replacement text
$searchPattern = ">>> "
$replacementText = "print("

# Loop through each directory and process the files
foreach ($directory in $directories) {
    Get-ChildItem -Path $directory -Recurse -File | ForEach-Object {
        (Get-Content -Path $_.FullName) -replace [regex]::Escape($searchPattern), $replacementText | Set-Content -Path $_.FullName
    }
}