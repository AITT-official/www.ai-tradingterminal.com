// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Online/Offline Status
function updateConnectionStatus() {
    const statusElement = document.getElementById('connection-status');
    const statusDot = document.querySelector('.status-dot');
    
    if (navigator.onLine) {
        statusElement.textContent = 'Online';
        statusDot.style.backgroundColor = '#42c196';
        hideOfflineBanner();
    } else {
        statusElement.textContent = 'Offline';
        statusDot.style.backgroundColor = '#ff6b6b';
        showOfflineBanner();
    }
}

function showOfflineBanner() {
    let banner = document.querySelector('.offline-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.className = 'offline-banner';
        banner.textContent = 'You are currently offline. Some features may be limited.';
        document.body.prepend(banner);
    }
    banner.classList.add('show');
}

function hideOfflineBanner() {
    const banner = document.querySelector('.offline-banner');
    if (banner) {
        banner.classList.remove('show');
    }
}

// Listen for online/offline events
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

// Initialize connection status on load
document.addEventListener('DOMContentLoaded', () => {
    updateConnectionStatus();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or banner
    const installBanner = document.createElement('div');
    installBanner.className = 'install-banner';
    installBanner.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background-color: var(--card-bg); border-bottom: 1px solid var(--border-color);">
            <span>Install AITT for offline access</span>
            <button id="install-button" style="padding: 0.5rem 1rem; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Install</button>
        </div>
    `;
    
    document.body.prepend(installBanner);
    
    document.getElementById('install-button').addEventListener('click', async () => {
        installBanner.remove();
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    });
});

// Log when app is installed
window.addEventListener('appinstalled', () => {
    console.log('AITT has been installed');
});

// Handle cache updates
if ('serviceWorker' in navigator) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        
        // Show update notification instead of forcing reload
        const updateBanner = document.createElement('div');
        updateBanner.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; background-color: var(--primary-color); color: white; padding: 1rem; text-align: center; z-index: 10000; display: flex; align-items: center; justify-content: center; gap: 1rem;';
        updateBanner.innerHTML = `
            <span>A new version is available!</span>
            <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; background: white; color: var(--primary-color); border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Refresh</button>
            <button onclick="this.parentElement.remove()" style="padding: 0.5rem 1rem; background: transparent; color: white; border: 1px solid white; border-radius: 4px; cursor: pointer;">Dismiss</button>
        `;
        document.body.prepend(updateBanner);
    });
}

// Analytics placeholder (can be replaced with actual analytics)
function logPageView() {
    console.log('Page view logged:', window.location.pathname);
}

logPageView();
