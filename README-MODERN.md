# Legal Unity - Modern Design ✨

Landing page profesional para servicios de residencia en Costa Rica con diseño moderno inspirado en sitios inmobiliarios de alta gama.

## 🎨 Nuevo Diseño

### Características del Layout Moderno

- **Hero Section** - Imagen de fondo a pantalla completa con overlay rojo y CTA prominente
- **Cards de Residencia** - Diseño tipo tarjetas con badges de color y destacados
- **Sección About** - Layout de dos columnas con imagen collage y estadística destacada
- **Estadísticas** - Sección oscura con números grandes y overlay
- **Servicios** - Grid de cards con iconos y hover effects
- **Información** - Cards limpias con iconos circulares
- **Contacto** - Formulario moderno con detalles de contacto al lado
- **Footer** - Oscuro con 4 columnas y links sociales

### Paleta de Colores

```css
Primario: #e63946 (Rojo coral)
Primario Oscuro: #d62828
Secundario: #1d3557 (Azul marino)
Secundario Claro: #457b9d
Acento: #f77f00 (Naranja)
Texto: #333333
Fondo: #ffffff
```

## 🚀 Estructura de Archivos

```
residencia-costa-rica/
├── index.html              # HTML principal (nuevo diseño)
├── styles-modern.css       # CSS moderno completo
├── script.js              # JavaScript principal
├── translations.js        # Sistema i18n (ES/EN)
├── i18n-content.js        # Contenido dinámico traducido
├── modals.js              # Sistema de modales para requisitos
├── index-old.html         # Backup del diseño anterior
└── styles-old.css         # Backup del CSS anterior
```

## 📱 Responsive Design

- **Desktop**: Layout completo con grids de 2-4 columnas
- **Tablet**: Adaptación a 2 columnas y espaciado reducido
- **Mobile**: Single column, menú hamburguesa, formularios apilados

## 🌐 Sistema de Idiomas

- **Español** 🇪🇸 (Predeterminado)
- **Inglés** 🇺🇸
- Cambio instantáneo con banderas en el navbar
- Persistencia en localStorage

## 🎯 Secciones Principales

### 1. Hero
- Fondo con imagen/gradiente
- Overlay rojo coral (#e63946)
- Título grande con highlight
- Dos botones CTA
- Indicador de scroll animado

### 2. Tipos de Residencia
- 3 cards en grid
- Card central "featured" con borde destacado
- Badges de color por tipo (azul, verde, naranja)
- Highlight box con monto/requisito principal
- Botón para abrir modal de requisitos

### 3. Sobre Nosotros
- Layout 50/50
- Collage de imágenes con estadística flotante
- Lista de features con checks
- CTA principal

### 4. Estadísticas
- Fondo azul oscuro con overlay
- 4 métricas en grid
- Números grandes y labels descriptivos

### 5. Servicios
- Grid de 6 servicios
- Icons circulares con fondo de color
- Hover effect con elevación
- Centrado y espacioso

### 6. Información Importante
- 3 cards con iconos
- Listas con checkmarks
- Textos destacados

### 7. Contacto
- Grid 40/60
- Detalles de contacto a la izquierda
- Formulario moderno a la derecha
- Inputs con focus states

### 8. Footer
- Fondo azul oscuro (#1d3557)
- 4 columnas: Brand, Residencias, Enlaces, Contacto
- Links sociales
- Copyright centrado

## ⚡ Características Técnicas

### Animaciones
- Fade in en scroll
- Hover effects en cards
- Bounce animation en scroll indicator
- Smooth transitions en todo

### Modales
- Sistema de modales para requisitos detallados
- Cierre con X, ESC o click fuera
- Contenido traducido según idioma activo
- Animaciones suaves de entrada/salida

### Formulario
- Validación HTML5
- Grid responsive (2 cols → 1 col mobile)
- Focus states con borde de color
- Submit con icono y texto

## 🔧 Cómo Usar

### Iniciar Servidor Local
```bash
cd /Users/manu/CascadeProjects/residencia-costa-rica
python3 -m http.server 8080
```

### Abrir en Navegador
```
http://localhost:8080
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables en `styles-modern.css`:
```css
:root {
    --primary: #e63946;
    --secondary: #1d3557;
    /* ... otros colores */
}
```

### Agregar Imágenes
Reemplaza los gradientes en:
- `.hero-image` - Hero background
- `.collage-main` - About section image
- `.stats-section` - Statistics background

### Modificar Contenido
Edita `translations.js` para cambiar textos en ambos idiomas.

## 📊 Comparación con Diseño Anterior

| Aspecto | Anterior | Nuevo |
|---------|----------|-------|
| Tema | Oscuro | Claro |
| Hero | Simple | Full-screen con overlay |
| Residencias | Acordeones | Cards modernas |
| Colores | Vino/Negro | Rojo coral/Azul |
| Layout | Lista vertical | Grids espaciosos |
| Tipografía | Segoe UI | Inter |
| Botones | Rectangulares | Pills (redondeados) |
| Sombras | Fuertes | Sutiles y suaves |

## 🌟 Mejoras UX/UI

1. **Visual Hierarchy** - Clara jerarquía con badges, títulos y descripciones
2. **Whitespace** - Uso generoso de espacios en blanco
3. **Color Psychology** - Rojo para CTA, azul para confianza
4. **Micro-interactions** - Hover effects en todos los elementos interactivos
5. **Progressive Disclosure** - Modales para información detallada
6. **Accessibility** - Alto contraste, focus states visibles
7. **Mobile-First** - Diseñado primero para móvil
8. **Loading Performance** - CSS optimizado, iconos SVG

## 📝 Notas de Desarrollo

- Diseño inspirado en sites inmobiliarios premium
- Sistema de diseño consistente con variables CSS
- Componentes reutilizables
- Código limpio y comentado
- Sin dependencias de frameworks pesados
- Lucide icons para SVG ligeros

## 🚀 Próximas Mejoras Sugeridas

- [ ] Agregar imágenes reales de Costa Rica
- [ ] Implementar lazy loading de imágenes
- [ ] Agregar testimonios de clientes
- [ ] Integrar formulario con backend
- [ ] Agregar chat en vivo
- [ ] Implementar animaciones AOS (Animate On Scroll)
- [ ] Agregar mapa interactivo de ubicación
- [ ] Blog/noticias section

## 📞 Soporte

Para modificaciones o consultas sobre el diseño, contacta al equipo de desarrollo.

---

**© 2024 Legal Unity** - Todos los derechos reservados
