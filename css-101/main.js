const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit');

const allUsersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || []

submitButton.addEventListener("click", function () {
    allUsersFromLocalStorage.push({ name: name.value.trim(), email: email.value.trim(), password: password.value.trim() })
    localStorage.setItem("users", JSON.stringify(allUsersFromLocalStorage))
    name.value = ""
    email.value = ""
    password.value = ""
    renderUsers()

})

const userList = document.querySelector("#userList")

console.log(allUsersFromLocalStorage)

function renderUsers() {
    userList.innerHTML = ""
    allUsersFromLocalStorage.forEach((user) => {
        const liElement = document.createElement("li")
        liElement.textContent = user.name;
        userList.appendChild(liElement)
    })
}

renderUsers()
