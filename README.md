# Academic Profile Website

A clean, modern, and responsive academic profile website template designed for researchers and PhD students.

## Features

- **Professional Introduction** - Showcase your academic background and expertise
- **Research Interests** - Highlight your research areas with visual cards
- **Projects** - Display selected research projects with descriptions and links
- **Publications** - Organized publication list by year
- **News & Updates** - Share recent talks, awards, and collaborations
- **Contact & Social Links** - Connect with visitors through multiple platforms
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Easy to Customize** - Simple HTML/CSS structure, no frameworks required

## Quick Start

1. **Edit the HTML file** (`index.html`):
   - Replace `[Your Name]` with your actual name
   - Update `[Your Field]` with your field of study
   - Fill in your professional introduction
   - Add your research interests, projects, and publications
   - Update contact information and social media links
   - Optionally add a profile photo (name it `profile.jpg` in the same folder)

2. **Customize the CSS** (`style.css`) if needed:
   - Change colors by modifying the CSS variables in `:root`
   - Adjust fonts, spacing, or layout as desired

3. **Preview locally**:
   - Simply open `index.html` in your web browser

4. **Deploy to GitHub Pages**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

## Customization Guide

### Colors
Edit the CSS variables in `style.css` (lines 11-18):
```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #3498db;    /* Bright blue */
    --text-color: #333;            /* Dark text */
    --text-light: #666;            /* Light text */
    /* ... */
}
```

### Profile Photo
- Add a photo named `profile.jpg` in the same directory
- Recommended size: 400x400px or larger (square aspect ratio)
- Supported formats: JPG, PNG

### Sections
Each section can be easily added, removed, or reordered:
- Each section has an `id` attribute for navigation
- Update the navigation links if you add/remove sections
- Sections are styled with the `.section` class

### Publications Format
Choose your preferred citation style and maintain consistency. The template uses a simple format:
```
Author(s). "Title." Conference/Journal, Year. [Links]
```

## File Structure

```
profile/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── README.md           # This file
└── profile.jpg         # Your profile photo (optional)
```

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips for Academic Profiles

1. **Keep it updated** - Regularly add new publications, projects, and news
2. **Be selective** - Highlight your best work, not everything
3. **Use links** - Link to papers, code repositories, and demos when available
4. **Professional tone** - Maintain a formal yet approachable writing style
5. **Optimize images** - Compress images to ensure fast loading
6. **Check mobile view** - Many visitors will view on mobile devices
7. **Include contact info** - Make it easy for collaborators to reach you

## Deployment Options

### GitHub Pages (Recommended)
- Free hosting at `https://yourusername.github.io`
- Automatic updates when you push changes
- Custom domain support available

### Other Options
- GitLab Pages
- Netlify
- Vercel
- Any static hosting service

## License

This template is free to use for academic and personal purposes. No attribution required.

## Support

This is a static template. For issues or questions about HTML/CSS basics, consult:
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)

---

**Last updated:** October 2024
