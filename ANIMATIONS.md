# Animaciones de Conteo - Legal Unity

## 🎬 Animación de Estadísticas

He implementado una animación profesional de conteo para los números en la sección de estadísticas.

### Características

#### 1. **Conteo Animado (0 → Valor Final)**
- Los números crecen desde 0 hasta su valor final
- Duración: 2 segundos
- Función de easing: `easeOutQuart` (comienza rápido, termina suave)

#### 2. **Detección de Visibilidad**
- Usa `IntersectionObserver` API
- Se activa cuando el 50% de la sección es visible
- Se ejecuta solo una vez por sesión

#### 3. **Delay Escalonado**
- Cada contador inicia con 150ms de retraso respecto al anterior
- Los stat-items aparecen con fade-in escalonado (100ms cada uno)
- Crea un efecto cascada visual

#### 4. **Efectos Visuales**
```css
- Fade in: Opacidad 0 → 1
- Slide up: translateY(20px) → 0
- Pulse: Escala 1 → 1.05 → 1 durante el conteo
```

### Código Clave

#### JavaScript - Función de Conteo
```javascript
function animateCounter(element, target, duration = 2000) {
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
    
    const animate = () => {
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(easedProgress * target);
        element.textContent = current + suffix;
        
        requestAnimationFrame(animate);
    };
}
```

#### CSS - Animaciones
```css
.stat-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.stat-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.stat-number.counting {
    animation: pulse 0.5s ease-in-out;
}
```

### Números Animados

| Número | Valor | Descripción |
|--------|-------|-------------|
| 500+ | 500 | Residencias Aprobadas |
| 15+ | 15 | Años de Experiencia |
| 98% | 98 | Tasa de Éxito |
| 45+ | 45 | Países Representados |

### Rendimiento

- Usa `requestAnimationFrame` para sincronización con el refresh rate del navegador (60 FPS)
- No causa reflow innecesario
- Optimizado para móviles
- Sin dependencias externas

### Trigger

La animación se activa cuando:
1. El usuario hace scroll hasta la sección de estadísticas
2. El 50% de la sección es visible en viewport
3. No se ha ejecutado previamente

### Personalización

Para modificar la animación:

**Duración:**
```javascript
animateCounter(stat, targetNumber, 3000); // 3 segundos
```

**Delay entre contadores:**
```javascript
setTimeout(() => {
    animateCounter(stat, targetNumber, 2000);
}, index * 200); // 200ms entre cada uno
```

**Threshold de visibilidad:**
```javascript
observer = new IntersectionObserver(callback, {
    threshold: 0.3 // Se activa al 30% visible
});
```

**Función de easing:**
```javascript
// Linear
const easing = (t) => t;

// Ease-in-out
const easing = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// Elastic
const easing = (t) => Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
```

## 🎯 Cómo Funciona

1. **Carga de página** → Los números muestran su valor final estático
2. **Usuario hace scroll** → Sección entra en viewport
3. **50% visible** → IntersectionObserver detecta
4. **Fade-in items** → Los stat-items aparecen con fade (0.6s)
5. **Conteo inicia** → Números cuentan de 0 al valor final (2s)
6. **Efecto pulse** → Números pulsan durante el conteo
7. **Finalización** → Números quedan en su valor final

## 🔧 Archivos Modificados

- `script.js` - Funciones `animateCounter()` e `initStatsAnimation()`
- `styles-modern.css` - Estilos `.stat-item`, `.stat-number.counting`, `@keyframes pulse`

## 🌐 Compatibilidad

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 79+
- ✅ Todos los navegadores modernos

## 📱 Responsive

La animación funciona perfectamente en:
- Desktop
- Tablet
- Mobile
- Todos los tamaños de pantalla

---

**Resultado:** Una experiencia visual profesional y atractiva que captura la atención del usuario y hace los números más memorables.
