# Easy Theme Switching Guide 🎨

Your website now has a **super easy** one-click theme switcher!

## How to Use

### Method 1: Click the Palette Button (EASIEST!) ⭐

1. **Look at the bottom-right corner** of your website
2. You'll see a **floating button with a palette icon** 🎨
3. **Click it** to open the theme selector
4. **Click any theme** you like to instantly apply it!
5. Your choice is **automatically saved** - it will be remembered next time you visit

That's it! No coding, no file editing required.

---

## Available Themes

### Dark Themes (White Text)
- **Purple to Pink** - Modern, creative, tech-forward ✨ (Current default)
- **Blue to Cyan** - Professional AI/Tech 💼
- **Navy to Blue** - Data Science standard 📊
- **Teal to Emerald** - Research & Innovation 🌿
- **Indigo to Purple** - Refined tech industry 🔮

### Light Themes (Dark Text)
- **Soft Blue** - Clean & professional ☁️
- **Lavender** - Soft purple tones 💜
- **Mint to Aqua** - Fresh & light 🌊
- **Peach to Rose** - Warm & inviting 🍑
- **Pearl Blue** - Elegant & subtle 💎

---

## Features

✅ **One-click switching** - No coding required
✅ **Live preview** - See the gradient before selecting
✅ **Auto-save** - Your choice is remembered using browser storage
✅ **Instant apply** - All colors update immediately
✅ **Fully responsive** - Works on all devices
✅ **Beautiful animations** - Smooth transitions

---

## What Changes?

When you switch themes, these elements automatically update:
- Page background gradient
- Sidebar text color
- All section borders
- Project cards
- Awards section
- News dates
- Buttons and links
- Contact icons
- Everything!

---

## Technical Details (Optional)

If you want to customize further or set a different default theme:

1. Open `theme-switcher.js`
2. Find line with: `const savedTheme = localStorage.getItem('selectedTheme') || 'purple-pink';`
3. Change `'purple-pink'` to any theme name:
   - `'blue-cyan'`
   - `'navy-blue'`
   - `'teal-emerald'`
   - `'indigo-purple'`
   - `'soft-blue'`
   - `'lavender'`
   - `'mint-aqua'`
   - `'peach-rose'`
   - `'pearl-blue'`

---

## Files Involved

- **index.html** - Contains the theme selector button and modal
- **style.css** - Contains all theme color definitions and styles
- **theme-switcher.js** - JavaScript that makes the theme switching work

---

## Tips

💡 **Try different themes** to see which one best represents your professional brand
💡 The floating button **hides on print** so it won't show when you print your resume
💡 Each theme is designed to be **professional and accessible**
💡 Light themes automatically adjust text colors for **optimal readability**

---

## Troubleshooting

**Q: The button doesn't appear**
A: Make sure `theme-switcher.js` is in the same folder as `index.html`

**Q: Themes don't save**
A: Check that your browser allows localStorage (it should by default)

**Q: Some colors don't change**
A: Do a hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

---

Enjoy customizing your profile! 🎉
