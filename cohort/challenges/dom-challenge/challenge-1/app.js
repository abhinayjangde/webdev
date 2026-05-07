
const toggleButton = document.querySelector("#toggleButton")
const status = document.getElementById("status")
const bulb = document.getElementById("bulb")


let bulbStatus = false

toggleButton.addEventListener("click", function () {
    if (bulbStatus) {
        document.body.style.background = '#ffffff'
        document.body.style.color = '#000000'
        bulbStatus = false
        toggleButton.textContent = "Turn On"
        status.textContent = "Status: Off"
        bulb.classList.toggle("off")
        
    }
    else {
        document.body.style.color = '#ffffff'
        document.body.style.background = '#000000'
        bulbStatus = true
        toggleButton.textContent = "Turn Off"
        status.textContent = "Status: On"
        bulb.classList.toggle("off")
        bulb.style.boxShadow = '0 0 50px rgba(241, 196, 15, 0.8)'
    }
})