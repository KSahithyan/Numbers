document.getElementById("type").value = localStorage.getItem('type')
document.getElementById("blank-page").checked = localStorage.getItem('blankPage') == "true"

document.getElementById("type").addEventListener('change', function(event) {
    let type = event.srcElement.value
    localStorage.setItem("type", type)
})

document.getElementById("blank-page").addEventListener('change', function (event) {
    let obj = {
        to: "background",
        title: "blankPageChanged",
        msg: event.srcElement.checked
    }
    chrome.runtime.sendMessage(obj)
    localStorage.setItem('blankPage', obj.msg)
})