const contenedorContratos = document.querySelector(".contenedor-contratos");


const informacionContratos = [
    {
        "nombre": "Viernes de Dolores",
        "descripcion": " COFRADÍA DE JESÚS DE MEDINACELI, SANTO CRISTO DEL SOCORRO Y MARÍA SANTÍSIMA DE LA CANDELARIA.",
        "imagen": "img/cautivo-malaga.webp"
    },
    {
        "nombre": "Domingo de Ramos",
        "descripcion" : "ILUSTRE HERMANDAD DEL NIÑO JESÚS DEL REMEDIO Y COFRADÍA DE NUESTRO PADRE JESÚS DE LA VICTORIA EN SU ENTRADA TRIUNFAL EN JERUSALÉN Y NUESTRA SEÑORA DE LA PAZ.",
        "imagen" : "img/borriquita.webp"
    },
    {
        "nombre": "Miércoles Santo",
        "descripcion" : "REAL, ILUSTRE, CONCEPCIONISTA Y UNIVERSITARIA HERMANDAD DE NAZARENOS DE NTRO. PADRE JESÚS DE LA ORACIÓN EN EL HUERTO Y NTRA. SRA. DEL AMOR Y LA ESPERANZA.",
        "imagen" : "img/estudiantes.webp"
    },
    {
        "nombre": "Jueves Santo",
        "descripcion" : "ILUSTRE Y MUY ANTIGUA HERMANDAD Y COFRADÍA DE NAZARENOS DE NUESTRO PADRE JESÚS NAZARENO, MARÍA SANTÍSIMA DE LA AMARGURA Y SANTA MUJER VERÓNICA.",
        "imagen" : "img/encuentro.webp"
    },
    {
        "nombre": "Viernes Santo (Mañana)",
        "descripcion" : "REAL ARCHICOFRADÍA DE NUESTRO PADRE JESÚS NAZARENO.",
        "imagen" : "img/lavatorio.webp"
    },
    {
        "nombre": "Viernes Santo (Tarde)",
        "descripcion" : "COFRADÍA DE NUESTRA SEÑORA DE LAS ANGUSTIAS, SANTO CRISTO DE LA AGONÍA Y EL TRASLADO DE JESÚS.",
        "imagen" : "img/angustias.webp"
    },
    {
        "nombre": "Domingo de Resurreción",
        "descripcion" : "HERMANDAD DE JESUCRISTO RESUCITADO, SEÑOR DE LA VIDA Y MARÍA SANTÍSIMA DEL TRIUNFO.",
        "imagen" : "img/resucitado.webp"
    }
]


informacionContratos.forEach(contrato =>{
    const {nombre, descripcion, imagen} = contrato;

    crearContrato(nombre, descripcion, imagen)

}
)


function crearContrato(nombre, descripcion, imagen) {
    const componente = document.createElement("div");

    componente.classList.add("wrapper");

    componente.innerHTML = `
    <div class="card">
        <div class="card__image card__image">
            <img src="${imagen}">
        </div>
        <div class="card__name">${nombre}</div>
        <div class="card__description">
        ${descripcion}
        </div>
    </div>
    `;

    contenedorContratos.appendChild(componente);

}




