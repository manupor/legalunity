# Animaciones Parallax y Microanimaciones - Legal Unity

## 🎬 Sistema de Animaciones Implementado

He agregado un completo sistema de animaciones parallax y microanimaciones que se activan durante el scroll, creando una experiencia visual fluida y profesional.

## 🎯 Tipos de Animaciones

### 1. **Fade In Up**
Elementos aparecen desde abajo con desvanecimiento.

**Uso:**
```html
<div class="fade-in-up">Contenido</div>
```

**Aplicado en:**
- Headers de secciones
- Títulos principales

### 2. **Fade In Left/Right**
Elementos entran desde los lados.

**Aplicado en:**
- About section (imagen desde izquierda)
- About section (contenido desde derecha)

### 3. **Scale In**
Elementos hacen zoom desde pequeño a tamaño normal.

**Aplicado en:**
- Cards especiales
- Elementos destacados

### 4. **Stagger Animation**
Elementos hijos aparecen secuencialmente con delay.

**Aplicado en:**
- Grid de residencias (3 cards)
- Grid de servicios (6 cards)
- Grid de información (3 cards)

**Delays:** 0.1s, 0.2s, 0.3s, 0.4s, 0.5s, 0.6s

## 🌊 Efectos Parallax

### 1. **Hero Parallax**
```javascript
// Hero se mueve más lento que el scroll (50% velocidad)
translateY = scrolled * 0.5
```

**Efecto:** Profundidad visual en el hero section

### 2. **Image Collage Parallax**
```javascript
// Imagen se mueve basado en posición del viewport
translateY = (scrollPercent - 0.5) * 30
```

**Efecto:** Imagen de About se mueve suavemente

### 3. **Stats Scale Effect**
```javascript
// Items cerca del centro se ven más grandes
scale = 1 - (distance / maxDistance) * 0.05
```

**Efecto:** Estadísticas tienen escala dinámica según posición

### 4. **Section Background Parallax**
```javascript
// Fondo se mueve sutilmente
backgroundPosition = `center ${translateY}px`
```

**Efecto:** Profundidad en secciones About y Stats

## 💫 Microanimaciones

### 1. **Float Animation** (Iconos de Servicios)
```css
@keyframes float {
    0%, 100% { translateY(0) }
    50% { translateY(-10px) }
}
```

**Características:**
- Duración: 3 segundos
- Delays escalonados: 0s, 0.3s, 0.6s, 0.9s, 1.2s, 1.5s
- Se pausa al hover

**Efecto:** Iconos flotan suavemente dando vida a la sección

### 2. **Pulse** (Números de estadísticas)
Se activa durante el conteo de 0 a valor final.

### 3. **Hover Effects**
- Cards se elevan al hover
- Iconos cambian de color
- Sombras aumentan
- Escala sutil en elementos

## ⚙️ Configuración Técnica

### Intersection Observer
```javascript
const observerOptions = {
    threshold: 0.15,        // Se activa al 15% visible
    rootMargin: '0px 0px -100px 0px'  // Margen inferior
};
```

**Por qué:**
- `threshold: 0.15` → Animaciones comienzan temprano
- `rootMargin` → Previene activación tardía

### RequestAnimationFrame
```javascript
window.requestAnimationFrame(() => {
    // Animaciones parallax
});
```

**Beneficios:**
- Sincronizado con refresh rate (60 FPS)
- Mejor rendimiento
- Suavidad garantizada

## 📊 Rendimiento

### Optimizaciones Implementadas

1. **Throttling con `ticking` flag**
```javascript
if (!ticking) {
    requestAnimationFrame(() => { ... });
    ticking = true;
}
```

2. **Solo anima elementos visibles**
```javascript
if (rect.top < windowHeight && rect.bottom > 0) {
    // Aplica animación
}
```

3. **Transiciones CSS en lugar de JS**
```css
transition: opacity 0.8s ease, transform 0.8s ease;
```

## 🎨 Efectos por Sección

### Hero Section
- ✅ Slider parallax (50% velocidad)
- ✅ Overlay estático
- ✅ Contenido estático (legibilidad)

### Residence Types
- ✅ Header fade-in-up
- ✅ Cards stagger (3 items)
- ✅ Hover elevation

### About Us
- ✅ Imagen fade-in-left
- ✅ Contenido fade-in-right
- ✅ Collage parallax
- ✅ Features individuales

### Statistics
- ✅ Items fade-in y scale
- ✅ Conteo animado (0 → valor)
- ✅ Scale dinámico basado en posición
- ✅ Background parallax

### Services
- ✅ Header fade-in-up
- ✅ Grid stagger (6 items)
- ✅ Iconos flotantes con delays
- ✅ Hover pause en float

### Information
- ✅ Header fade-in-up
- ✅ Cards stagger (3 items)
- ✅ Hover elevation

### Contact
- ✅ Form fade-in
- ✅ Info side animation

## 🔧 Personalización

### Cambiar Velocidad de Parallax
```javascript
// En initParallaxEffect()
const heroOffset = scrolled * 0.3; // Más lento
const heroOffset = scrolled * 0.7; // Más rápido
```

### Cambiar Threshold de Activación
```javascript
threshold: 0.3  // Activa al 30% visible
threshold: 0.1  // Activa al 10% visible
```

### Cambiar Duración de Animaciones
```css
.fade-in-up {
    transition: opacity 1.2s ease; /* Más lento */
}
```

### Agregar/Quitar Elementos Animados
```html
<!-- Solo agregar la clase correspondiente -->
<div class="fade-in-up">Nuevo elemento</div>
```

## 🎯 Buenas Prácticas Implementadas

1. ✅ **Progressive Enhancement** - Funciona sin JS
2. ✅ **Performance First** - RequestAnimationFrame
3. ✅ **Smooth 60 FPS** - Optimizado para fluidez
4. ✅ **No Layout Thrashing** - Minimiza reflows
5. ✅ **Throttling** - Previene sobrecarga
6. ✅ **Observer Pattern** - Eficiente detección
7. ✅ **CSS Transitions** - Hardware accelerated
8. ✅ **Semantic Classes** - Fácil mantenimiento

## 📱 Responsive

Todas las animaciones funcionan perfectamente en:
- ✅ Desktop
- ✅ Tablet  
- ✅ Mobile
- ✅ Touch devices

## 🌐 Compatibilidad

- ✅ Chrome 51+ (IntersectionObserver)
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 79+

## 🎬 Demo de Efectos

**Al hacer scroll:**
1. Hero se mueve lentamente creando profundidad
2. Headers aparecen fade-in-up
3. Cards entran con stagger effect (cascada)
4. Iconos flotan sutilmente
5. Estadísticas escalan según posición
6. Images tienen parallax independiente
7. Hover effects responden instantáneamente

**Resultado:** Una experiencia fluida, moderna y profesional que mantiene al usuario enganchado.

---

**Tip:** Abre las DevTools → Performance para ver que las animaciones corren a 60 FPS constantes.
