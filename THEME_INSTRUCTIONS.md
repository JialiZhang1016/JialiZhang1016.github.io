# Theme Switching Instructions

This website now has a flexible theme system that allows you to easily switch between different color schemes.

## How to Switch Themes

1. Open `/Users/captainzhang/Documents/profile/style.css`
2. Scroll to the top of the file (lines 1-187)
3. Look for the theme section with multiple color schemes
4. **Comment out** the current active theme by wrapping it with `/* */`
5. **Uncomment** your desired theme by removing the `/* */` around it

## Available Themes

### Dark Themes (white sidebar text)

**CURRENT THEME: Purple to Pink (Original)**
- Gradient: Purple (#667eea) → Deep Purple (#764ba2) → Light Pink (#f093fb)
- Style: Modern, creative, tech-forward
- Best for: Creative AI/ML applications

**THEME 1: Deep Blue to Cyan (Professional AI/Tech)**
- Gradient: Navy Blue (#1e3a8a) → Blue (#3b82f6) → Cyan (#06b6d4)
- Style: Professional, trustworthy, intelligent
- Best for: Emphasizing academic rigor and technical depth

**THEME 2: Navy to Electric Blue (Data Science Standard)**
- Gradient: Dark Navy (#0f172a) → Navy Blue (#1e40af) → Electric Blue (#3b82f6)
- Style: Classic data science, professional
- Best for: Traditional academic audience, job applications

**THEME 3: Teal to Emerald (Research & Innovation)**
- Gradient: Teal (#0d9488) → Bright Teal (#14b8a6) → Emerald (#10b981)
- Style: Fresh, innovative, energetic
- Best for: Highlighting research innovation

**THEME 4: Indigo to Purple (Refined Tech)**
- Gradient: Deep Indigo (#4c1d95) → Indigo (#6366f1) → Purple (#8b5cf6)
- Style: Refined, tech industry standard
- Best for: AI/ML with creative applications

### Light Themes (dark sidebar text)

**LIGHT THEME 1: Soft Blue to Sky (Light & Professional)**
- Gradient: Pale Blue (#dbeafe) → Light Blue (#bfdbfe) → Sky Blue (#93c5fd)
- Style: Clean, minimal, professional
- Best for: Minimalist aesthetic

**LIGHT THEME 2: Lavender to Periwinkle (Soft Purple Tones)** ⭐ RECOMMENDED FOR LIGHTER VERSION
- Gradient: Pale Lavender (#e0e7ff) → Lavender (#c7d2fe) → Periwinkle (#a5b4fc)
- Style: Soft, approachable, modern
- Best for: Keeping similar purple vibe but lighter

**LIGHT THEME 3: Mint to Aqua (Fresh & Light)**
- Gradient: Mint (#ccfbf1) → Light Aqua (#99f6e4) → Aqua (#5eead4)
- Style: Fresh, unique, modern
- Best for: Standing out with fresh look

**LIGHT THEME 4: Peach to Rose (Warm & Inviting)**
- Gradient: Peach (#fed7aa) → Gold (#fbbf24) → Orange (#fb923c)
- Style: Warm, energetic, personable
- Best for: Creative, approachable impression

**LIGHT THEME 5: Pearl to Silver Blue (Elegant & Subtle)**
- Gradient: Pearl (#f0f9ff) → Silver Blue (#e0f2fe) → Light Blue (#bae6fd)
- Style: Subtle, elegant, ultra-clean
- Best for: Maximum professionalism with subtle flair

## Example: How to Switch to Light Theme 2

1. Open `style.css`
2. Find the "CURRENT THEME: Purple to Pink" section (around line 15)
3. Comment it out:
```css
/* ========== CURRENT THEME: Purple to Pink (Original) ========== */
/* :root {
    --gradient-start: #667eea;
    --gradient-middle: #764ba2;
    --gradient-end: #f093fb;

    --sidebar-text-color: white;

    --accent-1: #667eea;
    --accent-2: #764ba2;
    --accent-3: #f093fb;

    --accent-1-rgb: 102, 126, 234;
    --accent-2-rgb: 118, 75, 162;
    --accent-3-rgb: 240, 147, 251;
} */
```

4. Find "LIGHT THEME 2: Lavender to Periwinkle" (around line 121)
5. Uncomment it by removing the `/* */`:
```css
/* ========== LIGHT THEME 2: Lavender to Periwinkle (Soft Purple Tones) ========== */
:root {
    --gradient-start: #e0e7ff;
    --gradient-middle: #c7d2fe;
    --gradient-end: #a5b4fc;

    --sidebar-text-color: #312e81;

    --accent-1: #6366f1;
    --accent-2: #4f46e5;
    --accent-3: #4338ca;

    --accent-1-rgb: 99, 102, 241;
    --accent-2-rgb: 79, 70, 229;
    --accent-3-rgb: 67, 56, 202;
}
```

6. Save the file and refresh your browser!

## What Gets Changed

When you switch themes, the following elements automatically update:
- ✅ Page background gradient
- ✅ Sidebar text color
- ✅ Navigation links color
- ✅ Section header borders
- ✅ Research card borders and backgrounds
- ✅ Skill item borders and labels
- ✅ Project card borders and backgrounds
- ✅ Button backgrounds
- ✅ Award item borders and year text
- ✅ News date text
- ✅ Contact icon colors
- ✅ Footer text color

Everything is synchronized automatically - just switch the theme and all colors update!

## Tips

- **Important**: Only ONE theme should be uncommented at a time
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R) to see changes
- Light themes automatically adjust sidebar text to dark for better contrast
- Test different themes to see which one best represents your professional brand
- For academic positions: Consider THEME 2 (Navy to Electric Blue)
- For industry positions: Consider THEME 4 (Indigo to Purple)
- For a lighter, softer look: Consider LIGHT THEME 2 (Lavender to Periwinkle)
