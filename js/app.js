// Main Variables
var number

// Other Variables
const HTTP = new XMLHttpRequest()
// const url = `http://numbersapi.com/${number}/trivia?notfound=floor`
const url = "http://numbersapi.com/random/trivia"

const numberElement = document.getElementById('number-head')
const descriptionElement = document.getElementById('number-description')

HTTP.open("GET", url);
HTTP.send()

HTTP.onreadystatechange = (e) => {
    number = HTTP.responseText.split(' ')[0]
    controlFontSize()    
    numberElement.innerHTML = number
    descriptionElement.innerHTML = HTTP.responseText || "Nothing to Tell"
}

function controlFontSize() {
    if (document.body.offsetHeight > 500) return false;
    if (number > 1000) {
        numberElement.style.fontSize = '8em'

        if (number > 100000) document.location.reload()
    }
}