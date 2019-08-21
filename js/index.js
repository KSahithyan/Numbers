
var blankPage = localStorage.getItem('blankPage') == "true"
let id = "newtab"

// Main Variables
const MIN = 0
const MAX = 1000
const HTTP = new XMLHttpRequest()
var number
var description
var type = localStorage.getItem("type")
var url = `http://numbersapi.com/random${type}?min=${MIN}&max=${MAX}&json&fragment` // @ this.37 too
var shareURL = {}
// Other Variables
const numberElement = document.getElementById('number-head')
const descriptionElement = document.getElementById('number-description')
const categoryElement = document.getElementById('category')
// Select the page
selectPage()

function selectPage() {
    if (blankPage) { // if blankPage, show it
        document.body.style.display = 'none'
    } else { //otherwise show the fact
        sendRequest()
        document.body.style.display = 'grid'
    }
}
function setShareURLs() {
    shareURL = {
        twitter: `https://twitter.com/intent/tweet?hashtags=NumbersExtension,Numbers&via=KSahithyan&text=${number} is ${description}.&url=http://bit.ly/NumbersCRX`
    }
}

HTTP.onreadystatechange = async function () {
    if (HTTP.response) {
        var json = JSON.parse(HTTP.response)
        number = json.number
        description = json.text
        controlFontSize()
        numberElement.innerHTML = number
        descriptionElement.innerHTML = description
        categoryElement.innerHTML = type.slice(1).toTitleFormat()
        setShareURLs()
    }
}

HTTP.onerror = (e) => {
    showEmoji()
    descriptionElement.innerHTML = "Something went wrong."
}

function sendRequest() {
    type = localStorage.getItem("type")
    url = `http://numbersapi.com/random${type}?min=${MIN}&max=${MAX}&json&fragment`
    HTTP.open("GET", url)
    HTTP.send()
}

function showEmoji() {
    numberElement.innerHTML = ""
    var span = document.createElement("span")
    span.innerHTML = String.fromCodePoint(0x1F636)
    span.style.fontSize = "15rem"
    numberElement.appendChild(span)
}

function controlFontSize() {
    if (number > 1000) {
        numberElement.style.fontSize = '12rem'
    }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.to == id) {
        
        if (message.title == "blankPageChanged") {
            blankPage = message.msg
            selectPage()
        }
    }
})


var shareButtonCollection = document.getElementsByClassName('share-button')

for (let img of shareButtonCollection) {
    console.log(img)
    img.addEventListener('click', function(event) {
        console.log(event)
        window.open(shareURL[event.srcElement.id])
    })
}