# Pooja Ashok Jadhav - Portfolio Website

A professional and responsive portfolio website built with HTML, CSS, JavaScript, and Bootstrap.

## Features

✅ **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
✅ **Modern UI/UX** - Beautiful animations and smooth transitions
✅ **Navigation** - Smooth scrolling navigation with active link highlighting
✅ **Multiple Sections** - Home, About, Skills, Experience, Education, Certifications, and Contact
✅ **Skills Showcase** - Organized skill categories with visual indicators
✅ **Experience Timeline** - Detailed professional experience with achievements
✅ **Education Background** - Complete educational qualifications
✅ **Certifications** - Display of professional certifications
✅ **Contact Information** - Easy-to-access contact details and social media links
✅ **Interactive Elements** - Hover effects, animations, and smooth scrolling
✅ **Copy to Clipboard** - Click contact info to copy to clipboard
✅ **Scroll-to-Top Button** - Easy navigation back to the top
✅ **Print Friendly** - Can be printed as a PDF resume

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

### Option 1: Open Directly in Browser
1. Simply open the `index.html` file in any web browser
2. Navigate through the portfolio using the navigation menu

### Option 2: Use a Local Server
For better performance and to avoid CORS issues, use a local server:

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Sections Overview

### 1. **Navigation Bar**
   - Sticky navigation with smooth scrolling to each section
   - Mobile-responsive hamburger menu
   - Active link highlighting

### 2. **Hero Section**
   - Eye-catching introduction with background animation
   - Quick links to contact and social media
   - Responsive typography

### 3. **About Section**
   - Professional summary
   - Career objectives and expertise overview

### 4. **Skills Section**
   - 6 organized skill categories:
     - Cloud Platforms (AWS)
     - DevOps Tools (Docker, Terraform, etc.)
     - Automation & CI/CD (Jenkins, GitHub Actions)
     - Monitoring & Ticketing (Site24x7, ServiceNow, etc.)
     - Operating Systems & Networking (Linux, Windows Server)
     - Soft Skills (Leadership, Communication, etc.)

### 5. **Experience Section**
   - 3 professional roles with detailed achievements
   - Timeline with date badges
   - Bullet-point highlights of key accomplishments

### 6. **Education Section**
   - Bachelor's Degree (B.E.)
   - Diploma qualification
   - 10th Grade education

### 7. **Certifications Section**
   - Oracle Cloud Infrastructure 2025 Certified Foundations Associate
   - Linux Essentials Certification

### 8. **Contact Section**
   - Phone number
   - Email address
   - LinkedIn profile link
   - GitHub profile link
   - Social media icons

### 9. **Footer**
   - Copyright information
   - Professional tagline

## Customization

### Colors
To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0d47a1;      /* Change primary blue */
    --secondary-color: #1565c0;    /* Change secondary blue */
    --accent-color: #ff6f00;       /* Change accent orange */
    --light-bg: #f5f5f5;           /* Change light background */
    --dark-text: #212121;          /* Change text color */
}
```

### Content
Simply update the text content in `index.html` with your own information.

### Fonts
The website uses 'Segoe UI' font family. To change it, modify in `styles.css`:
```css
body {
    font-family: 'Your Font Here', sans-serif;
}
```

## Interactive Features

### Smooth Scrolling
Click any navigation link to smoothly scroll to that section.

### Copy to Clipboard
Click on any contact information (email or phone) to copy it to your clipboard.

### Scroll-to-Top Button
A floating button appears at the bottom-right when you scroll down, clicking it will smooth scroll back to the top.

### Responsive Mobile Menu
On mobile devices, the menu collapses into a hamburger icon that expands when clicked.

## Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading of images (via Bootstrap)
- CSS animations optimized with GPU acceleration
- Minimal JavaScript for fast loading
- Responsive images and typography
- Efficient color gradients

## External Dependencies

- **Bootstrap 5.3** - CSS Framework
- **Font Awesome 6.4** - Icons and symbols
- **Google Fonts** - (Optional) Can be added for custom fonts

All dependencies are loaded from CDNs, so no installation is required.

## Hosting Options

You can host this portfolio on:

1. **GitHub Pages** (Free)
   - Push to GitHub repository
   - Enable GitHub Pages in settings
   - Access via `username.github.io`

2. **Netlify** (Free)
   - Drag and drop to deploy
   - Automatic SSL certificate
   - Custom domain support

3. **Vercel** (Free)
   - Simple GitHub integration
   - Automatic deployments
   - Fast global CDN

4. **AWS S3 + CloudFront**
   - Static website hosting
   - Cost-effective

5. **Shared Web Hosting**
   - Traditional hosting providers
   - Full control and customization

## Tips for Best Results

1. **Mobile Testing** - Always test on multiple devices
2. **Loading Speed** - Optimize any additional images you add
3. **SEO** - Add meta descriptions and keywords in the HTML `<head>`
4. **Analytics** - Consider adding Google Analytics for traffic tracking
5. **Backup** - Keep backups of your files
6. **Updates** - Regularly update your portfolio with new projects and achievements

## Print as PDF

Press `Ctrl+P` (or `Cmd+P` on Mac) to open the print dialog and save as PDF for a resume copy.

## Troubleshooting

### Navigation not working?
- Ensure all section IDs match the href attributes in navigation links
- Clear browser cache and reload

### Styles not loading?
- Check that `styles.css` is in the same directory as `index.html`
- Verify file paths in the HTML

### JavaScript functions not working?
- Ensure `script.js` is loaded at the end of the HTML
- Check browser console for errors

### Images not showing?
- Verify image file paths are correct
- Check CORS settings if using external images

## Future Enhancements

Consider adding:
- Blog section for articles
- Project portfolio with live demos
- Contact form with backend
- Dark mode toggle
- Multi-language support
- Resume download button (PDF generation)
- GitHub repository showcase
- Testimonials section
- Speaking engagements or conferences

## License

This portfolio template is free to use and modify for personal use.

## Support

For questions or issues, feel free to reach out:
- Email: poojajadhav550777@gmail.com
- LinkedIn: https://www.linkedin.com/in/pooja550777
- GitHub: https://github.com/Jadhavpooja550777

---

**Last Updated:** November 2025
**Version:** 1.0
