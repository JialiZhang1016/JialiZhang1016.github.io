// Theme configuration object
const themes = {
    'pearl-blue': {
        gradientStart: '#f0f9ff',
        gradientMiddle: '#e0f2fe',
        gradientEnd: '#bae6fd',
        sidebarTextColor: '#0c4a6e',
        accent1: '#0284c7',
        accent2: '#0369a1',
        accent3: '#075985',
        accent1Rgb: '2, 132, 199',
        accent2Rgb: '3, 105, 161',
        accent3Rgb: '7, 89, 133'
    },
    'mst-green': {
        gradientStart: '#E6F0EC',
        gradientMiddle: '#D4E5DD',
        gradientEnd: '#C2DACE',
        sidebarTextColor: '#1A2B23',
        accent1: '#009E73',
        accent2: '#154734',
        accent3: '#0D2E22',
        accent1Rgb: '0, 158, 115',
        accent2Rgb: '21, 71, 52',
        accent3Rgb: '13, 46, 34'
    },
    'light-academic': {
        gradientStart: '#E8F0FE',
        gradientMiddle: '#D0E2FF',
        gradientEnd: '#B8D4FE',
        sidebarTextColor: '#1A2332',
        accent1: '#0066CC',
        accent2: '#004499',
        accent3: '#0052A3',
        accent1Rgb: '0, 102, 204',
        accent2Rgb: '0, 68, 153',
        accent3Rgb: '0, 82, 163'
    }
};

// Background pattern SVGs
const patterns = {
    'none': {
        svg: 'none',
        size: '0'
    },
    'topographic': {
        svg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cpath d='M300 50c138 0 250 112 250 250s-112 250-250 250S50 438 50 300 162 50 300 50z' fill='none' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M300 100c110 0 200 90 200 200s-90 200-200 200-200-90-200-200 90-200 200-200z' fill='none' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M300 150c83 0 150 67 150 150s-67 150-150 150-150-67-150-150 67-150 150-150z' fill='none' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M300 200c55 0 100 45 100 100s-45 100-100 100-100-45-100-100 45-100 100-100z' fill='none' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M300 250c28 0 50 22 50 50s-22 50-50 50-50-22-50-50 22-50 50-50z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E\")",
        size: '400px 400px'
    },
    'dots': {
        svg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23000'/%3E%3C/svg%3E\")",
        size: '40px 40px'
    },
    'waves': {
        svg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Cpath d='M0 30c25-15 50-15 75 0s50 15 75 0 50-15 75 0 50 15 75 0' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E\")",
        size: '200px 60px'
    },
    'hexagons': {
        svg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpath d='M30 1l25.98 15v30L30 61 4.02 46V16z' fill='none' stroke='%23000' stroke-width='0.8'/%3E%3C/svg%3E\")",
        size: '60px 52px'
    },
    'grid': {
        svg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cpath d='M50 0H0v50' fill='none' stroke='%23000' stroke-width='0.6'/%3E%3C/svg%3E\")",
        size: '50px 50px'
    }
};

// Function to apply theme
function applyTheme(themeName) {
    var theme = themes[themeName];
    if (!theme) return;

    var root = document.documentElement;

    root.style.setProperty('--gradient-start', theme.gradientStart);
    root.style.setProperty('--gradient-middle', theme.gradientMiddle);
    root.style.setProperty('--gradient-end', theme.gradientEnd);
    root.style.setProperty('--sidebar-text-color', theme.sidebarTextColor);
    root.style.setProperty('--accent-1', theme.accent1);
    root.style.setProperty('--accent-2', theme.accent2);
    root.style.setProperty('--accent-3', theme.accent3);
    root.style.setProperty('--accent-1-rgb', theme.accent1Rgb);
    root.style.setProperty('--accent-2-rgb', theme.accent2Rgb);
    root.style.setProperty('--accent-3-rgb', theme.accent3Rgb);

    localStorage.setItem('selectedTheme', themeName);
    updateActiveState('.theme-option', 'data-theme', themeName);
}

// Function to apply pattern
function applyPattern(patternName) {
    var pattern = patterns[patternName];
    if (!pattern) return;

    var root = document.documentElement;

    if (patternName === 'none') {
        root.style.setProperty('--pattern-image', 'none');
        root.style.setProperty('--pattern-opacity', '0');
    } else {
        root.style.setProperty('--pattern-image', pattern.svg);
        root.style.setProperty('--pattern-size', pattern.size);
        root.style.setProperty('--pattern-opacity', '0.12');
    }

    localStorage.setItem('selectedPattern', patternName);
    updateActiveState('.pattern-option', 'data-pattern', patternName);
}

// Generic active state updater
function updateActiveState(selector, attr, activeName) {
    document.querySelectorAll(selector).forEach(function(btn) {
        if (btn.getAttribute(attr) === activeName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('selectedTheme') || 'pearl-blue';
    var savedPattern = localStorage.getItem('selectedPattern') || 'topographic';
    applyTheme(savedTheme);
    applyPattern(savedPattern);

    var toggleBtn = document.getElementById('theme-toggle');
    var modal = document.getElementById('theme-modal');
    var closeBtn = document.querySelector('.theme-modal-close');

    toggleBtn.addEventListener('click', function() {
        modal.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Color theme buttons
    document.querySelectorAll('.theme-option').forEach(function(btn) {
        btn.addEventListener('click', function() {
            applyTheme(this.getAttribute('data-theme'));
        });
    });

    // Pattern buttons
    document.querySelectorAll('.pattern-option').forEach(function(btn) {
        btn.addEventListener('click', function() {
            applyPattern(this.getAttribute('data-pattern'));
        });
    });
});
