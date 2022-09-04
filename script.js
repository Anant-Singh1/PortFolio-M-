let themeDots = document.getElementsByClassName('theme-dot');
let theme = localStorage.getItem('theme');


if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}
for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'style.css';
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    } if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    } if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode)
}


let menuBtn = document.getElementById('menuBtn');
let sideNavbar = document.getElementById('sideNavbar');
let menu = document.getElementById('menu');

sideNavbar.style.right = "-250px";
menuBtn.onclick = () => {
    if (sideNavbar.style.right === "-250px") {
        sideNavbar.style.right = "0";
        menu.src = './img/close.png'
    }
    else {
        sideNavbar.style.right = "-250px";
        menu.src = './img/menu.png'
    }
}   