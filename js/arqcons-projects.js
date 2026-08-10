(function () {
    "use strict";

    const socialLinks = `
        <a class="facebook" href="https://www.facebook.com/ARQCONSAC/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a class="instagram" href="https://www.instagram.com/arqcons_ac/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a class="linkedin" href="https://www.linkedin.com/company/arqcons-arquitectura-y-construcci%C3%B3n/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>`;

    const header = `
        <header><nav class="navbar navbar-expand-lg header-transparent bg-transparent disable-fixed"><div class="container-fluid">
            <div class="col-auto col-lg-2 me-lg-0 me-auto d-none d-lg-flex"><div class="header-icon"><div class="header-social-icon icon social-text-style-01">${socialLinks}</div></div></div>
            <div class="col-auto"><a class="navbar-brand" href="home.html"><img src="images/Logo/logo.png" data-at2x="images/Logo/logo.png" alt="ArqCons" class="default-logo"><img src="images/Logo/logo.png" data-at2x="images/Logo/logo.png" alt="ArqCons" class="alt-logo"><img src="images/Logo/logo.png" data-at2x="images/Logo/logo.png" alt="ArqCons" class="mobile-logo"></a></div>
            <div class="col-auto col-lg-2 text-end"><div class="header-icon header-push-button hamburger-push-button icon"><div class="push-button"><span></span><span></span><span></span><span></span></div></div></div>
        </div></nav><div class="push-menu hamburger-nav hamburger-menu-simple header-dark bg-dark-gray background-position-center-top" style="background-image:url('images/vertical-line-bg-small.svg')"><span class="close-menu text-dark-gray text-dark-gray-hover bg-white"><i class="fa-solid fa-xmark"></i></span><div class="container h-100"><div class="row align-items-center justify-content-center h-100">
            <div class="col-lg-8 col-md-6 order-2 order-md-1 d-none d-md-inline-block"><a class="hamburger-logo d-inline-block" href="home.html"><img src="images/Logo/logo.png" class="w-auto" alt="ArqCons"></a><div class="row mt-22 md-mt-30px sm-mt-25px align-items-start"><div class="col-lg-5 last-paragraph-no-margin md-mb-30px sm-mb-20px menu-address menu-contact-data"><span class="text-base-color fs-14 fw-600 ls-2px text-uppercase mb-5px d-block">Ubicación</span><p class="w-90 md-w-80">Av. Caamaño 1370, Vohe Studios, Estudio 209, Pilar, Buenos Aires</p></div><div class="col-lg-4 last-paragraph-no-margin md-mb-30px sm-mb-20px menu-address"><span class="text-base-color fs-14 fw-600 ls-2px text-uppercase mb-5px d-block">Contacto</span><a href="tel:+5491149975060" class="text-white-hover">+54 9 11 4997-5060</a><br><a href="mailto:arqcons.arquitectura@gmail.com" class="text-decoration-line-bottom text-white">arqcons.arquitectura@gmail.com</a></div><div class="col-lg-3 last-paragraph-no-margin elements-social menu-social-links"><span class="text-base-color fs-14 fw-600 ls-2px text-uppercase mb-5px d-block">Seguinos</span><div class="social-icon-style-02 mt-15px"><div class="medium-icon light">${socialLinks}</div></div></div></div></div>
            <div class="col-lg-3 col-md-5 offset-md-1 order-1 order-md-2 text-center text-md-start"><div class="hamburger-menu menu-list-wrapper" data-scroll-options='{ "theme": "light" }'><ul class="menu-item-list alt-font ls-minus-05px p-0"><li class="menu-item"><a href="home.html" class="nav-link">Inicio</a></li><li class="menu-item"><a href="about.html" class="nav-link">Nosotros</a></li><li class="menu-item"><a href="servicios.html" class="nav-link">Servicios</a></li><li class="menu-item"><a href="proyectos.html" class="nav-link">Proyectos</a></li><li class="menu-item"><a href="contacto.html" class="nav-link">Contacto</a></li></ul></div></div>
            <div class="col-12 menu-text border-top border-color-transparent-white-light d-none d-md-inline-block text-center pt-3 pb-3 order-3"><h6 class="fw-400 d-inline-block align-middle mb-0">Construyamos algo <span class="text-white">increíble juntos</span></h6><div class="separator-line-1px d-inline-block align-middle ms-20px me-20px mt-5px w-70px bg-base-color"></div><a href="mailto:arqcons.arquitectura@gmail.com" class="text-base-color fs-26 fw-500 d-inline-block align-middle">arqcons.arquitectura@gmail.com</a></div>
        </div></div></div></header>`;

    const footer = `<footer class="bg-nero-grey pb-0 pt-4 md-pt-6 sm-pt-9 xs-pt-11 background-position-center-top" style="background-image:url('images/demo-architecture-dotted-pattern.svg')"><div class="container"><div class="row align-items-center mb-3 md-mb-5 xs-mb-8"><div class="col-sm-10 text-center text-sm-start order-2 order-sm-1"><h6 class="fw-400 d-inline-block align-middle mb-0">Construyamos algo <span class="text-white">increíble juntos</span></h6><div class="separator-line-1px d-none d-sm-inline-block align-middle ms-20px me-20px mt-5px w-70px lg-w-50px bg-base-color"></div><a href="mailto:arqcons.arquitectura@gmail.com" class="text-base-color fs-26 fw-500 d-inline-block align-middle">arqcons.arquitectura@gmail.com</a></div><div class="col-sm-2 text-center text-sm-end order-1 order-sm-2 xs-mb-15px"><a href="home.html" class="footer-logo d-inline-block"><img src="images/Logo/logo.png" alt="ArqCons"></a></div></div><div class="row align-items-end mb-6 xs-mb-9"><div class="col-lg-4 col-sm-6 last-paragraph-no-margin text-center text-sm-start md-mb-30px"><span class="text-white d-block fs-12 fw-600 ls-2px text-uppercase">Ubicación</span><p class="w-80 lg-w-95 md-w-70 sm-w-85 xs-mx-auto text-medium-gray fs-15 lh-28">Av. Caamaño 1370, Vohe Studios, Estudio 209, Pilar, Buenos Aires, Argentina</p></div><div class="col-lg-4 col-sm-6 last-paragraph-no-margin text-center text-sm-start md-mb-30px"><span class="text-white d-block fs-12 fw-600 ls-2px text-uppercase">Teléfonos</span><p class="text-medium-gray fs-15 lh-28"><a href="tel:+5491149975060" class="text-medium-gray text-white-hover">+54 9 11 4997-5060</a><br><a href="tel:+5491160132000" class="text-medium-gray text-white-hover">+54 9 11 6013-2000</a></p></div><div class="col-lg-4 col-sm-6 last-paragraph-no-margin ms-auto text-center text-sm-start text-lg-end fs-19"><span class="text-white d-block fs-12 fw-600 ls-2px text-uppercase mb-10px">Hablemos de tu proyecto</span><a href="contacto.html" class="text-white fw-500 text-decoration-line-bottom">Contactanos</a></div></div></div><div class="footer-bottom p-20px border-top border-color-transparent-white-light"><div class="container"><div class="row align-items-center"><div class="col-lg-7 text-center text-lg-start md-mb-10px"><ul class="footer-navbar fs-15 lh-normal"><li class="nav-item"><a href="home.html" class="nav-link">Inicio</a></li><li class="nav-item"><a href="about.html" class="nav-link">Nosotros</a></li><li class="nav-item"><a href="servicios.html" class="nav-link">Servicios</a></li><li class="nav-item"><a href="proyectos.html" class="nav-link">Proyectos</a></li><li class="nav-item"><a href="contacto.html" class="nav-link">Contacto</a></li></ul></div><div class="col-lg-5 text-center text-lg-end"><span class="fs-15">&copy; 2026 ArqCons. Todos los derechos reservados.</span></div></div></div></div></footer><div class="scroll-progress d-none d-xxl-block"><a href="#" class="scroll-top" aria-label="Volver al inicio"><span class="scroll-text">Subir</span><span class="scroll-line"><span class="scroll-point"></span></span></a></div>`;

    const projects = {
        "proyecto-puertos-del-lago.html": { title: "Casa en Puertos del Lago", folder: "Casa en Puertos del Lago" },
        "proyecto-estancias-del-pilar.html": { title: "Casa Estancias del Pilar", folder: "Casa Estancias del Pilar" },
        "proyecto-reserva-iii.html": { title: "Casa Reserva III", folder: "Casa Reserva III" },
        "proyecto-reserva-iv.html": { title: "Casa Reserva IV", folder: "Casa Reserva IV" },
        "proyecto-san-eliseo.html": { title: "Casa San Eliseo", folder: "Casa San Eliseo" },
        "proyecto-san-isidro-labrador.html": { title: "Casa San Isidro Labrador", folder: "Casa San Isidro Labrador" }
    };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headerTarget = document.querySelector("[data-arqcons-header]");
    const footerTarget = document.querySelector("[data-arqcons-footer]");
    if (headerTarget) headerTarget.outerHTML = header;
    if (footerTarget) footerTarget.outerHTML = footer;

    const hero = document.querySelector(".project-detail-hero");
    if (hero) {
        const imageMatch = hero.style.backgroundImage.match(/^url\((["']?)(.*?)\1\)$/);
        const media = document.createElement("div");
        media.className = "project-hero-media";
        const resolvedHeroImage = new URL(imageMatch ? imageMatch[2] : "", document.baseURI).href;
        media.style.setProperty("--project-hero-image", `url("${resolvedHeroImage}")`);
        hero.prepend(media);
        const cue = document.createElement("a");
        cue.className = "project-scroll-cue";
        cue.href = "#project-story";
        cue.textContent = "Explorar proyecto";
        hero.append(cue);
        const story = hero.nextElementSibling;
        if (story) story.id = "project-story";
        if (!reducedMotion) {
            window.addEventListener("scroll", function () { media.style.setProperty("--hero-shift", `${Math.min(window.scrollY * .18, 110)}px`); }, { passive: true });
            hero.addEventListener("pointermove", function (event) {
                const bounds = hero.getBoundingClientRect();
                media.style.setProperty("--hero-x", `${((event.clientX - bounds.left) / bounds.width - .5) * -18}px`);
                media.style.setProperty("--hero-y", `${((event.clientY - bounds.top) / bounds.height - .5) * -12}px`);
            });
            hero.addEventListener("pointerleave", function () { media.style.setProperty("--hero-x", "0px"); media.style.setProperty("--hero-y", "0px"); });
        }
    }

    let images = [];
    document.querySelectorAll("[data-project-gallery]").forEach(function (gallery) {
        const folder = gallery.dataset.folder;
        const count = Number(gallery.dataset.count || 0);
        const title = gallery.dataset.title || "Proyecto ArqCons";
        images = Array.from({ length: count }, function (_, index) { return `images/proyectos/${folder}/${index + 1}.webp`; });
        gallery.innerHTML = images.map(function (source, index) {
            return `<a href="${source}" class="project-gallery-item" data-project-image="${index}" aria-label="Abrir imagen ${index + 1} de ${count}"><img src="${source}" alt="${title} — imagen ${index + 1}" loading="${index > 2 ? "lazy" : "eager"}" decoding="async"><span class="project-image-number">${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}</span></a>`;
        }).join("");
    });

    const revealItems = document.querySelectorAll(".project-fact, .project-gallery-item");
    if (reducedMotion || !("IntersectionObserver" in window)) revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    else {
        const observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: .12 });
        revealItems.forEach(function (item, index) { item.style.transitionDelay = `${(index % 4) * 70}ms`; observer.observe(item); });
    }

    const cursor = document.createElement("div");
    cursor.className = "project-view-cursor";
    cursor.textContent = "Ver";
    document.body.append(cursor);
    document.addEventListener("pointermove", function (event) { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; });
    document.querySelectorAll(".project-gallery-item").forEach(function (item) { item.addEventListener("pointerenter", function () { cursor.classList.add("is-active"); }); item.addEventListener("pointerleave", function () { cursor.classList.remove("is-active"); }); });

    if (images.length) {
        const lightbox = document.createElement("div");
        lightbox.className = "project-lightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-label", "Galería del proyecto");
        lightbox.innerHTML = `<button class="project-lightbox-zoom" type="button">Ampliar</button><button class="project-lightbox-close" type="button" aria-label="Cerrar">&times;</button><button class="project-lightbox-arrow project-lightbox-prev" type="button" aria-label="Imagen anterior"><i class="fa-solid fa-arrow-left"></i></button><img class="project-lightbox-image" alt="" decoding="async"><button class="project-lightbox-arrow project-lightbox-next" type="button" aria-label="Imagen siguiente"><i class="fa-solid fa-arrow-right"></i></button><div class="project-lightbox-thumbs">${images.map(function (source, index) { return `<button class="project-lightbox-thumb" data-lightbox-thumb="${index}" aria-label="Ver imagen ${index + 1}"><img src="${source}" alt="" loading="lazy" decoding="async"></button>`; }).join("")}</div><div class="project-lightbox-meta"></div>`;
        document.body.append(lightbox);
        const lightboxImage = lightbox.querySelector(".project-lightbox-image");
        const lightboxMeta = lightbox.querySelector(".project-lightbox-meta");
        let activeIndex = 0;
        let touchStart = 0;
        let lastTrigger = null;
        function show(index) { activeIndex = (index + images.length) % images.length; lightboxImage.classList.remove("is-zoomed"); lightbox.querySelector(".project-lightbox-zoom").textContent = "Ampliar"; lightboxImage.src = images[activeIndex]; lightboxImage.alt = `Imagen ${activeIndex + 1} del proyecto`; lightboxMeta.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`; lightbox.querySelectorAll(".project-lightbox-thumb").forEach(function (thumb, thumbIndex) { thumb.classList.toggle("is-active", thumbIndex === activeIndex); }); }
        function open(index, trigger) { lastTrigger = trigger || null; show(index); lightbox.classList.add("is-open"); document.body.classList.add("project-lightbox-open"); lightbox.querySelector(".project-lightbox-close").focus(); }
        function close() { lightbox.classList.remove("is-open"); document.body.classList.remove("project-lightbox-open"); if (lastTrigger) lastTrigger.focus(); }
        document.querySelectorAll("[data-project-image]").forEach(function (item) { item.addEventListener("click", function (event) { event.preventDefault(); open(Number(item.dataset.projectImage), item); }); });
        lightbox.querySelector(".project-lightbox-close").addEventListener("click", close);
        lightbox.querySelector(".project-lightbox-prev").addEventListener("click", function () { show(activeIndex - 1); });
        lightbox.querySelector(".project-lightbox-next").addEventListener("click", function () { show(activeIndex + 1); });
        function toggleZoom() { const zoomed = lightboxImage.classList.toggle("is-zoomed"); lightbox.querySelector(".project-lightbox-zoom").textContent = zoomed ? "Reducir" : "Ampliar"; }
        lightbox.querySelector(".project-lightbox-zoom").addEventListener("click", toggleZoom);
        lightboxImage.addEventListener("click", toggleZoom);
        lightbox.querySelector(".project-lightbox-thumbs").addEventListener("click", function (event) { const thumb = event.target.closest("[data-lightbox-thumb]"); if (thumb) show(Number(thumb.dataset.lightboxThumb)); });
        lightbox.addEventListener("click", function (event) { if (event.target === lightbox) close(); });
        lightbox.addEventListener("touchstart", function (event) { touchStart = event.changedTouches[0].clientX; }, { passive: true });
        lightbox.addEventListener("touchend", function (event) { const distance = event.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 55) show(activeIndex + (distance < 0 ? 1 : -1)); }, { passive: true });
        document.addEventListener("keydown", function (event) { if (!lightbox.classList.contains("is-open")) return; if (event.key === "Escape") close(); if (event.key === "ArrowLeft") show(activeIndex - 1); if (event.key === "ArrowRight") show(activeIndex + 1); });
    }

    const oldNav = document.querySelector("main > section:last-child");
    if (oldNav && oldNav.querySelectorAll("a").length === 2) {
        const links = Array.from(oldNav.querySelectorAll("a"));
        const nav = document.createElement("nav");
        nav.className = "project-nav";
        nav.setAttribute("aria-label", "Navegación entre proyectos");
        nav.innerHTML = links.map(function (link, index) {
            const file = link.getAttribute("href");
            const project = projects[file];
            if (!project) return "";
            return `<a href="${file}" class="project-nav-card"><img src="images/proyectos/${project.folder}/1.webp" alt="" loading="lazy" decoding="async"><span class="project-nav-content"><span class="project-nav-label">${index === 0 ? "Proyecto anterior" : "Proyecto siguiente"}</span><span class="project-nav-title">${project.title}</span></span></a>`;
        }).join("");
        oldNav.replaceWith(nav);
    }

    const gallerySection = document.querySelector("[data-project-gallery]")?.closest("section");
    const visualNav = document.querySelector(".project-nav");
    if (hero && gallerySection && visualNav) {
        hero.id = "project-top";
        gallerySection.id = "project-gallery";
        visualNav.id = "project-next";
        const sectionNav = document.createElement("nav");
        sectionNav.className = "project-section-nav";
        sectionNav.setAttribute("aria-label", "Secciones del proyecto");
        sectionNav.innerHTML = `<a class="project-section-link is-active" href="#project-top"><span>Inicio</span></a><a class="project-section-link" href="#project-story"><span>Historia</span></a><a class="project-section-link" href="#project-gallery"><span>Galería</span></a><a class="project-section-link" href="#project-next"><span>Más proyectos</span></a>`;
        document.body.append(sectionNav);
        const observedSections = [hero, document.querySelector("#project-story"), gallerySection, visualNav];
        const sectionLinks = sectionNav.querySelectorAll(".project-section-link");
        const sectionObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) sectionLinks.forEach(function (link) { link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`); }); }); }, { rootMargin: "-38% 0px -52%", threshold: 0 });
        observedSections.forEach(function (section) { if (section) sectionObserver.observe(section); });
    }
}());
