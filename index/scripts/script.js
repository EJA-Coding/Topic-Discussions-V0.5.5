
let inputElement = document.querySelector('.text')
let profilePicure = 'profile'
const username = sessionStorage.getItem('username');


if (username === null) {
    window.location.href = "login-page.html";
} else {



    console.log(username);
    function getMessageInput(event) {
        if (event.key === 'Enter') {
            if (inputElement.value !== '') {
                const messageDiv = document.createElement('div')
                const userDiv = document.createElement('div')
                const userPicture = document.createElement('div')
                const chat = document.querySelector('.js-chat')
                messageDiv.classList.add('message')
                userDiv.classList.add('username')
                userPicture.classList.add('user-picture-container')
                messageDiv.innerText = inputElement.value
                userDiv.innerText = username
                userPicture.innerHTML = `<img src="index/pictures/profile.png" class="user-picture"></img>`
                chat.appendChild(userDiv)
                chat.appendChild(messageDiv)
                chat.appendChild(userPicture)


                inputElement.value = ''
                document.querySelector('.chat-container').scrollTop = document.querySelector('.chat-container').scrollHeight
            }

        }

    }

    function isUserTyping(event) {
        if (event.key) {
            document.querySelector('.js-typing').innerText = `${username} is typing...`
            if (event.key === 'Enter') {
                document.querySelector('.js-typing').innerHTML = ''
            }
            if (inputElement.value === '') {
                document.querySelector('.js-typing').innerHTML = ''
            }
            if (event.key === 'Backspace') {
                document.querySelector('.js-typing').innerHTML = ''
            }
        }
    }

    let numberTopics = 0 // only in console
    const topicName = document.querySelector('.topic-name')
    const popUp = document.querySelector('.name-topic')

    function showPopUp() {
        popUp.classList.add('show')
        document.querySelector('body').classList.add('pointer')
        document.querySelector('.topic-get').classList.add('affiche')
    }

    function closePopUp() {
        popUp.classList.remove('show')
        document.querySelector('body').classList.remove('pointer')
        document.querySelector('.error1').classList.remove('showerror')
        document.querySelector('.topic-get').classList.remove('affiche')
    }

    function createTopic() {
        document.querySelector('.topic-get').classList.remove('affiche')

        const topicTypedName = document.querySelector('.topic-create-input')

        const topicsContainer = document.querySelector('.topics-container')

        const newTopic = document.createElement('div')

        const textInput = document.querySelector('.text')

        let topicID = topicTypedName.value.trim()
        if (topicID === '') {
            console.error('cannot create topics error code : 1')
            document.querySelector('.error1').classList.add('showerror')
        } else {
            newTopic.classList.add('topics')
            newTopic.innerHTML = `${topicID} <img src="index/pictures/484662.png" class="delete-topic-icon" onclick="deleteTopic(this)">`
            document.querySelector('.topics-container').appendChild(newTopic)
            numberTopics += 1
            console.log(numberTopics)
            topicTypedName.value = ''
            popUp.classList.remove('show')
            document.querySelector('body').classList.remove('pointer')
            document.querySelector('.error1').classList.remove('showerror')
            newTopic.onclick = function () {
                if (newTopic.classList.contains('topics-selected')) {
                    newTopic.classList.remove('topics-selected')
                    topicName.innerHTML = ''
                } else {
                    newTopic.classList.add('topics-selected')
                    topicName.innerText = topicID
                }

            }

        }
    }


    function deleteTopic(imgElement) {
        numberTopics -= 1
        console.log(numberTopics)
        imgElement.parentElement.remove();
        topicName.innerHTML = ''
        event.stopPropagation();
    }




    document.querySelector('.profile-container').innerHTML = `<img src="index/pictures/${profilePicure}.png" class="profile-picture">`

}

function getProfileInfos() {
    let creationDate = '19/12/2025'
    const userInfos = document.querySelector('.profile-infos')
    userInfos.innerHTML = ` <div class="one">
                                    <img src="index/pictures/profile.png" class="profile-picture-infos"></img>
                                    <p>
                                    <p class="username-style">${username}</p>
                                    <BR>
                                    <span class="creation-date"> Signed up on ${creationDate}</span>
                                    </p>
                                </div>
                                <div class="two">
                                    <hr class="line">
                                    <p class="user-bio">Juste là pour discuter et faire des rencontres sympa.</p>
                                </div>`
    userInfos.classList.toggle('open')
    document.querySelector('body').classList.toggle('pointer')
    document.querySelector('.profile-container').classList.toggle('open')
    document.querySelector('.profile-get').classList.toggle('affiche')
    document.querySelector('.profile-container').classList.add('z')
}



/* ------------------------------NOTIFS------------------------------- */


let notifCount = 7

const notifsElementContainer = document.querySelector('.notif-count-container')
const notifsElement = document.querySelector('.notif-count')
notifsElement.innerHTML = notifCount


function updateNotif() {
    if (notifCount === undefined) {
        console.error('error while loading notifs');
        notifCount = 0;
        notifsElement.innerHTML = notifCount
    }

    if (notifCount === 0) {
        notifsElementContainer.classList.add('cache')
    } else {
        notifsElementContainer.classList.remove('cache')
    }

    if (notifCount < 10) {
        notifsElement.classList.add('notif-count-less')
    } else {
        notifsElement.classList.remove('notif-count-less')
    }

    if (notifCount > 99) {
        notifsElement.innerHTML = '99+'
        notifsElement.classList.add('notif-count-plus')
    } else {
        notifsElement.classList.remove('notif-count-plus')
    }
}

updateNotif()
const notifsContainer = document.querySelector('.see-notifs')

function seeNotifs() {
    notifCount = 0
    updateNotif()
    notifsContainer.classList.toggle('show')
}


function newNotif() {
    updateNotif()
}



/* --------------------------------------------------SETTINGS------------------------------------------------- */

const settingsPage = document.querySelector('.full-settings');

function showSettings() {
    settingsPage.classList.toggle('get-settings')
    document.querySelector('.global-container').classList.toggle('pointer')

}