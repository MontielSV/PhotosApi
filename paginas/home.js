function buscadorfuncion(textoBusqueda) {
    if (textoBusqueda.length >= 3) {
        const busquedaMinusculas = textoBusqueda.toLowerCase();
        const filtrados = fotos.filter(foto =>
            foto.author.toLowerCase().includes(busquedaMinusculas)
        );

        let listaHTML = generarLista(filtrados);
        document.getElementById("la-lista").innerHTML = listaHTML;
    } else {
        let listaHTML = generarLista(fotos);
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
}

function generarLista(arrayFotos) {
    let listaHTML = "";
    for (let i = 0; i < arrayFotos.length; i++) {
        const foto = arrayFotos[i];
        const id = foto.id;
        const imagenUrl = foto.download_url;
        const autor = foto.author;

        listaHTML += `
        <div class="c-lista-card picsum-${id}" onclick="Detalle('${id}')">
            <p>#${id}</p>
            <img src="${imagenUrl}" width="auto" height="100" loading="lazy" alt="${autor}">
            <p class="card-name">${autor}</p>
            <p class="card-type">Foto</p>
        </div>`;
    }

    return listaHTML;
}

function Home() {
    var root = document.getElementById("root");
    root.innerHTML = "";

    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar fotos por autor...";
    buscador.addEventListener("input", () => {
        buscadorfuncion(buscador.value);
    });
    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("tipos-container");

    const listaHTML = generarLista(fotos);
    var contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-contenedor-lista");
    contenedorLista.id = "la-lista";
    contenedorLista.innerHTML = listaHTML;

    root.appendChild(buscador);
    root.appendChild(contenedorFiltro);
    root.appendChild(contenedorLista);
}
