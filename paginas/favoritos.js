function Favoritos() {
    let favoritosPicsum = JSON.parse(localStorage.getItem("favoritosPicsum")) || [];
    const root = document.getElementById("root");
    root.innerHTML = "";

    if (favoritosPicsum.length === 0) {
        root.innerHTML = "¡Aún no has agregado ninguna foto a tus favoritos!";
    } else {
        cargarYRenderizarFavoritos(favoritosPicsum, root);
    }
}

/**
 * Carga los detalles de cada foto favorita desde la API y los muestra.
 */
async function cargarYRenderizarFavoritos(listaSimpleFavoritos, contenedor) {
    contenedor.innerHTML = "Cargando detalles de tus fotos favoritas...";

    const promesasDetalle = listaSimpleFavoritos.map(foto =>
        fetch(`https://picsum.photos/id/${foto.id}/info`)
            .then(res => res.json())
            .catch(() => null)
    );

    const fotosCompletas = (await Promise.all(promesasDetalle)).filter(f => f !== null);

    if (fotosCompletas.length > 0) {
        contenedor.innerHTML = generarLista(fotosCompletas);
    } else {
        contenedor.innerHTML = "No se pudieron cargar los detalles de las fotos favoritas.";
    }
}
