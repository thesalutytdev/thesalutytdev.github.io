let links = {
    "telegram": "https://www.t.me/SALUTYT",
    "discord": "https://www.discordapp.com/users/937349576942305331",
    "youtube": "https://www.youtube.com/@SALUTYT",
    "work": "https://www.t.me/StoryVerseStudioOfficial"
}
let locale = {
    "en": {
        "page-title": "My BIO",
        "info-title": "Info About Me",
        "name": "Name: Salat/Salad/Salut/Maxim",
        "gender": "Gender: ",
        "gender-value": "Male",
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
        "gender": "Пол: ",
        "gender-value": "Мужской",
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
let images = {
    "links": {
        "dark": {
            "telegram": "../resource/image/svg/telegram-dark.svg",
            "discord": "../resource/image/svg/discord-dark.svg",
            "youtube": "../resource/image/svg/youtube.svg"
        },
        "light": {
            "telegram": "../resource/image/svg/telegram-light.svg",
            "discord": "../resource/image/svg/discord-light.svg",
            "youtube": "../resource/image/svg/youtube-light.svg"
        }
    },
    "work": "../resource/image/png/storyverse.png",
    "avatar": "../resource/video/avatar.mp4"
}
let current_locale = "en";
let isNightTheme = true;

window.onload = (event) => {
    onWindowLoad(event)
};

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

    var gender = document.getElementById("gender")
    gender.textContent = locale[current_locale]["gender"]

    var gender_value = document.getElementById("gender-value")
    gender_value.textContent = locale[current_locale]["gender-value"]

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

function imageSetter() {
    var avatar = document.getElementById("avatar")
    avatar.src = images["avatar"]

    var storyverse = document.getElementById("work")
    storyverse.src = images["work"]

    var social_tg = document.getElementById("telegram")
    if (isNightTheme) {
        social_tg.src = images["links"]["dark"]["telegram"]
    } else {
        social_tg.src = images["links"]["light"]["telegram"]
    }

    var social_ds = document.getElementById("discord")
    if (isNightTheme) {
        social_ds.src = images["links"]["dark"]["discord"]
    } else {
        social_ds.src = images["links"]["light"]["discord"]
    }

    var social_yt = document.getElementById("youtube")
    if (isNightTheme) {
        social_yt.src = images["links"]["dark"]["youtube"]
    } else {
        social_yt.src = images["links"]["light"]["youtube"]
    }
}

function onWindowLoad(event) {
    localization()
    imageSetter()
}