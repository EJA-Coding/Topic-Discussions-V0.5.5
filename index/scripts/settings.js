function themeSettings() {
    document.querySelector('.page-settings-theme').classList.toggle('opacity')

}

function changeTheme() {
    const slider = document.querySelector('.slider');
    const switchs = document.querySelector('.switch');

    switchs.classList.toggle('green');
    slider.classList.toggle('on');
}