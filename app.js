// GLOBAL CONSTANTS
const api_key = "3NdWmu4yjtFddAHoAfUWUKeWwGoc9jWG"
const limit = 9
const rating = "g"
const lang = "en"
const pages = 0
const offset = 0;
var value = ""

// QUERY SELECTORS
const form = document.querySelector("#form")
const searchBar = document.querySelector("#search-bar")
const userInput = document.querySelector("#user-input")
const submit = document.querySelector("#submit")
const gifResults = document.querySelector("#gif-results")
const loadMore = document.querySelector("#load-more")

async function getResults(val) {
    const offset = pages*limit
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${MY_API_KEY}&q=${val}$&limit=${offset}`)
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    displayResults(data)
    if (pages == 1) {
        // loadMore.classList.remove("hidden")
        loadMore.classList.toggle("hidden", false)
    }
}
function displayResults(data) {
    gifResults.innerHTML=``
    data.forEach((gif) => {
        gifResults.innerHTML += `
            <div class ="gif"> 
            <img src=${gif.images.original.url}/>
            </div>
        `
    })
}

// handle form submit
form.addEventListener('submit', (event) => {
    pages = 1;
    event.preventDefault();
    value = userInput.value 
    console.log(val)
    getResults(value)
})

// show more
loadMore.addEventListener('click', (event) => {
    pages++
    getResults(value)
})



