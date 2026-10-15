@echo off
title Hello2-IoT Server
echo Starting Hello2-IoT Web Server...
echo Open your browser at: http://localhost:3000
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    python -m http.server 3000
) else (
    "C:\Users\hookn\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 3000
)
pause
