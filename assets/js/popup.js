document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-btn");
    const declineBtn = document.getElementById("decline-btn");

    if (!getCookie("hasSeenVideo")) {
        popup.style.display = "block";
    }

    acceptBtn.addEventListener("click", function() {
        setCookie("hasSeenVideo", "accepted", 365);
        popup.style.display = "none";
    });

    declineBtn.addEventListener("click", function() {
        deleteCookie("hasSeenVideo");
        popup.style.display = "none";
    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
});