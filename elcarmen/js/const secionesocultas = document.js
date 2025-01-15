const secionesOcultas = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.
        isIntersecting);
});
},
{threshold: 0}
);

secionesOcultas.forEach((seccion)=>observer.observe(seccion));


