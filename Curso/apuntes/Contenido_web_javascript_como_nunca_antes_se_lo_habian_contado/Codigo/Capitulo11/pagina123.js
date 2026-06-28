window.addEventListener("load", function () {
    const enlace1 = document.getElementById("enlace1");
    const enlace2 = document.getElementById("enlace2");
    const enlace3 = document.getElementById("enlace3");

    const back = document.getElementById("back");
    const forward = document.getElementById("forward");

    const path = location.pathname;
    const estilo = "3px solid blue";
    if(path.includes("pagina1")) enlace1.style.borderBottom = estilo;
    else if(path.includes("pagina2")) enlace2.style.borderBottom = estilo;
    else if(path.includes("pagina3")) enlace3.style.borderBottom = estilo;

    enlace1.addEventListener("click", function () {
        window.location.assign("pagina1.html");
    });
    enlace2.addEventListener("click", function () {
        window.location.assign("pagina2.html");
    });
    enlace3.addEventListener("click", function () {
        window.location.assign("pagina3.html");
    });

    back.addEventListener("click", function () {
        window.history.back();
    });
    forward.addEventListener("click", function () {
        window.history.forward();
    });
});

