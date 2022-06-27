// GLOBAL CONSTANTS
const api_key = "3NdWmu4yjtFddAHoAfUWUKeWwGoc9jWG"
const limit = 9
const rating = "g"
const lang = "en"
var pages = 0
var offset = 0;
var val = ""

// QUERY SELECTORS
const form = document.querySelector("#form")
const userInput = document.querySelector("#user-input")
const gifResults = document.querySelector("#gif-results")
const loadMore = document.querySelector("#load-more")

async function getResults(val) {
    offset = pages*limit
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${val}$&limit=${offset}`)
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    displayResults(data)
    if (pages == 1) {
        loadMore.classList.remove("hidden")
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
    val = userInput.value 
    getResults(val)
})

// show more
loadMore.addEventListener('click', (event) => {
    pages++
    getResults(val)
})



