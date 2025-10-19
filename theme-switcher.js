// Theme configuration object
const themes = {
    'purple-pink': {
        gradientStart: '#667eea',
        gradientMiddle: '#764ba2',
        gradientEnd: '#f093fb',
        sidebarTextColor: 'white',
        accent1: '#667eea',
        accent2: '#764ba2',
        accent3: '#f093fb',
        accent1Rgb: '102, 126, 234',
        accent2Rgb: '118, 75, 162',
        accent3Rgb: '240, 147, 251'
    },
    'blue-cyan': {
        gradientStart: '#1e3a8a',
        gradientMiddle: '#3b82f6',
        gradientEnd: '#06b6d4',
        sidebarTextColor: 'white',
        accent1: '#1e3a8a',
        accent2: '#3b82f6',
        accent3: '#06b6d4',
        accent1Rgb: '30, 58, 138',
        accent2Rgb: '59, 130, 246',
        accent3Rgb: '6, 182, 212'
    },
    'navy-blue': {
        gradientStart: '#0f172a',
        gradientMiddle: '#1e40af',
        gradientEnd: '#3b82f6',
        sidebarTextColor: 'white',
        accent1: '#0f172a',
        accent2: '#1e40af',
        accent3: '#3b82f6',
        accent1Rgb: '15, 23, 42',
        accent2Rgb: '30, 64, 175',
        accent3Rgb: '59, 130, 246'
    },
    'teal-emerald': {
        gradientStart: '#0d9488',
        gradientMiddle: '#14b8a6',
        gradientEnd: '#10b981',
        sidebarTextColor: 'white',
        accent1: '#0d9488',
        accent2: '#14b8a6',
        accent3: '#10b981',
        accent1Rgb: '13, 148, 136',
        accent2Rgb: '20, 184, 166',
        accent3Rgb: '16, 185, 129'
    },
    'indigo-purple': {
        gradientStart: '#4c1d95',
        gradientMiddle: '#6366f1',
        gradientEnd: '#8b5cf6',
        sidebarTextColor: 'white',
        accent1: '#4c1d95',
        accent2: '#6366f1',
        accent3: '#8b5cf6',
        accent1Rgb: '76, 29, 149',
        accent2Rgb: '99, 102, 241',
        accent3Rgb: '139, 92, 246'
    },
    'soft-blue': {
        gradientStart: '#dbeafe',
        gradientMiddle: '#bfdbfe',
        gradientEnd: '#93c5fd',
        sidebarTextColor: '#1e3a8a',
        accent1: '#3b82f6',
        accent2: '#2563eb',
        accent3: '#1d4ed8',
        accent1Rgb: '59, 130, 246',
        accent2Rgb: '37, 99, 235',
        accent3Rgb: '29, 78, 216'
    },
    'lavender': {
        gradientStart: '#e0e7ff',
        gradientMiddle: '#c7d2fe',
        gradientEnd: '#a5b4fc',
        sidebarTextColor: '#312e81',
        accent1: '#6366f1',
        accent2: '#4f46e5',
        accent3: '#4338ca',
        accent1Rgb: '99, 102, 241',
        accent2Rgb: '79, 70, 229',
        accent3Rgb: '67, 56, 202'
    },
    'mint-aqua': {
        gradientStart: '#ccfbf1',
        gradientMiddle: '#99f6e4',
        gradientEnd: '#5eead4',
        sidebarTextColor: '#134e4a',
        accent1: '#14b8a6',
        accent2: '#0d9488',
        accent3: '#0f766e',
        accent1Rgb: '20, 184, 166',
        accent2Rgb: '13, 148, 136',
        accent3Rgb: '15, 118, 110'
    },
    'peach-rose': {
        gradientStart: '#fed7aa',
        gradientMiddle: '#fbbf24',
        gradientEnd: '#fb923c',
        sidebarTextColor: '#78350f',
        accent1: '#f59e0b',
        accent2: '#d97706',
        accent3: '#b45309',
        accent1Rgb: '245, 158, 11',
        accent2Rgb: '217, 119, 6',
        accent3Rgb: '180, 83, 9'
    },
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
    }
};

// Function to apply theme
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;

    // Set CSS variables
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

    // Save to localStorage
    localStorage.setItem('selectedTheme', themeName);

    // Update active state in modal
    updateActiveTheme(themeName);
}

// Function to update active theme indicator
function updateActiveTheme(themeName) {
    document.querySelectorAll('.theme-option').forEach(btn => {
        const small = btn.querySelector('small');
        if (btn.dataset.theme === themeName) {
            small.textContent = '(Current)';
            btn.classList.add('active');
        } else {
            const originalText = btn.querySelector('small').getAttribute('data-original') || small.textContent;
            if (!btn.querySelector('small').hasAttribute('data-original')) {
                btn.querySelector('small').setAttribute('data-original', small.textContent);
            }
            small.textContent = originalText.replace('(Current)', '').trim();
            btn.classList.remove('active');
        }
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme or use default
    const savedTheme = localStorage.getItem('selectedTheme') || 'purple-pink';
    applyTheme(savedTheme);

    // Theme toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    const modal = document.getElementById('theme-modal');
    const closeBtn = document.querySelector('.theme-modal-close');

    // Open modal
    toggleBtn.addEventListener('click', function() {
        modal.classList.add('active');
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Theme option buttons
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            applyTheme(themeName);

            // Optional: Close modal after selection
            // modal.classList.remove('active');
        });
    });

    // Store original text for theme options
    document.querySelectorAll('.theme-option small').forEach(small => {
        small.setAttribute('data-original', small.textContent);
    });
});
