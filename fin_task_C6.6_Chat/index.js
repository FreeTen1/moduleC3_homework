const wsUri = "wss://echo.websocket.org/";

const input = document.querySelector('input')
const btn = document.querySelector('.btn-send')
const divChat = document.querySelector('.chat')
const btnGeo = document.querySelector('.btn-geo')

let websocket = new WebSocket(wsUri)

function inputMassage(massage, classMassage) {
    divChat.innerHTML += `<div class="chat-div"><div class="${classMassage}"><p>${massage}</p></div></div>`
}

function  inputGeo(latitude, longitude) {
    divChat.innerHTML += `<div class="chat-div"><div class="left"><a target="_blank" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Гео-локация</a></div></div>`
}

btn.addEventListener('click', ()=>{
    if (websocket.readyState === 1) {
        if (input.value) {
            websocket.send(input.value)
            inputMassage(input.value, 'right')
            websocket.onmessage = (evt) => {
                inputMassage(evt.data, 'left')
            }
        } else {

        }
    } else {
        console.log('Wait!')
    }
})

btnGeo.addEventListener('click', ()=>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position
            inputGeo(coords.latitude, coords.longitude)
            console.log(`${coords.latitude} ${coords.longitude}`)
            console.log(`https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`)
        });
    }
})

