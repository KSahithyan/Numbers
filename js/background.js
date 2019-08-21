let id = "background"

chrome.runtime.onInstalled.addListener(function (reason) {
    if (reason == "install") {
        localStorage.setItem('type', '/trivia')
        localStorage.setItem('blankPage', false)
    }
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.to == id) {
        if (message.title == "blankPageChanged") {
            chrome.runtime.sendMessage({
                to: 'newtab',
                title: "blankPageChanged",
                msg: message.msg
            })
        }
    }
})