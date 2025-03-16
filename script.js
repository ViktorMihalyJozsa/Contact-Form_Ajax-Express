/*  ========================================================================  *\

    S C R I P T S  F O R   C O N T A C T   F O R M   W I T H   F E T C H

        Ez a fájl a weboldal JavaScript kódját tartalmazza.
        Az oldal interaktivitását és dinamikus működését biztosítja.
        Az oldal betöltése után fut le, és a HTML fájlokhoz hasonlóan
        a <script>...</script> tag-ek közé kell írni.
        A kód a modern JavaScript szabványokat követi.

\*  ========================================================================  */

// Az űrlap elküldésekor a következő kód fut le
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("status");

    if (!name || !email || !message) {
        setStatusStyles(status, "Please fill out all fields !", "red");
        return;
    }

    if (!validateEmail(email)) {
        setStatusStyles(status, "Invalid email address !", "red");
        return;
    }

    setStatusStyles(status, "Your message has been sent !", "green");
});

// Az üzenet státuszának stílusának beállítása
function setStatusStyles(element, message, color) {
    element.textContent = message;
    Object.assign(element.style, {
        textAlign: "center",
        marginTop: "4vh",
        color: color,
        fontSize: "clamp(1.2em, 1.5vw, 1.5em)",
        fontWeight: "bold",
        letterSpacing: "clamp(0.12em, 1vw, 0.15em)",
        transition: "color 0.5s, fontSize 0.5s, letterSpacing 0.5s"
    });
}

// Az email cím validálása
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}