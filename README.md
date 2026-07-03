# Portafolio — John

Sitio estático (HTML/CSS/JS puro, sin frameworks) listo para GitHub Pages.

## Estructura

```
index.html    → estructura y contenido de las 5 secciones
style.css     → estilos (diseño tipo HUD/terminal)
script.js     → resalta el link de navegación activo al hacer scroll
assets/       → imágenes de proyectos (reemplaza los placeholders)
```

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub. Si quieres que quede en `tuusuario.github.io`
   (la URL más limpia), el repo debe llamarse exactamente así: `tuusuario.github.io`.
   Si prefieres otro nombre, funciona igual, solo que la URL será
   `tuusuario.github.io/nombre-del-repo`.

2. Sube estos archivos al repo (desde la carpeta del proyecto):
   ```
   git init
   git add .
   git commit -m "Primer commit del portafolio"
   git branch -M main
   git remote add origin https://github.com/tuusuario/tuusuario.github.io.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages**. En "Source" selecciona la rama `main`
   y la carpeta `/ (root)`. Guarda.

4. En un par de minutos el sitio queda publicado en
   `https://tuusuario.github.io`.

## Qué te falta personalizar

- [ ] Reemplazar las 3 imágenes en `assets/` por GIFs o capturas reales de gameplay
- [ ] Cambiar los textos de "Nombre del Endless Runner", "Nombre del Juego de Globos"
      por los nombres reales de tus proyectos
- [ ] Escribir la descripción de una línea de cada proyecto
- [ ] Poner los links reales de "Jugar en Itch.io" y "Ver código" (actualmente son `#`)
- [ ] Poner tu email real en el botón de contacto (`mailto:`)
- [ ] Poner tus links reales de LinkedIn y GitHub
- [ ] Subir tu CV en PDF a `assets/` y enlazarlo en el botón "Descargar CV"

## Notas de diseño

- Tipografía: JetBrains Mono (títulos/HUD) + Inter (texto de cuerpo)
- Paleta: fondo casi negro con acento cian (`#4DD9C0`) para estados activos
  y ámbar (`#E8A33D`) para highlights — inspirado en HUD de videojuego /
  editor de código, no en una plantilla genérica
- Las tarjetas de proyecto están pensadas como "item cards" de RPG: cada
  sistema que programaste aparece como un "stat"
- Totalmente responsive, con foco visible de teclado y `prefers-reduced-motion`
  respetado
