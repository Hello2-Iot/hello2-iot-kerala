Write-Host "Starting Hello2-IoT Web Server..." -ForegroundColor Cyan
Write-Host "Open your browser at: http://localhost:3000" -ForegroundColor Green
Write-Host ""

$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if ($pythonCmd) {
    python -m http.server 3000
} else {
    & "C:\Users\hookn\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 3000
}
