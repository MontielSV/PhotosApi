let fotos = [];

const PICSUM_API_URL = "https://picsum.photos/v2/list";

/**
 * Conexión para obtener la lista de fotos.
 * @param {number} cantidad - Número de fotos a obtener.
 * @returns {Promise<Array<Object>>}
 */
async function conexionLista(cantidad = 100) {
    const url = `${PICSUM_API_URL}?page=1&limit=${cantidad}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data || [];
    } catch (error) {
        console.error("Error al conectar con la API de Picsum:", error);
        return [];
    }
}

/**
 * Cargar todas las fotos al iniciar.
 */
async function General() {
    if (fotos.length === 0) {
        fotos = await conexionLista(100);
    }
    Home();
}

/**
 * Filtra las fotos por autor.
 * @param {string} autorFiltro
 */
async function FiltroConexion(autorFiltro) {
    const listaContainer = document.getElementById("la-lista");
    listaContainer.innerHTML = "Cargando fotos...";

    const todasLasFotos = await conexionLista(100);
    const fotosFiltradas = todasLasFotos.filter(foto =>
        foto.author.toLowerCase().includes(autorFiltro.toLowerCase())
    );

    fotos = fotosFiltradas;
    const listaHTML = generarLista(fotos);

    listaContainer.innerHTML = listaHTML || `No se encontraron fotos para: ${autorFiltro}`;
}

General();
