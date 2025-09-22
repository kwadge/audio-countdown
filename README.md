# Audio Countdown App

This is a **Progressive Web App (PWA)** that runs a modern audio countdown timer with spoken announcements, mute option, and offline alarm.

## Files included
- `index.html` → main app (Liquid Glass design, responsive with viewport fix)
- `manifest.json` → PWA manifest
- `service-worker.js` → offline caching
- `icon-192.png`, `icon-512.png` → app icons
- embedded offline alarm sound (inside `index.html`)

## Running locally (quick test)
1. Unzip all files into a folder on your computer.
2. Open a terminal in that folder and run:
   ```bash
   python3 -m http.server 8080
   ```
3. On your phone (same Wi-Fi), open:  
   `http://<your-computer-ip>:8080`
   (example: `http://192.168.1.20:8080`)

## Installing on your phone
- **iPhone (Safari)**  
  1. Open the local/hosted site.  
  2. Tap **Share** → **Add to Home Screen**.  
  3. The app will appear like a native app.

- **Android (Chrome/Edge)**  
  1. Open the site.  
  2. Tap menu → **Add to Home Screen** or **Install App**.  

The app will now run full-screen, offline, with sound and announcements.

## Hosting online (optional)
For permanent use, you can upload the folder to:
- GitHub Pages  
- Netlify  
- Vercel  
- Glitch  

Once hosted over HTTPS, you can install it just like a real app.

---
Enjoy your **Audio Countdown** ⏱🎶
