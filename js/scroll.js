const sr = ScrollReveal()
ScrollReveal({ reset: false });

const DISTANCE = "400px"


sr.reveal('.textoArticulo', {
    origin:"left",
    distance: DISTANCE,
    duration: 700,
})

sr.reveal(".izqierda", {
    origin:"left",
    distance: DISTANCE,
    duration: 700
})

sr.reveal(".derecha", {
    origin:"left",
    distance: DISTANCE,
    duration: 700
})

