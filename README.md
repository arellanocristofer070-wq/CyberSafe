# CyberSafe — sitio web educativo

Implementación HTML5, CSS3 y JavaScript basada en las 38 capturas del diseño Figma proporcionadas.

## Abrir el proyecto

1. Extrae `CyberSafe-web.zip`.
2. Abre la carpeta `CyberSafe-web` en Visual Studio Code.
3. Abre `index.html` en un navegador, o utiliza la extensión **Live Server**.
4. Navega usando los enlaces del menú o las tarjetas de amenazas.

No se requiere instalar paquetes, Node.js, frameworks, servidor ni conexión a internet para navegar y contestar el cuestionario. Los enlaces de CISA/NIST sí apuntan a sitios oficiales externos.

## Archivos

- `index.html`: página inicial con introducción, conceptos, amenazas, protección, recursos, preguntas frecuentes y acceso al cuestionario.
- `amenaza.html`: página de detalle. Cambia según el parámetro `?tipo=phishing`, `malware`, `ransomware`, `identidad` o `ingenieria`.
- `cuestionario.html`: actividad de 5 preguntas y pantalla de resultados.
- `styles.css`: aspecto visual y adaptación móvil, tableta y escritorio.
- `script.js`: iconos SVG, navegación móvil, datos de amenazas y lógica del cuestionario.
- `assets/favicon.svg`: icono original del proyecto recreado con vectores.

## Notas

- El cuestionario ofrece retroalimentación al instante y suma puntos según las respuestas seleccionadas. Se reinicia al recargar; no almacena datos personales ni registra respuestas.
- El panel «Registrarse / Iniciar sesión» que aparecía en la parte inferior de las capturas pertenece al visor de Figma y **no forma parte** del diseño de CyberSafe; por ese motivo no se reproduce.
- Las capturas eran imágenes de referencia; los componentes de la web están implementados como HTML/CSS, no como imágenes planas.
- No se incluyen credenciales, base de datos ni backend, porque el diseño proporcionado es informativo.
