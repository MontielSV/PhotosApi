let esFavorito = false;

function toggleFavorito(paramid, autor) {
    let favoritos = JSON.parse(localStorage.getItem("favoritosPicsum")) || [];
    let existe = favoritos.some(foto => foto.id.toString() === paramid.toString());

    if (existe) {
        favoritos = favoritos.filter(foto => foto.id.toString() !== paramid.toString());
        esFavorito = false;
    } else {
        favoritos.push({
            id: paramid,
            author: autor,
            url: `https://picsum.photos/id/${paramid}/info`
        });
        esFavorito = true;
    }

    localStorage.setItem("favoritosPicsum", JSON.stringify(favoritos));

    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "⭐" : "☆";
}

async function Detalle(parametro) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const res = await fetch(`https://picsum.photos/id/${parametro}/info`);
    const foto = await res.json();

    if (!foto || !foto.id) {
        root.innerHTML = `<p>Error: No se encontró la foto con ID ${parametro}.</p>`;
        return;
    }

    const autor = foto.author;
    const idFoto = foto.id;
    const imagenUrl = foto.download_url;

    const favoritos = JSON.parse(localStorage.getItem("favoritosPicsum")) || [];
    esFavorito = favoritos.some(f => f.id.toString() === idFoto.toString());

    const detalleHTML = `
    <section class="c-detalle-ygo">
      <h2>${autor} - #${idFoto}</h2>
      <img src="${imagenUrl}" alt="${autor}" height="200" width="auto">
      
      <div class="c-detalles-info">
        <p><strong>Autor:</strong> <span>${autor}</span></p>
        <p><strong>ID:</strong> <span>${idFoto}</span></p>
        <p><strong>Resolución:</strong> ${foto.width} x ${foto.height}</p>
        <p><strong>URL:</strong> <a href="${foto.url}" target="_blank">${foto.url}</a></p>
      </div>

      <button id="btn-favorito"> 
        <span id="corazon-${idFoto}">${esFavorito ? '⭐' : '☆'}</span> Agregar a Favoritos
      </button>
    </section>
  `;

    root.innerHTML = detalleHTML;

    const btnFavorito = document.getElementById("btn-favorito");
    if (btnFavorito) {
        btnFavorito.addEventListener('click', () => {
            toggleFavorito(idFoto, autor);
        });
    }
}
