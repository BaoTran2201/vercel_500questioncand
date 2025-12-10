# PowerShell script to extract questions from DOCX with proper Vietnamese encoding

$docxPath = Get-Item "*.docx" | Select-Object -First 1 -ExpandProperty FullName
$tempDir = "temp_docx_text"

Write-Host "Extracting content from DOCX..." -ForegroundColor Yellow

# Create temp directory
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Copy to ZIP and extract
$zipPath = "$tempDir.zip"
Copy-Item -Path $docxPath -Destination $zipPath -Force
Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force
Remove-Item $zipPath -Force

# Read document.xml which contains all text
$docXmlPath = Join-Path $tempDir "word\document.xml"
if (Test-Path $docXmlPath) {
    Write-Host "Found document.xml" -ForegroundColor Green
    
    # Read with UTF-8 encoding
    [System.Text.Encoding]::UTF8.GetString([System.IO.File]::ReadAllBytes($docXmlPath)) | 
    Out-File "$tempDir\document_text.txt" -Encoding UTF8
    
    Write-Host "Extracted: $tempDir\document_text.txt" -ForegroundColor Green
    Write-Host "`nFirst 1000 characters of content:" -ForegroundColor Yellow
    $text = Get-Content "$tempDir\document_text.txt" -Raw
    Write-Host $text.Substring(0, [Math]::Min(1000, $text.Length)) -ForegroundColor Cyan
} else {
    Write-Host "ERROR: document.xml not found" -ForegroundColor Red
}

Write-Host "`nDone! Check $tempDir folder" -ForegroundColor Green
