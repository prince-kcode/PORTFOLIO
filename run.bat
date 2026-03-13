@echo off
title Prince Kumar — Portfolio
color 0A

echo ==========================================
echo   Prince Kumar Portfolio — Launcher
echo ==========================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is NOT installed!
    echo.
    echo Please download and install it from:
    echo   https://nodejs.org/
    echo.
    echo After installing, close this window and double-click run.bat again.
    echo.
    pause
    exit /b
)

echo [OK] Node.js found: 
node --version
echo.

:: Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo [INSTALLING] npm packages... this may take a minute.
    echo.
    npm install
    echo.
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed. Check the output above.
        pause
        exit /b
    )
    echo [OK] Dependencies installed!
    echo.
)

echo ==========================================
echo   Starting dev server...
echo   Open http://localhost:3000 in browser
echo   Press Ctrl+C to stop
echo ==========================================
echo.

npm run dev
pause
