let username;

function getUsername() {
    const password = document.querySelector('.password')
    const user = document.querySelector('.user');
    if (user.value === '' || password.value === '') {
        console.error('error')
    } else {
        username = user.value;
        sessionStorage.setItem('username', username);
        window.location.href = "index.html";
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        getUsername();
    }
}

function showPassword() {
    const passwordInput = document.querySelector('.password')
    const passwordContainer = document.querySelector('.pasword-input-container')
    const firstValue = passwordInput.value
    passwordContainer.innerHTML = `<input type="text" placeholder="Password" class="password"
    onkeydown="checkEnter(event)">
    <button class="see-password" onclick="hidePassword()"><img src="login/pictures/hide-password.png" class="hide-password-picture"></button>`
    const newInput = document.querySelector('.password')
    newInput.value = firstValue
}

function hidePassword() {
    const passwordInput = document.querySelector('.password')
    const passwordContainer = document.querySelector('.pasword-input-container')
    const firstValue = passwordInput.value
    passwordContainer.innerHTML = `<input type="password" placeholder="Password" class="password"
    onkeydown="checkEnter(event)">
    <button class="see-password" onclick="showPassword()"><img src="login/pictures/show-password.png" class="see-password-picture"></button>`
    const newInput = document.querySelector('.password')
    newInput.value = firstValue
}