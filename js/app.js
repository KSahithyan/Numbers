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
    number = parseInt(HTTP.responseText.split(' ')[0])
    // number = 100001
    controlFontSize()
    numberElement.innerHTML = number
    descriptionElement.innerHTML = HTTP.responseText
}

HTTP.onerror = (e) => {
    showEmoji()
    descriptionElement.innerHTML = "Something went wrong."
}

function showEmoji() {
    numberElement.innerHTML = ""
    var span = document.createElement("span")
    span.innerHTML = String.fromCodePoint(0x1F636)
    numberElement.appendChild(span)

}

function controlFontSize() {
    console.log(number)
    if (number > 1000) {
        numberElement.style.fontSize = '14em'
        console.log("1000 <")

        if (number > 100000) {
            console.log("100000 < ")
            document.location.reload()
        }
    }

    return 0;
}