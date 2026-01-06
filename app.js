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
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker controller changed, reloading...');
        window.location.reload();
    });
}

// Analytics placeholder (can be replaced with actual analytics)
function logPageView() {
    console.log('Page view logged:', window.location.pathname);
}

logPageView();
