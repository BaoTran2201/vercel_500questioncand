# PowerShell script to extract images from DOCX and create mappings
# DOCX files are ZIP archives

$docxPath = Get-Item "*.docx" | Select-Object -First 1 -ExpandProperty FullName
$tempDir = "temp_docx_extract"
$outputCsv = "image-mappings-extracted.csv"

# Question ID ranges with images
$ranges = @(
    @{Start=131; End=240},  # Traffic signs (110 questions)
    @{Start=331; End=345},  # Dashboard symbols (15 questions)
    @{Start=346; End=455}   # Situation diagrams (110 questions)
)

# Create question ID list
$questionIds = @()
foreach ($range in $ranges) {
    $questionIds += $range.Start..$range.End
}

Write-Host "Total questions with images: $($questionIds.Count)" -ForegroundColor Green

# Create temp directory
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Extract DOCX (it's a ZIP file)
Write-Host "`nExtracting DOCX file..." -ForegroundColor Yellow

# Copy DOCX to .zip temporarily
$zipPath = "$tempDir.zip"
Copy-Item -Path $docxPath -Destination $zipPath -Force
Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force
Remove-Item $zipPath -Force

# Find images in word/media
$mediaPath = Join-Path $tempDir "word\media"
if (Test-Path $mediaPath) {
    $images = Get-ChildItem -Path $mediaPath -File | Sort-Object Name
    Write-Host "Found $($images.Count) images in DOCX" -ForegroundColor Green
    
    # Create CSV mappings
    $mappings = @()
    $mappings += "questionId,imageUrl,originalFile"
    
    for ($i = 0; $i -lt [Math]::Min($images.Count, $questionIds.Count); $i++) {
        $questionId = $questionIds[$i]
        $image = $images[$i]
        $imageUrl = "/images/question_$($questionId.ToString('000'))$($image.Extension)"
        
        $mappings += "$questionId,$imageUrl,$($image.Name)"
        
        Write-Host "Q$questionId -> $($image.Name)" -ForegroundColor Cyan
    }
    
    # Save CSV
    $mappings | Out-File -FilePath $outputCsv -Encoding utf8
    Write-Host "`nCSV file created: $outputCsv" -ForegroundColor Green
    
    # Copy images to public/images
    Write-Host "`nCopying images to public/images..." -ForegroundColor Yellow
    $copiedCount = 0
    for ($i = 0; $i -lt [Math]::Min($images.Count, $questionIds.Count); $i++) {
        $questionId = $questionIds[$i]
        $sourceImage = $images[$i]
        $destPath = "public\images\question_$($questionId).jpeg"
        
        Copy-Item -Path $sourceImage.FullName -Destination $destPath -Force
        $copiedCount++
        
        if ($copiedCount % 50 -eq 0) {
            Write-Host "  Copied $copiedCount images..." -ForegroundColor Cyan
        }
    }
    Write-Host "  Total copied: $copiedCount images" -ForegroundColor Green
    
    # Display sample
    Write-Host "`nFirst 5 mappings:" -ForegroundColor Yellow
    $mappings[1..5] | ForEach-Object { Write-Host "  $_" }
    
} else {
    Write-Host "ERROR: No media folder found in DOCX" -ForegroundColor Red
}

# Cleanup
Remove-Item $tempDir -Recurse -Force
Write-Host "`nDone! Check $outputCsv for mappings" -ForegroundColor Green
