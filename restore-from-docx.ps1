# Script to extract and rebuild cand-questions.ts from DOCX with proper encoding

$docxPath = Get-Item "*.docx" | Select-Object -First 1 -ExpandProperty FullName
$tempDir = "temp_docx_restore"

Write-Host "Step 1: Extracting DOCX..." -ForegroundColor Yellow

if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Copy and extract
$zipPath = "$tempDir.zip"
Copy-Item -Path $docxPath -Destination $zipPath -Force
Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force
Remove-Item $zipPath -Force

# Read document.xml
$docXmlPath = Join-Path $tempDir "word\document.xml"
$docXml = [xml](Get-Content $docXmlPath -Encoding UTF8)

Write-Host "Step 2: Extracting text content..." -ForegroundColor Yellow

# Get all text nodes from paragraphs
$textNodes = $docXml.SelectNodes("//w:t", @{w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"})

$allText = ""
foreach ($node in $textNodes) {
    $allText += $node.InnerText
}

# Save with proper UTF-8 encoding (NO BOM)
$outputFile = "$tempDir\extracted_text.txt"
[System.IO.File]::WriteAllText($outputFile, $allText, [System.Text.UTF8Encoding]$false)

Write-Host "Extracted text saved to: $outputFile" -ForegroundColor Green
Write-Host "`nFirst 500 characters:" -ForegroundColor Cyan
$allText.Substring(0, [Math]::Min(500, $allText.Length))

Write-Host "`n✓ Done! Use this text to restore cand-questions.ts" -ForegroundColor Green
