# Legal Unity - Costa Rica Residence Website

Professional landing page for immigration services in Costa Rica with bilingual support (English/Spanish).

## Features

- ✅ **Modern Dark Design** - Professional look with black, wine, and neutral colors
- ✅ **Parallax Effects** - Smooth scrolling animations between sections
- ✅ **Responsive Navigation** - Fixed navbar with dropdown menus
- ✅ **Bilingual Support** - English and Spanish with language switcher (🇺🇸 🇪🇸)
- ✅ **Three Residence Types**
  - Rentista
  - Pensioner (Pensionado)
  - Investor (Inversionista)
- ✅ **Lucide SVG Icons** - Minimal and professional icons
- ✅ **Interactive Accordions** - Expandable sections for requirements
- ✅ **Contact Form** - Fully functional form ready for backend integration
- ✅ **Mobile Responsive** - Optimized for all devices

## Structure

```
residencia-costa-rica/
├── index.html           # Main HTML structure
├── styles.css           # Complete styling with dark theme
├── script.js            # Main JavaScript functionality
├── translations.js      # Translation dictionary (EN/ES)
├── i18n-content.js      # Dynamic content translation handler
└── README.md           # This file
```

## How to Run

1. **Start Local Server:**
   ```bash
   cd /Users/manu/CascadeProjects/residencia-costa-rica
   python3 -m http.server 8080
   ```

2. **Open in Browser:**
   - Go to: http://localhost:8080

## Language System

The website supports **English** and **Spanish** with automatic language detection and persistence.

### Language Switcher
- Click the 🇺🇸 flag for English
- Click the 🇪🇸 flag for Spanish
- Selected language is saved in browser's localStorage

### How it Works
1. **translations.js** - Contains all text translations
2. **data-i18n attributes** - HTML elements marked for translation
3. **i18n-content.js** - Handles complex dynamic content
4. **localStorage** - Remembers user's language preference

### Default Language
- Spanish (ES) is the default language
- Automatically switches based on last selection

## Sections

1. **Hero** - Main landing with branding and call-to-action
2. **About Us** - Information about Legal Unity
3. **Residence Types** - Three detailed cards with requirements
4. **Services** - Six key services offered
5. **Important Information** - Apostille, renewal, and permanent residence
6. **Contact Form** - Inquiry submission
7. **Footer** - Quick links and contact information

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-wine: #722f37;
    --color-wine-light: #8b3d47;
    /* ... other colors */
}
```

### Adding New Translations
1. Add keys to `translations.js`:
   ```javascript
   en: {
       new_key: "English text"
   },
   es: {
       new_key: "Texto en español"
   }
   ```

2. Add `data-i18n` attribute to HTML:
   ```html
   <p data-i18n="new_key">Default text</p>
   ```

### Backend Integration
The contact form is ready for backend connection. Update the form submission handler in `script.js`:
```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your backend API call here
});
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- [Lucide Icons](https://lucide.dev/) - SVG icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Legal Unity - All rights reserved

## Contact

For modifications or questions about this website, contact the development team.
