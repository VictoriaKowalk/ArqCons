document.addEventListener("DOMContentLoaded", function () {
    const scope = document.querySelector(".service-scope-list");
    const visual = document.querySelector(".service-scope-visual");
    const mobileMedia = window.matchMedia("(max-width: 767px)");

    document.querySelectorAll(".service-offer-card").forEach(function (card) {
        card.setAttribute("aria-expanded", "false");

        const content = card.querySelector(".service-offer-content");
        if (content && !content.querySelector(".service-offer-mobile-action")) {
            const action = document.createElement("span");
            action.className = "service-offer-mobile-action";
            action.textContent = "Consultar";
            content.appendChild(action);
        }

        card.addEventListener("click", function (event) {
            if (!mobileMedia.matches) return;

            if (!card.classList.contains("is-expanded")) {
                event.preventDefault();
                document.querySelectorAll(".service-offer-card.is-expanded").forEach(function (openCard) {
                    openCard.classList.remove("is-expanded");
                    openCard.setAttribute("aria-expanded", "false");
                });
                card.classList.add("is-expanded");
                card.setAttribute("aria-expanded", "true");
            }
        });
    });

    if (scope && visual) {
        const visualHome = visual.parentElement;
        const visualNextSibling = visual.nextSibling;
        const image = visual.querySelector("img");
        const caption = visual.querySelector("figcaption strong");
        const options = Array.from(scope.querySelectorAll(".service-scope-item"));

        function placeVisual(option) {
            if (mobileMedia.matches) {
                option.insertAdjacentElement("afterend", visual);
            } else if (visual.parentElement !== visualHome) {
                visualHome.insertBefore(visual, visualNextSibling);
            }
        }

        function selectScope(option, animate) {
            options.forEach(function (item) {
                const active = item === option;
                item.classList.toggle("is-active", active);
                item.setAttribute("aria-pressed", String(active));
            });

            placeVisual(option);
            if (image.src.endsWith(option.dataset.scopeImage)) return;

            if (animate !== false) image.classList.add("is-changing");
            window.setTimeout(function () {
                image.src = option.dataset.scopeImage;
                image.alt = option.dataset.scopeAlt;
                caption.textContent = option.querySelector("strong").textContent;
                image.classList.remove("is-changing");
            }, animate === false ? 0 : 160);
        }

        options.forEach(function (option) {
            option.addEventListener("click", function () {
                selectScope(option);
            });
            option.addEventListener("mouseenter", function () {
                if (window.matchMedia("(hover: hover)").matches) selectScope(option);
            });
        });

        function updateScopeLayout() {
            const active = scope.querySelector(".service-scope-item.is-active") || options[0];
            if (active) placeVisual(active);
        }

        mobileMedia.addEventListener("change", updateScopeLayout);
        updateScopeLayout();
    }

});
