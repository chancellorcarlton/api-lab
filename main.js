const { default: axios } = require("axios")

let residentsBtn = document.querySelector('#get_resident')

let buttonClicked = () => {
    get.axios('clicked')
}

const getAlderaan = (event) => {
    console.log(`hit`)
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then (res => {
        // console.log(res.data.results[0].residents)
        for(let i = 0; i < res.data.results[0].residents.length; i++){
            axios.get(res.data.results[0].residents[i])
            .then (innerRes => {
                console.log(innerRes.data.name)
                let residents = document.createElement('h2')
                residents.textContent = innerRes.data.name
                let body = document.querySelector(`body`)
                body.appendChild(residents)
            })
        }
    })
}


document.querySelector('button').addEventListener("click", getAlderaan)

document.addEventListener('click', buttonClicked)