let current_theme_dark = true;
const theme_toggle = document.getElementById("theme_toggle");
const bg_wrapper = document.getElementById("wrapper");
const paras = document.getElementsByClassName("para_container");
const nav_btn = document.getElementById("nav_down");
const nav_btn_i = document.getElementById("nav_down_id");

document.addEventListener("scroll", () => {
    if(window.scrollY == 0) {
        nav_btn.style.display = "block";
    } else {
        nav_btn.style.display = "none";
    }
})

theme_toggle.addEventListener("click", () => {
    if(current_theme_dark) {
        current_theme_dark = false;
        nav_btn_i.style.color = "black";
        for (let para of paras) {
            para.style.background = "rgba(225,225,225,0.5)";
            para.style.color = "#3c414e";
        }
        bg_wrapper.style.backgroundImage = "url(/images/snow_view.jpg)";
        theme_toggle.innerHTML = `
        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-sun" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
            <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
        </svg>
        `;
    } else {
        current_theme_dark = true;
        nav_btn_i.style.color = "white";
        for (let para of paras) {
            para.style.background = "rgba(0,0,0,0.5)";
            para.style.color = "#c4cde6";
        }
        bg_wrapper.style.backgroundImage = "url(/images/night_drive.jpg)";
        theme_toggle.innerHTML = `
            <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-moon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
                />
            </svg>
        `;
    }

})

function loadDone() {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.animation = "fadeOut 2s ease";
        setTimeout(() => {
            // preloader.style.display = "none";
            // preloader.style.visibility = "hidden";
            // preloader.style.animationPlayState = "paused";
            preloader.parentNode.removeChild(preloader);
        }, 1000);
    }, 2000);
}

function nav_down() {
    document.getElementById("page_one").scrollIntoView({behavior: "smooth"})
}