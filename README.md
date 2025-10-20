# Academic Profile Website

A modern, responsive academic profile website featuring a dynamic theme system with 13+ customizable color schemes. Designed for researchers and PhD students to showcase their work professionally.

## Features

- **Two-Column Layout** - 30% sidebar with profile info and navigation, 70% main content area
- **Professional Introduction** - Showcase your academic background and expertise
- **Research Interests** - Highlight your research areas with visual cards
- **Projects** - Display selected research projects with descriptions and embedded images
- **Publications** - Organized publication list by year with links to papers and code
- **News & Updates** - Timeline view of recent talks, awards, and collaborations
- **Awards & Honors** - Dedicated section for achievements and recognition
- **Technical Skills** - Display your programming and research skills
- **Contact & Social Links** - Connect with visitors through multiple platforms (Email, Google Scholar, GitHub, LinkedIn)
- **Dynamic Theme Switcher** - 13 professionally designed themes (dark and light modes) with one-click switching
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Easy to Customize** - Simple HTML/CSS/JS structure, no build process required

## Quick Start

1. **Clone or download** this repository

2. **Edit your information** in `index.html`:
   - Update name, title, and affiliation in the sidebar
   - Replace contact links (email, Google Scholar, GitHub, LinkedIn)
   - Fill in the About section with your background
   - Add your news updates, research interests, and projects
   - Update publications, awards, and technical skills
   - Add your profile photo as `profile.jpg` (400x400px recommended)

3. **Choose your theme**:
   - Open the website in a browser
   - Click the palette icon (🎨) in the bottom-right corner
   - Select from 13 professional themes
   - Your selection is automatically saved

4. **Preview locally**:
   - Simply open `index.html` in your web browser
   - No server or build process required

5. **Deploy to GitHub Pages**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

## Customization Guide

### Theme Switching
The easiest way to customize your site's appearance:
- Click the floating palette button (🎨) in the bottom-right corner
- Choose from 13 professionally designed themes
- Themes automatically saved in browser's localStorage
- See `THEME_GUIDE.md` for detailed theme documentation

**Available Themes:**
- **Dark Themes**: Purple-Pink, Blue-Cyan, Navy-Blue, Teal-Emerald, Indigo-Purple, Forest-Emerald
- **Light Themes**: Soft-Blue, Lavender, Mint-Aqua, Peach-Rose, Pearl-Blue, Sage-Mint, Lime-Spring, Sky-Ocean

### Advanced Color Customization
To create your own theme or modify existing ones:
1. Open `theme-switcher.js`
2. Add a new theme object in the `themes` configuration
3. Specify gradient colors and accent colors
4. Add the theme option in `index.html` modal

### Profile Photo
- Add a photo named `profile.jpg` in the root directory
- Recommended size: 400x400px or larger (square aspect ratio)
- Supported formats: JPG, PNG, WebP
- Displays as circular avatar in sidebar

### Content Sections
Each section can be easily added, removed, or reordered:
- Each section has an `id` attribute for navigation
- Update the sidebar navigation links if you add/remove sections
- Sections are styled with the `.section` class
- Main sections: About, News, Research, Projects, Publications, Awards, Skills

### Publications & Projects
- Publications support direct links to papers and code repositories
- Projects can include embedded images (local or external URLs)
- News items are styled as a timeline with date badges
- Awards displayed with year and description

## File Structure

```
profile/
├── index.html              # Main HTML file with content
├── style.css               # Main stylesheet with all visual styles
├── theme-switcher.js       # Theme switching functionality
├── THEME_GUIDE.md          # Detailed theme usage guide
├── THEME_INSTRUCTIONS.md   # Technical theme implementation details
├── README.md               # This file
├── profile.jpg             # Your profile photo (add your own)
└── readme_plots/           # Directory for project images
    └── Flowshop_Microgrid.png
```

## Technologies Used

- **Pure HTML5** - Semantic markup, no frameworks
- **CSS3** - Modern flexbox/grid layouts, CSS custom properties (variables)
- **Vanilla JavaScript** - Theme switching with localStorage
- **Font Awesome 6.5.1** - Icon library via CDN
- **No build process** - Works directly in any browser

## Browser Compatibility

Fully tested and compatible with:
- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements:**
- JavaScript enabled (for theme switching)
- localStorage support (all modern browsers)
- CSS Grid and Flexbox support

## Tips for Academic Profiles

1. **Keep it updated** - Regularly add new publications, projects, and news items
2. **Be selective** - Highlight your best work and most significant achievements
3. **Use links** - Link to papers (arXiv, IEEE, ACM), code repositories, and demos
4. **Professional tone** - Maintain a formal yet approachable writing style
5. **Optimize images** - Compress images to ensure fast loading times
6. **Check mobile view** - Test on mobile devices (many visitors use smartphones)
7. **Include contact info** - Make it easy for collaborators to reach you
8. **Choose appropriate theme** - Select colors that match your field and personal brand
9. **Update availability status** - Keep your job-seeking status current
10. **SEO optimization** - Use descriptive meta tags for better search visibility

## Deployment Options

### GitHub Pages (Recommended)
The easiest way to deploy your academic profile:

1. Create a repository named `yourusername.github.io`
2. Push your code to the repository
3. Your site will be live at `https://yourusername.github.io`

**Benefits:**
- Free hosting with SSL
- Automatic updates when you push changes
- Custom domain support available
- Built-in CDN for fast loading worldwide

### Alternative Hosting Options
- **Netlify** - Drag-and-drop deployment, custom domains, continuous deployment
- **Vercel** - Fast deployment, excellent performance, automatic HTTPS
- **GitLab Pages** - Similar to GitHub Pages with CI/CD integration
- **Cloudflare Pages** - Fast global CDN, unlimited bandwidth
- **Any static hosting service** - This is a pure static site with no server requirements

### Local Development
No special setup needed:
```bash
# Simply open the file in your browser
open index.html
# Or use a simple HTTP server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Features Showcase

### Responsive Design
- Two-column layout on desktop (30/70 split)
- Single-column stacked layout on mobile
- Smooth transitions and hover effects
- Print-friendly styles

### Theme System
- 13 professionally designed color schemes
- One-click theme switching
- Persistent theme selection (localStorage)
- Smooth color transitions
- Optimized for readability in all themes

### Content Sections
- **Availability Banner** - Highlight your job search status
- **News Timeline** - Chronological updates with date badges
- **Research Cards** - Visual presentation of research areas
- **Project Showcase** - Images, descriptions, and links
- **Publication List** - Organized by year with citations
- **Awards Section** - Highlight achievements and honors
- **Skills Grid** - Display technical and professional skills

## Customization Examples

### Adding a New News Item
```html
<div class="news-item">
    <span class="news-date">Month Year</span>
    <span class="news-content">
        🎉 Your news update here with <strong>emphasis</strong> and <a href="url">links</a>.
    </span>
</div>
```

### Adding a New Project
```html
<div class="project">
    <h3>Project Title</h3>
    <p class="project-meta">Status: Ongoing | Duration: 2024-Present</p>
    <div class="project-image">
        <img src="project-image.png" alt="Project Description">
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <p class="project-links">
        <a href="paper-url" class="btn-link">Paper</a>
        <a href="code-url" class="btn-link">Code</a>
    </p>
</div>
```

## License

This template is free to use for academic and personal purposes. No attribution required.

## Support & Resources

- **Theme Customization** - See `THEME_GUIDE.md` for detailed instructions
- **HTML/CSS Reference** - [MDN Web Docs](https://developer.mozilla.org/)
- **Font Awesome Icons** - [Font Awesome Documentation](https://fontawesome.com/icons)
- **Git/GitHub Help** - [GitHub Pages Documentation](https://docs.github.com/en/pages)

## Acknowledgments

Designed specifically for academic researchers with features including:
- Professional color schemes suitable for academic contexts
- Publication and research project showcases
- Awards and honors sections
- News timeline for academic milestones
- Responsive design for all devices

---

**Last updated:** October 2025
