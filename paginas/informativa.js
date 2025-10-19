function Informativa() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const infoHTML = `
    <section class="c-informativa-ygo">
        <h1 class="titulo-ygo">Picsum Photo Explorer</h1>
        <p class="subtitulo-ygo">Tu herramienta visual para explorar, guardar y aprender sobre imágenes libres de uso.</p>
        
        <div class="info-seccion">
            <h2>Acerca de la Aplicación</h2>
            <p>Esta aplicación web fue diseñada como proyecto educativo para integrar la API pública de Lorem Picsum y aplicar conceptos fundamentales de desarrollo Frontend (HTML, CSS y JavaScript Vanilla).</p>
        </div>
        
        <div class="info-seccion">
            <h2>Características Principales</h2>
            <ul>
                <li><strong>Inicio (Home):</strong> Explora cientos de fotos, filtra por autor y usa el buscador.</li>
                <li><strong>Favoritos:</strong> Guarda y gestiona tus imágenes preferidas.</li>
                <li><strong>Mi Colección:</strong> Simula la obtención aleatoria de fotos y construye tu galería personal.</li>
                <li><strong>Detalle de Foto:</strong> Visualiza la imagen en alta resolución, autor, tamaño y más.</li>
            </ul>
        </div>
        
        <div class="info-seccion">
            <h2>Tecnología Utilizada</h2>
            <ul>
                <li><strong>HTML5:</strong> Estructura semántica de las vistas.</li>
                <li><strong>CSS3:</strong> Estilizado moderno y modular.</li>
                <li><strong>JavaScript (ES6+):</strong> Lógica de navegación, manipulación del DOM, gestión de datos (localStorage) y consumo de API.</li>
                <li><strong>API:</strong> <a href="https://picsum.photos/" target="_blank">Lorem Picsum API</a>.</li>
            </ul>
        </div>
        
        <footer class="info-footer">
            <p>&copy; ${new Date().getFullYear()} Proyecto de Demostración. Imágenes provistas por Lorem Picsum.</p>
        </footer>
    </section>
    `;

    root.innerHTML = infoHTML;
}
