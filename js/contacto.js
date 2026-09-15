(function () {
    "use strict";

    const form = document.querySelector("#contact-form");
    if (!form) return;

    const fields = Array.from(form.querySelectorAll("input, select, textarea"));
    const submitButton = form.querySelector("#contact-submit");
    const submitLabel = submitButton.querySelector("span");
    const status = form.querySelector("#contact-form-status");

    function messageFor(field) {
        if (field.validity.valueMissing) {
            return field.tagName === "SELECT" ? "Seleccioná una opción." : "Este campo es obligatorio.";
        }
        if (field.validity.typeMismatch) return "Ingresá un email válido, por ejemplo nombre@email.com.";
        if (field.validity.patternMismatch) return "Ingresá un teléfono válido usando números, espacios, +, guiones o paréntesis.";
        if (field.validity.tooShort) return `Ingresá al menos ${field.minLength} caracteres.`;
        if (field.validity.tooLong) return `Ingresá como máximo ${field.maxLength} caracteres.`;
        return "Revisá este dato.";
    }

    function validateField(field) {
        const error = document.querySelector(`#${field.id}-error`);
        const valid = field.checkValidity();
        field.classList.toggle("is-invalid", !valid);
        field.setAttribute("aria-invalid", String(!valid));
        if (error) error.textContent = valid ? "" : messageFor(field);
        return valid;
    }

    fields.forEach(function (field) {
        field.addEventListener("blur", function () {
            validateField(field);
        });
        field.addEventListener(field.tagName === "SELECT" ? "change" : "input", function () {
            if (field.classList.contains("is-invalid")) validateField(field);
            status.textContent = "";
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (form.dataset.submitting === "true") return;

        fields.forEach(function (field) {
            if (typeof field.value === "string") field.value = field.value.trim();
        });

        const valid = fields.map(validateField).every(Boolean);
        if (!valid) {
            const firstInvalid = form.querySelector(".is-invalid");
            status.textContent = "Revisá los campos marcados antes de continuar.";
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        const data = new FormData(form);
        const lines = [
            "Hola ArqCons, quiero conversar sobre un proyecto.",
            "",
            `Nombre: ${data.get("name")}`,
            `Email: ${data.get("email")}`,
            `Teléfono: ${data.get("phone") || "No indicado"}`,
            `Tipo de proyecto: ${data.get("project_type")}`,
            "",
            `Mensaje: ${data.get("message")}`
        ];
        const url = `https://api.whatsapp.com/send/?phone=5491149975060&text=${encodeURIComponent(lines.join("\n"))}&type=phone_number&app_absent=0`;

        form.dataset.submitting = "true";
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
        submitLabel.textContent = "Abriendo WhatsApp…";
        status.textContent = "Tu consulta está lista. Estamos abriendo WhatsApp.";

        const popup = window.open(url, "_blank");
        if (popup) popup.opener = null;
        else status.textContent = "El navegador bloqueó la nueva pestaña. Usá “Escribir directamente” para continuar.";

        window.setTimeout(function () {
            form.dataset.submitting = "false";
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");
            submitLabel.textContent = "Continuar en WhatsApp";
        }, 1800);
    });
}());
