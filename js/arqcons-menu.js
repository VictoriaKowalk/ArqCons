(function () {
    "use strict";

    const menu = document.querySelector(".push-menu.hamburger-nav");
    if (!menu) return;

    const file = (window.location.pathname.split("/").pop() || "home.html").toLowerCase();
    const section = file.startsWith("proyecto-") ? "proyectos.html" : file.startsWith("emprendimiento-") ? "emprendimientos.html" : file;
    const navItems = [
        ["home.html", "Inicio"],
        ["about.html", "Nosotros"],
        ["servicios.html", "Servicios"],
        ["proyectos.html", "Residencias"],
        ["emprendimientos.html", "Emprendimientos"],
        ["contacto.html", "Contacto"]
    ].map(function (item) {
        const active = section === item[0] ? " active" : "";
        return `<li class="menu-item${active}"><a href="${item[0]}" class="nav-link">${item[1]}</a></li>`;
    }).join("");

    menu.outerHTML = `
        <div class="push-menu hamburger-nav hamburger-menu-simple header-dark bg-dark-gray background-position-center-top" style="background-image:url('images/vertical-line-bg-small.svg')">
            <span class="close-menu text-dark-gray text-dark-gray-hover bg-white"><i class="fa-solid fa-xmark"></i></span>
            <div class="container h-100">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-lg-8 col-md-6 order-2 order-md-1 d-none d-md-inline-block">
                        <a class="hamburger-logo d-inline-block" href="home.html">
                            <img src="images/Logo/logo.png" data-at2x="images/Logo/logo.png" class="w-auto" alt="ArqCons">
                        </a>
                        <div class="row mt-22 md-mt-30px sm-mt-25px align-items-start">
                            <div class="col-lg-4 last-paragraph-no-margin md-mb-30px sm-mb-20px menu-address">
                                <span class="text-base-color fs-14 fw-600 ls-2px text-uppercase mb-5px d-block">Estudio</span>
                                <p class="w-90 md-w-80 text-white">Av. Caamaño 1370, Vohe Studios, Estudio 209, Pilar, Buenos Aires, Argentina</p>
                            </div>
                            <div class="col-lg-4 last-paragraph-no-margin md-mb-30px sm-mb-20px menu-address">
                                <span class="text-base-color fs-14 fw-600 ls-2px text-uppercase mb-5px d-block">Hablemos</span>
                                <a href="tel:+5491149975060" class="text-white">+54 9 11 4997-5060</a>
                            </div>
                            <div class="col-lg-4 last-paragraph-no-margin elements-social">
                                <span class="text-base-color fs-14 fw-600 ls-2px text-uppercase mb-5px d-block">Seguinos</span>
                                <div class="social-icon-style-02 mt-15px">
                                    <ul class="medium-icon light">
                                        <li><a class="facebook" href="https://www.facebook.com/ARQCONSAC/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a class="instagram" href="https://www.instagram.com/arqcons_ac/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a class="linkedin" href="https://www.linkedin.com/company/arqcons-arquitectura-y-construcci%C3%B3n/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a class="email" href="mailto:arqcons.arquitectura@gmail.com" aria-label="Correo electrónico"><i class="fa-solid fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 offset-md-1 order-1 order-md-2 text-center text-md-start">
                        <div class="hamburger-menu menu-list-wrapper" data-scroll-options='{ "theme": "light" }'>
                            <ul class="menu-item-list alt-font ls-minus-05px p-0">${navItems}</ul>
                        </div>
                    </div>
                    <div class="col-12 menu-text border-top border-color-transparent-white-light d-none d-md-inline-block text-center pt-3 pb-3 order-3">
                        <h6 class="fw-400 d-inline-block align-middle mb-0">Construyamos tu proyecto <span class="text-white">juntos</span></h6>
                        <div class="separator-line-1px d-inline-block align-middle ms-20px me-20px mt-5px w-70px bg-base-color"></div>
                        <a href="mailto:arqcons.arquitectura@gmail.com" class="text-base-color fs-26 fw-500 d-inline-block align-middle">arqcons.arquitectura@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>`;

    const canonicalLinks = {
        facebook: "https://www.facebook.com/ARQCONSAC/",
        instagram: "https://www.instagram.com/arqcons_ac/",
        linkedin: "https://www.linkedin.com/company/arqcons-arquitectura-y-construcci%C3%B3n/"
    };
    Object.keys(canonicalLinks).forEach(function (network) {
        document.querySelectorAll(`a.${network}`).forEach(function (link) {
            link.href = canonicalLinks[network];
        });
    });

    const studioMap = "https://www.google.com/maps/search/?api=1&query=Av.%20Caama%C3%B1o%201370%2C%20Vohe%20Studios%2C%20Estudio%20209%2C%20Pilar%2C%20Buenos%20Aires%2C%20Argentina";
    document.querySelectorAll('a[href*="google.com/maps/search"]').forEach(function (link) {
        link.href = studioMap;
    });

    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        link.relList.add("noopener");
    });

    const menuButton = document.querySelector(".push-button");
    const closeButton = document.querySelector(".close-menu");
    [menuButton, closeButton].forEach(function (control) {
        if (!control) return;
        control.setAttribute("role", "button");
        control.setAttribute("tabindex", "0");
        control.setAttribute("aria-label", control === menuButton ? "Abrir menú" : "Cerrar menú");
        control.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                control.click();
            }
        });
    });
}());
