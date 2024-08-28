//script pour la gestion des cookies
console.log("cookie.js chargé");
// we st the cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// get the cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function() {
    var hasSeenVideo = getCookie("hasSeenVideo");
    var video = document.getElementById('intro-video');
    if (hasSeenVideo) {
        video.style.display = 'none';
    } else {
        video.addEventListener('ended', function() {
            video.style.display = 'none';
            setCookie("hasSeenVideo", "true", 1);
        });
    }
};

// Script de popup cookie avec acceptation ou refus
function showCookiePopup() {
    document.getElementById('cookie-popup').style.display = 'block';
}

// Vérifier si l'utilisateur a déjà accepté les cookies
if (!localStorage.getItem('cookiesAccepted')) {
    showCookiePopup();
}

// Ajouter un événement au bouton pour accepter les cookies
document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-popup').style.display = 'none';
});

// Fonction pour supprimer le cookie "hasSeenVideo"
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Ajouter un événement au bouton pour refuser les cookies
document.getElementById('reject-cookies').addEventListener('click', function() {
    deleteCookie('hasSeenVideo');
    document.getElementById('cookie-popup').style.display = 'none';
});
 