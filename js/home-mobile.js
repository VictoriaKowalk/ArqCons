(function () {
    const whatsappButton = document.querySelector(".mobile-whatsapp-fab");
    const contactSection = document.querySelector(".home-contact-section");
    const footer = document.querySelector("#site-footer");
    const projectVideo = document.querySelector(".project-integral-video");

    if (projectVideo && window.matchMedia("(max-width: 767px)").matches) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const saveData = navigator.connection && navigator.connection.saveData;

        if (reduceMotion || saveData) {
            projectVideo.removeAttribute("autoplay");
            projectVideo.pause();
        } else if ("IntersectionObserver" in window) {
            const videoObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const playPromise = projectVideo.play();
                        if (playPromise) playPromise.catch(function () {});
                    } else {
                        projectVideo.pause();
                    }
                });
            }, { threshold: 0.22 });

            videoObserver.observe(projectVideo);
        }
    }

    if (!whatsappButton) return;

    let contactIsVisible = false;
    let footerIsVisible = false;

    const updateButton = function () {
        const passedHero = window.scrollY > window.innerHeight * 0.72;
        whatsappButton.classList.toggle("is-visible", passedHero && !contactIsVisible && !footerIsVisible);
    };

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.target === contactSection) contactIsVisible = entry.isIntersecting;
                if (entry.target === footer) footerIsVisible = entry.isIntersecting;
            });
            updateButton();
        }, { threshold: 0.08 });

        if (contactSection) observer.observe(contactSection);
        if (footer) observer.observe(footer);
    }

    window.addEventListener("scroll", updateButton, { passive: true });
    window.addEventListener("resize", updateButton, { passive: true });
    updateButton();
}());
