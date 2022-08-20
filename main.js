// let locol = localStorage.getItem("name")

// if(!locol) {
//     const namr = prompt("ism")
//     localStorage.setItem("name" , namr) 
//     locol = namr
// }
// console.log(locol + " xush kel");4


const fromElement = document.querySelector(".form")
const nametodoElement = document.querySelector(".todo-name")
const tbodyElement = document.querySelector("#tbody")
const ageElement = document.querySelector(".age_input")
const selectElement = document.querySelector(".select")





const data = JSON.parse(localStorage.getItem("data")) || []
render(data)


fromElement.addEventListener("submit", event => {
    event.preventDefault()
    console.log(nametodoElement.value);
    if (nametodoElement.value.length > 0) {
        data.push({
            name: nametodoElement.value,
            isDone: false
        })
        render(data)
    }
})

function render(array) {
    localStorage.setItem("data" , JSON.stringify(array))

    tbodyElement.textContent = ""
    for (let item in array) {
        console.log(item);
        const newtrElement = document.createElement("tr")
        if(data[item] ["isDone"]) {
            newtrElement.classList.add("table-success")
        }   

        const newtdElement = document.createElement("td")
        newtdElement.textContent = data[item]["name"]
        const newtdElement1 = document.createElement("td")
        const newDoneElement = document.createElement("button")
        const newDeleteElement = document.createElement("button")


        newDoneElement.classList.add("btn", "btn-success")

        newDoneElement.textContent = "Done"

        newDeleteElement.classList.add("btn", "btn-danger")
        newDeleteElement.textContent = "Delete"

        newDeleteElement.addEventListener("click", event => {
            data.splice(item, 1)
            render(data)
        })
        newDoneElement.addEventListener("click", event => {
            data[item]["isDone"] = true
            render(data)
        })


        newtdElement1.appendChild(newDoneElement)
        newtdElement1.appendChild(newDeleteElement)

        newtrElement.appendChild(newtdElement)
        newtrElement.appendChild(newtdElement1)

        tbodyElement.appendChild(newtrElement)
    }
}

