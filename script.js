window.onload = (event) => {
    onWindowLoad(event)
};

let isNightTheme = true;
let links = {
    "telegram": "https://www.t.me/SALUTYT",
    "discord": "https://www.discordapp.com/users/937349576942305331",
    "youtube": "https://www.youtube.com/@SALUTYT",
    "storyverse": "https://www.t.me/StoryVerseStudioOfficial"
}
let locale = {
    "en": {
        "page-title": "My BIO",
        "info-title": "Info About Me",
        "name": "Name: Salat/Salad/Salut/Maxim",
        "age": "Age: ",
        "age-value": "404: Not found",
        "music": "Favourite music genre: Rap",
        "work": "I'm currently working for:",
        "current-locale": "Language: ",
        "mode": {
            "dark": "Night mode",
            "light": "Light mode"
        },
        "lang": {
            "ru": "Russian",
            "en": "English"
        }
    },
    "ru": {
        "page-title": "Моё Био",
        "info-title": "Информация Обо Мне",
        "name": "Имя: Салат/Salad/Salut/Максим",
        "age": "Возраст: ",
        "age-value": "404: Не найдено",
        "music": "Любимая жанр музыки: Реп",
        "work": "На данный момент я работаю в:",
        "current-locale": "Язык: ",
        "mode": {
            "dark": "Темная тема",
            "light": "Светлая тема"
        },
        "lang": {
            "ru": "Русский",
            "en": "Английский"
        }
    }
}
let current_locale = "en";

function toggleNightTheme() {
    isNightTheme = !isNightTheme;

    var el = document.getElementById("info-page")
    if (isNightTheme) {
        el.style.backgroundColor = "black";

        var btn = document.getElementById("btn-nigth-theme")
        btn.textContent = locale[current_locale]["mode"]["light"];
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
        btn.textContent = locale[current_locale]["mode"]["dark"];
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

function toggleLocale() {
    if (current_locale == "ru") {
        change_locale("en")
    } else {
        change_locale("ru")
    }
}

function social(element) {
    window.location.href = links[element.id]
}

function change_locale(locale) {
    current_locale = locale

    localization() 
}

function localization() {
    document.title = locale[current_locale]["page-title"]

    var title = document.getElementById("info-title")
    title.textContent = locale[current_locale]["info-title"]

    var name = document.getElementById("name")
    name.textContent = locale[current_locale]["name"]

    var age = document.getElementById("age")
    age.textContent = locale[current_locale]["age"]

    var age_value = document.getElementById("age-value")
    age_value.textContent = locale[current_locale]["age-value"]

    var music = document.getElementById("music")
    music.textContent = locale[current_locale]["music"]

    var work = document.getElementById("work")
    work.textContent = locale[current_locale]["work"]

    var btn = document.getElementById("btn-nigth-theme")
    if (isNightTheme) {
        btn.textContent = locale[current_locale]["mode"]["light"];
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    } else {
        btn.textContent = locale[current_locale]["mode"]["dark"];
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
    }

    var locale_btn = document.getElementById("btn-change-locale")
    locale_btn.textContent = `${locale[current_locale]["current-locale"]} ${locale[current_locale]["lang"][current_locale]}`
}

function onWindowLoad(event) {
    localization()
}