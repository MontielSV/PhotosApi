function PaginaOriginal() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const originalHTML = `
    <section class="c-original-ygo">
        <h1 class="titulo-original">¿Qué hace que una foto sea impactante?</h1>
        <p class="subtitulo-original">Explora los elementos clave que hacen que una imagen destaque visualmente.</p>
        
        <div class="info-ilustrada">
            <div class="ilustracion-container">
                <img src="https://picsum.photos/id/1025/300/200" alt="Ejemplo de foto" class="carta-ejemplo">
            </div>

            <div class="puntos-clave-container">
                <h2>Elementos Visuales Clave</h2>
                <div class="punto-clave">
                    <h3>1. Composición</h3>
                    <p>La forma en que los elementos están organizados en la imagen. Regla de tercios, simetría, diagonales.</p>
                </div>
                <div class="punto-clave">
                    <h3>2. Iluminación</h3>
                    <p>La luz define el tono, el contraste y la atmósfera. Puede ser natural, artificial o dramática.</p>
                </div>
                <div class="punto-clave">
                    <h3>3. Color y Contraste</h3>
                    <p>Los colores pueden transmitir emociones. El contraste ayuda a destacar el sujeto principal.</p>
                </div>
                <div class="punto-clave">
                    <h3>4. Enfoque y Profundidad</h3>
                    <p>El enfoque dirige la atención. La profundidad crea dimensión y realismo.</p>
                </div>
            </div>
        </div>
        
        <div class="info-seccion-tipo">
            <h2>Tipos de Composición Fotográfica</h2>
            <ul class="lista-atributos">
                <li style="border-left-color: gold;">Regla de Tercios</li>
                <li style="border-left-color: darkred;">Simetría</li>
                <li style="border-left-color: blue;">Perspectiva</li>
                <li style="border-left-color: green;">Minimalismo</li>
                <li style="border-left-color: orange;">Movimiento</li>
                <li style="border-left-color: purple;">Retrato</li>
            </ul>
        </div>
    </section>
    `;

    root.innerHTML = originalHTML;
}
