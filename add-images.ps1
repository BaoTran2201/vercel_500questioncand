# PowerShell script to add image fields to cand-questions.ts

$csvPath = "image-mappings-extracted.csv"
$questionsFile = "src\data\cand-questions.ts"

# Read CSV and create mapping
Write-Host "Reading CSV mappings..." -ForegroundColor Yellow
$csv = Import-Csv $csvPath
$imageMappings = @{}
$csv | ForEach-Object {
    $imageMappings[[int]$_.questionId] = $_.imageUrl
}

Write-Host "Loaded $($imageMappings.Count) image mappings" -ForegroundColor Green

# Read questions file
Write-Host "`nReading questions file..." -ForegroundColor Yellow
$content = Get-Content $questionsFile -Raw

# Add images to questions
Write-Host "Adding image fields to questions..." -ForegroundColor Yellow
$modifiedCount = 0

foreach ($questionId in $imageMappings.Keys | Sort-Object) {
    $imageUrl = $imageMappings[$questionId]
    
    # Pattern to find the question and add image field
    # Look for: id: <number>, ... correctAnswer: <number>,
    # Add: image: "<url>",
    
    $pattern = "(\s+id:\s+$questionId,[\s\S]*?correctAnswer:\s+\d+,)"
    
    if ($content -match $pattern) {
        $match = $Matches[1]
        
        # Check if image already exists
        if ($match -notmatch 'image:') {
            $replacement = "$match`n    image: `"$imageUrl`","
            $content = $content -replace [regex]::Escape($match), $replacement
            $modifiedCount++
            
            if ($modifiedCount % 50 -eq 0) {
                Write-Host "  Modified $modifiedCount questions..." -ForegroundColor Cyan
            }
        } else {
            Write-Host "Question $questionId already has image" -ForegroundColor Gray
        }
    } else {
        Write-Host "Could not find question $questionId" -ForegroundColor Red
    }
}

# Save updated file
Write-Host "`nSaving updated file..." -ForegroundColor Yellow
$content | Set-Content $questionsFile -Encoding UTF8 -NoNewline

Write-Host "`n✅ SUCCESS! Modified $modifiedCount questions" -ForegroundColor Green
Write-Host "File updated: $questionsFile" -ForegroundColor Green
