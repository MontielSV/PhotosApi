var misIDsObtenidos = JSON.parse(localStorage.getItem("misIDsPicsum")) || [];
let totalFotos = 0;

function Aleatorios() {
    if (!fotos || fotos.length === 0) {
        alert("Error: Las fotos no han sido cargadas. Vuelve al Home.");
        return;
    }

    document.getElementById("nuevos").innerHTML = "";
    let fotosAleatoriasHTML = "";
    const numFotosAObtener = 4;

    for (let i = 0; i < numFotosAObtener; i++) {
        let indiceAleatorio = Math.floor(Math.random() * fotos.length);
        const foto = fotos[indiceAleatorio];
        const idFoto = foto.id;
        const autor = foto.author;
        const imagenUrl = foto.download_url;

        fotosAleatoriasHTML += `
            <div class="c-lista-card c-un_aleatorio" onclick="Detalle('${idFoto}')">
                <p>#${idFoto}</p>
                <img src="${imagenUrl}" alt="${autor}" width="60" height="90">
                <p>${autor}</p>
            </div>`;

        misIDsObtenidos = JSON.parse(localStorage.getItem("misIDsPicsum")) || [];
        const yaExiste = misIDsObtenidos.includes(idFoto);

        if (!yaExiste) {
            misIDsObtenidos.push(idFoto);
            localStorage.setItem("misIDsPicsum", JSON.stringify(misIDsObtenidos));

            const contenedorCuadro = document.getElementById(`c-un-cuadro-${idFoto}`);
            if (contenedorCuadro) {
                contenedorCuadro.innerHTML = `
                <div onclick="Detalle('${idFoto}')">
                    <img src="${imagenUrl}" width="auto" height="45" loading="lazy" alt="${autor}">
                    <p>${autor}</p>
                </div>`;
                contenedorCuadro.classList.add("c-mios-card");
            }
        }
    }

    document.getElementById("nuevos").innerHTML += fotosAleatoriasHTML;
    document.getElementById("contador").innerHTML = `${misIDsObtenidos.length} / ${totalFotos}`;
}

function Coleccion() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    if (!fotos || fotos.length === 0) {
        root.innerHTML = "<p>Cargando datos. Vuelve al Home e intenta de nuevo.</p>";
        return;
    }

    totalFotos = fotos.length;
    misIDsObtenidos = JSON.parse(localStorage.getItem("misIDsPicsum")) || [];

    const contador = document.createElement("p");
    contador.textContent = `${misIDsObtenidos.length} / ${totalFotos}`;
    contador.id = "contador";

    const boton = document.createElement("button");
    boton.textContent = "Obtener 4 Fotos Aleatorias";
    boton.addEventListener("click", Aleatorios);

    const capturaAleatorea = document.createElement("section");
    capturaAleatorea.classList.add("c-lista-nuevas");
    capturaAleatorea.id = "nuevos";

    const seccionColeccion = document.createElement("section");
    seccionColeccion.classList.add("c-lista-album");

    let cuadrosColeccion = "";

    for (let i = 0; i < totalFotos; i++) {
        const foto = fotos[i];
        const idFoto = foto.id;
        const autor = foto.author;
        const imagenUrl = foto.download_url;

        if (misIDsObtenidos.includes(idFoto)) {
            cuadrosColeccion += `
            <div class="c-un-cuadro c-mios-card" id="c-un-cuadro-${idFoto}" onclick="Detalle('${idFoto}')">
                <img src="${imagenUrl}" width="auto" height="45" loading="lazy" alt="${autor}">
                <p>${autor}</p>
            </div>`;
        } else {
            cuadrosColeccion += `
            <div class="c-un-cuadro" id="c-un-cuadro-${idFoto}">
                <p>#${idFoto}</p>
            </div>`;
        }
    }

    seccionColeccion.innerHTML = cuadrosColeccion;

    root.appendChild(contador);
    root.appendChild(boton);
    root.appendChild(capturaAleatorea);
    root.appendChild(seccionColeccion);
}
