# Tp2_Prog.-y-Servicios-Web

## Video explicando funciones implementadas
https://drive.google.com/file/d/1X41Je15r3AYdxVafAxxsupVLyNX7Ttbs/view?usp=sharing

## Documentacion tecnica

### 1. Descripcion general
Este proyecto es un sitio web estatico de turismo construido con HTML, CSS y una unica pieza pequena de JavaScript. La solucion prioriza interacciones visuales resueltas con CSS puro, una estructura semantica simple y un nivel bajo de dependencias: no usa frameworks, no requiere build, no consume librerias externas y puede ejecutarse abriendo las vistas HTML directamente.

La aplicacion se organiza en seis pantallas:
- `Principal.html`: landing page con hero en video, destacados, contadores y testimonios.
- `Destinos.html`: catalogo filtrable por categoria, galeria visual y tabla comparativa.
- `Agencias.html`: listado de agencias con tarjetas flip y modal de valoracion.
- `Precios.html`: comparador de paquetes con tooltips informativos.
- `Blog.html`: layout editorial con filtros por categoria y comentarios.
- `Contacto.html`: formulario con validacion HTML5 y modal de confirmacion.

### 2. Objetivo tecnico del proyecto
La implementacion busca demostrar:
- Maquetado responsivo sin frameworks CSS.
- Reutilizacion de componentes visuales entre paginas.
- Navegacion responsive con CSS puro.
- Interacciones declarativas usando `:checked`, `:target`, `hover` y media queries.
- Modo oscuro persistente con una capa minima de JavaScript.

### 3. Estructura del repositorio
```text
Tp2_Prog.-y-Servicios-Web/
|-- assets/
|   `-- img/
|       |-- logo.jpg
|       `-- agencias/
|           |-- andina-travel.svg
|           |-- horizonte-cultural.svg
|           |-- mar-abierto.svg
|           `-- sabores-rutas.svg
|-- css/
|   `-- style.css
|-- js/
|   `-- dark-mode.js
|-- view/
|   |-- Principal.html
|   |-- Destinos.html
|   |-- Agencias.html
|   |-- Precios.html
|   |-- Blog.html
|   `-- Contacto.html
`-- README.md
```

### 4. Arquitectura general
#### 4.1 Enfoque estructural
La arquitectura es deliberadamente simple:
- Cada pagina es un documento HTML independiente.
- Todas las vistas comparten una misma hoja de estilos global: `css/style.css`.
- El unico comportamiento JavaScript compartido esta en `js/dark-mode.js`.
- Los elementos de header y footer se replican entre vistas para mantener consistencia visual.

Esta decision reduce complejidad de despliegue y facilita la lectura del proyecto en contextos academicos, a costa de repetir markup comun entre archivos.

#### 4.2 Distribucion de responsabilidades
- HTML: estructura, contenido, estados declarativos y accesibilidad base.
- CSS: layout, responsive, interacciones visuales, componentes, filtros, modales y modo oscuro.
- JavaScript: solo persistencia y alternancia del tema, mas el estado visual del header en scroll.

### 5. Decisiones de diseño y su justificacion
#### 5.1 Sin dependencias externas
No se instalaron paquetes ni frameworks. Esto tiene varias ventajas:
- Reduce friccion para ejecutar el proyecto.
- Evita pipeline de compilacion.
- Hace mas visible el dominio de HTML, CSS y JS vanilla.
- Mantiene el sitio portable para correccion academica o despliegue simple.

#### 5.2 CSS unico y centralizado
Se eligio un `style.css` monolitico para concentrar todos los estilos y componentes. La ventaja es que todos los patrones visuales viven en un solo archivo; la desventaja es que el archivo ya es grande y mezcla estilos globales con estilos por pagina.

#### 5.3 Navegacion responsive con checkbox hack
El menu hamburguesa se resuelve con:
- un `input[type="checkbox"]` oculto,
- un `label` que actua como boton,
- y selectores CSS del tipo `.menu-toggle:checked ~ .nav-menu`.

La decision evita JavaScript para una interaccion comun y mantiene el comportamiento declarativo.

#### 5.4 Interactividad CSS-first
Muchos comportamientos se implementan con selectores de estado:
- filtros por categoria mediante radios y `:checked`,
- carrusel de testimonios con radios,
- modal de contacto usando `:target`,
- modales de agencias con checkbox,
- tooltips con hover/focus,
- enlaces activos del nav usando clases en `body` y selectores por `href`.

Esta estrategia demuestra manejo avanzado de CSS y reduce logica imperativa.

#### 5.5 Modo oscuro con minimo JavaScript
El tema oscuro se resuelve agregando o quitando `body.dark-mode`. El JavaScript solo se ocupa de:
- decidir el tema inicial,
- persistirlo en `localStorage`,
- alternarlo al hacer click,
- actualizar el icono del boton,
- y aplicar `color-scheme`.

Se eligio esta aproximacion porque el cambio de tema requiere estado persistente entre paginas, algo poco practico con CSS puro.

#### 5.6 Sistema visual consistente
El diseño usa una paleta centrada en:
- azul oscuro para navegacion y bloques fuertes,
- cian como color de acento,
- blancos y celestes suaves para fondos de superficie,
- cards con sombras y bordes redondeados.

Esto transmite una identidad ligada a turismo, confianza y claridad visual.

### 6. Analisis tecnico por archivo
#### 6.1 `view/Principal.html`
Responsabilidades principales:
- Hero con video de fondo y CTA principal.
- Grilla de destinos destacados.
- Seccion de metricas destacadas.
- Carrusel de testimonios resuelto con radio buttons.

Decisiones relevantes:
- El video aporta impacto visual inicial sin depender de sliders JS.
- Los testimonios usan una tecnica CSS-only con `input[type="radio"]`, track desplazable, flechas y dots.
- La pagina funciona como puerta de entrada y concentra los componentes mas representativos del sitio.

#### 6.2 `view/Destinos.html`
Responsabilidades principales:
- Filtros por categoria.
- Tarjetas con overlay informativo.
- Galeria tipo masonry.
- Tabla comparativa responsive.

Decisiones relevantes:
- El filtrado se basa en radios y clases de categoria (`categoria-cultural`, `categoria-naturaleza`, etc.).
- La tabla usa `data-label` para degradar mejor en mobile.
- El overlay de las cards agrega informacion secundaria sin sobrecargar el frente de la tarjeta.

#### 6.3 `view/Agencias.html`
Responsabilidades principales:
- Tarjetas flip con frente y dorso.
- Valoracion mediante modal por agencia.
- Sistema visual de estrellas.

Decisiones relevantes:
- El flip card permite separar resumen y detalle sin duplicar pantallas.
- El modal se abre con checkbox para no depender de JS.
- Los logos SVG propios de agencias reducen peso y mantienen coherencia grafica.

#### 6.4 `view/Precios.html`
Responsabilidades principales:
- Resumen destacado de paquete recomendado.
- Tabla comparativa de destinos.
- Tooltips contextuales sobre servicios incluidos.

Decisiones relevantes:
- La tabla conserva una lectura tabular clasica en desktop y se adapta en mobile.
- Los tooltips dan densidad informativa sin ensuciar permanentemente la interfaz.

#### 6.5 `view/Blog.html`
Responsabilidades principales:
- Encabezado editorial.
- Filtros por categorias.
- Layout de cards estilo revista.
- Seccion de comentarios.

Decisiones relevantes:
- El layout busca una lectura mas editorial que comercial.
- Las categorias vuelven a resolverse con radios para mantener consistencia tecnica con `Destinos.html`.
- Se usa `@supports (animation-timeline: view())` para animaciones progresivas en navegadores compatibles, degradando sin romper en los demas.

#### 6.6 `view/Contacto.html`
Responsabilidades principales:
- Formulario estructurado en grid.
- Validaciones HTML5 nativas.
- Indicadores visuales de error y contador de caracteres.
- Modal de confirmacion usando hash `#confirmacion`.

Decisiones relevantes:
- La validacion se apoya en atributos nativos como `required`, `pattern`, `minlength` y `maxlength`.
- El modal `:target` evita logica adicional.
- La interfaz del formulario prioriza legibilidad, foco visible y espaciado.

#### 6.7 `css/style.css`
Es el nucleo visual del proyecto. Contiene:
- reset basico,
- tipografia utilitaria,
- layout global,
- header y footer,
- menu responsive,
- componentes reutilizables,
- estilos especificos por pagina,
- media queries,
- variantes de modo oscuro.

Patrones destacados:
- uso intensivo de Flexbox y Grid,
- `position: sticky` para el header,
- media queries para `768px`, `576px` y algunos casos en `992px`,
- selectores de estado con `:checked`, `:target`, `hover` y `focus-visible`,
- soporte parcial a progressive enhancement con `@supports`.

#### 6.8 `js/dark-mode.js`
Contiene toda la logica JavaScript compartida del proyecto.

Responsabilidades:
- leer la preferencia guardada en `localStorage` (`theme-preference`),
- detectar preferencia del sistema con `matchMedia`,
- aplicar o quitar `dark-mode`,
- sincronizar `aria-pressed` y `aria-label` del boton,
- inyectar iconos SVG inline estilo Lucide sin instalar librerias,
- activar el estado `header-scrolled` durante el scroll.

Decision importante:
- en lugar de emojis o dependencias externas, el boton usa SVG inline embebidos. Esto da control visual y evita cargar paquetes.

### 7. Componentes y patrones implementados
#### 7.1 Header compartido
Incluye:
- logo,
- menu de navegacion,
- boton de dark mode,
- menu hamburguesa responsive,
- link activo por pagina usando clases `page-*` en `body`.

#### 7.2 Footer compartido
Incluye:
- newsletter,
- enlaces sociales,
- enlaces de politicas,
- mapa embebido con OpenStreetMap,
- bloque informativo institucional.

#### 7.3 Tarjetas
El proyecto reutiliza varias familias de cards:
- cards de destinos,
- cards de testimonios,
- cards flip de agencias,
- cards del blog,
- bloque destacado de precios.

Todas comparten decisiones de estilo similares: sombras suaves, bordes redondeados, jerarquia tipografica y feedback visual en hover.

#### 7.4 Tablas responsive
Las tablas en destinos y precios estan pensadas para:
- lectura estructurada en desktop,
- adaptacion a anchos menores,
- mantenimiento de contexto mediante `data-label`.

#### 7.5 Modales sin JavaScript
Hay dos estrategias distintas:
- `:target` para el formulario de contacto.
- checkbox y `label for` para agencias.

Esto muestra dos enfoques declarativos validos segun el contexto.

### 8. Responsive design
El sitio fue planteado mobile-aware, con adaptaciones visibles en:
- escala tipografica,
- reorganizacion de grids,
- conversion del nav a menu desplegable,
- apilado de cards y formularios,
- simplificacion de layouts complejos.

Breakpoints principales:
- `min-width: 769px`: desktop.
- `max-width: 768px`: tablet/mobile.
- `max-width: 576px`: pantallas pequenas.
- `max-width: 992px`: ajuste de algunos layouts intermedios, especialmente blog y agencias.

### 9. Accesibilidad y buenas practicas aplicadas
Se observan varias decisiones positivas:
- uso de etiquetas semanticas (`header`, `main`, `footer`, `section`, `article`, `figure`, `table`, `form`),
- `alt` en imagenes,
- `aria-label` en el boton de tema y en algunos controles,
- `focus-visible` en elementos interactivos,
- formularios con labels asociados,
- `loading="lazy"` en `iframe`,
- `rel="noopener noreferrer"` en enlaces externos.

### 10. Estado actual y observaciones del analisis
Durante la revision del codigo aparecieron varios puntos importantes que conviene dejar documentados:

#### 10.1 Fortalezas
- La app funciona con una arquitectura muy liviana.
- El uso de CSS para resolver interacciones esta bien explotado.
- Hay consistencia visual entre paginas.
- El dark mode esta desacoplado del resto y bien contenido.
- El nav activo ahora se resuelve sin JavaScript.

#### 10.2 Deuda tecnica detectada
- `style.css` es muy grande y mezcla estilos globales con modulos por pagina; a futuro convendria dividirlo por secciones o componentes.
- En varias vistas todavia quedaron bloques comentados de una implementacion vieja del dark mode. No rompen el comportamiento actual, pero agregan ruido y pueden confundir mantenimiento futuro.
- El proyecto presenta caracteres mal codificados en varios textos del HTML y comentarios CSS, por ejemplo acentos convertidos en secuencias extranas. Conviene normalizar los archivos a UTF-8.
- En `.contenedor-nav` hay una linea de `width` actualmente ausente, lo que hace que la estructura dependa solo del padding y margen; no rompe, pero deberia revisarse si se quiere recuperar el ancho maximo original del contenedor.
- El hero usa `min-height: calc(100vh - 80px)` mientras el nav actual trabaja con `min-height: 70px`; esa diferencia puede producir pequenas inconsistencias verticales.

#### 10.3 Riesgos funcionales acotados
- Al ser paginas HTML independientes, cualquier cambio en header o footer debe replicarse manualmente en todas las vistas.
- La mayor parte del contenido visual depende de imagenes remotas; si una URL externa falla, la interfaz pierde parte de su valor visual.
- Algunas mejoras de accesibilidad pueden profundizarse, por ejemplo estados activos mas explicitos con `aria-current="page"` en la navegacion.

### 11. Recomendaciones de evolucion
Si el proyecto sigue creciendo, las siguientes mejoras tendrian buen retorno tecnico:
1. Dividir `style.css` en archivos por modulo o por pagina.
2. Normalizar todos los archivos a UTF-8.
3. Limpiar codigo comentado heredado en las vistas.
4. Reutilizar header y footer mediante includes del servidor o un motor de templates si mas adelante se agrega backend.
5. Incorporar `aria-current="page"` al enlace activo del nav para reforzar accesibilidad.
6. Sustituir activos remotos criticos por versiones locales si se busca mayor robustez offline.
7. Revisar consistencia de medidas globales como alturas de header y contenedores maximos.

### 12. Conclusiones tecnicas
El proyecto resuelve una experiencia completa de sitio turistico con herramientas basicas del stack web. La principal decision de arquitectura fue privilegiar simplicidad operativa y dominio tecnico de HTML/CSS/JS vanilla por encima de abstracciones o tooling. Esa decision esta bien alineada con un trabajo practico: el sistema es facil de ejecutar, de inspeccionar y de explicar.

Desde el punto de vista de implementacion, lo mas valioso es el uso consistente de patrones declarativos de CSS para resolver interacciones reales. El proyecto no solo maqueta pantallas: demuestra filtros, modales, carruseles, tooltips, dark mode y responsive design con una cantidad minima de JavaScript.

## Como abrir el proyecto
1. Entrar a la carpeta `view`.
2. Abrir `Principal.html` en el navegador.
3. Navegar entre las paginas mediante el menu superior.

## Archivos clave para revisar
- `css/style.css`
- `js/dark-mode.js`
- `view/Principal.html`
- `view/Destinos.html`
- `view/Agencias.html`
- `view/Precios.html`
- `view/Blog.html`
- `view/Contacto.html`
