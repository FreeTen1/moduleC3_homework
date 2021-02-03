const btn = document.querySelector('button')
const numPage = document.querySelectorAll("input")[0]
const limit = document.querySelectorAll("input")[1]
const container = document.querySelector('#container')

if (localStorage.getItem('myLastJSON')) {
    callbackF(JSON.parse(localStorage.getItem('myLastJSON')))
}

function check(numPage, limit) {
    if (Number.isInteger(numPage) && Number.isInteger(limit)){

    }

    if (((Number(numPage) < 1 || Number(numPage) > 10) && (Number(limit) < 1 || Number(limit) > 10))) {
        container.innerHTML = '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>'
        return false
    }
    else {
        if (1 <= Number(numPage) && Number(numPage) <= 10) {
            if ( 1 <= Number(limit) && Number(limit) <= 10) {
                return true
            }
            else {
                container.innerHTML = '<p>Лимит вне диапазона от 1 до 10</p>'
                return false
            }
        }
        else {
            container.innerHTML = '<p>Номер страницы вне диапазона от 1 до 10</p>'
            return false
        }
    }
}

function useRequests(numPage, limit, callbackFunction) {
    let xhr = new XMLHttpRequest()
    xhr.open('get', `https://picsum.photos/v2/list?page=${numPage}&limit=${limit}`)

    xhr.onload = function (key, value) {
        if (xhr.status !== 200) {
            console.log(`status = ${xhr.status}`)
        }
        else {
            let result = JSON.parse(xhr.response)
            localStorage.setItem('myLastJSON', xhr.response)
            callbackFunction(result)
        }
    };

    xhr.send()
}

function callbackF(result){
    let insert = ''
    result.forEach(elem => {
        let a = `<img class='img' src="${elem.download_url}">`
        insert += a
    })
    container.innerHTML = insert
}

btn.addEventListener('click', () => {

    if (check(numPage.value, limit.value)) {
        useRequests(numPage.value, limit.value, callbackF)

    }

})


