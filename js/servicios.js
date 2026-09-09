document.addEventListener("DOMContentLoaded", function () {
    const scope = document.querySelector(".service-scope-list");
    const visual = document.querySelector(".service-scope-visual");

    if (!scope || !visual) return;

    const image = visual.querySelector("img");
    const caption = visual.querySelector("figcaption strong");
    const options = Array.from(scope.querySelectorAll(".service-scope-item"));

    function selectScope(option) {
        options.forEach(function (item) {
            const active = item === option;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-pressed", String(active));
        });

        image.classList.add("is-changing");
        window.setTimeout(function () {
            image.src = option.dataset.scopeImage;
            image.alt = option.dataset.scopeAlt;
            caption.textContent = option.querySelector("strong").textContent;
            image.classList.remove("is-changing");
        }, 160);
    }

    options.forEach(function (option) {
        option.addEventListener("click", function () {
            selectScope(option);
        });
        option.addEventListener("mouseenter", function () {
            if (window.matchMedia("(hover: hover)").matches) selectScope(option);
        });
    });
});
