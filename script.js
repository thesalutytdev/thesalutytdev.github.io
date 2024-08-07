let isNightTheme = true;
let links = {
    "telegram": "https://www.t.me/SALUTYT",
    "discord": "https://www.discordapp.com/users/937349576942305331",
    "youtube": "https://www.youtube.com/@SALUTYT"
}

function toggleNightTheme() {
    isNightTheme = !isNightTheme;

    var el = document.getElementById("info-page")
    if (isNightTheme) {
        el.style.backgroundColor = "black";

        var btn = document.getElementById("btn-nigth-theme")
        btn.textContent = "Light mode";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";

        var social_tg = document.getElementById("telegram")
        social_tg.src = "../resource/image/svg/telegram-dark.svg"

        var social_ds = document.getElementById("discord")
        social_ds.src = "../resource/image/svg/discord-dark.svg"

        var social_yt = document.getElementById("youtube")
        social_yt.src = "../resource/image/svg/youtube.svg"
    } else {
        el.style.backgroundColor = "white";

        var btn = document.getElementById("btn-nigth-theme")
        btn.textContent = "Night mode";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";

        var social_tg = document.getElementById("telegram")
        social_tg.src = "../resource/image/svg/telegram-light.svg"

        var social_ds = document.getElementById("discord")
        social_ds.src = "../resource/image/svg/discord-light.svg"

        var social_yt = document.getElementById("youtube")
        social_yt.src = "../resource/image/svg/youtube-light.svg"
    }
}

function social(element) {
    window.location.href = links[element.id]
}