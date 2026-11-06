(function () {
    "use strict";

    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5491149975060&text=Hola+ArqCons%2C+quiero+conversar+sobre+un+proyecto.&type=phone_number&app_absent=0";
    let whatsappButton = document.querySelector(".site-whatsapp-fab, .mobile-whatsapp-fab");

    if (!whatsappButton) {
        whatsappButton = document.createElement("a");
        whatsappButton.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.49 14.8L2 22l5.33-1.52A9.93 9.93 0 1 0 12.04 2Zm0 17.9a8 8 0 0 1-4.08-1.12l-.29-.17-3.16.9.84-3.08-.19-.31a8 8 0 1 1 6.88 3.78Zm4.39-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.2 7.2 0 0 1-1.33-1.65c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.11 3.63.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
            </svg>`;
        document.body.appendChild(whatsappButton);
    }

    whatsappButton.classList.add("site-whatsapp-fab");
    whatsappButton.href = whatsappUrl;
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";
    whatsappButton.setAttribute("aria-label", "Consultar por WhatsApp");
    whatsappButton.setAttribute("title", "Consultar por WhatsApp");

    const menu = document.querySelector(".push-menu.hamburger-nav");
    if (!menu) return;

    const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const section = file.startsWith("proyecto-") ? "proyectos.html" : file.startsWith("emprendimiento-") ? "emprendimientos.html" : file;
    const navItems = [
        ["index.html", "Inicio"],
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
                        <a class="hamburger-logo d-inline-block" href="index.html">
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
