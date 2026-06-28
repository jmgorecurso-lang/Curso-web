let bordoPresente = false;
function mettiTogliBordo(lingua) {
    let immagini = document.images;
    if (!bordoPresente) {
        document.getElementById('bordo').innerHTML = 'Togli';
        for (let i = 0; i < immagini.length; i++) {
            immagini[i].style.border = 'solid';
        }
        bordoPresente = true;
    }
    else {
        document.getElementById('bordo').innerHTML = 'Metti';
        for (let i = 0; i < immagini.length; i++) {
            immagini[i].style.border = 'none';
        }
        bordoPresente = false;
    }
}


