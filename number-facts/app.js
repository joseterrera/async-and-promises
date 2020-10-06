let url = 'http://numbersapi.com'
const body = document.querySelector('body');
const ul = document.querySelector('ul')

function generateHTML(value) {
  return `<li>${value}</li>`
}

/**
 * Make a request to the Numbers [API](http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.  
 * */ 
async function getData(favNumber = 5) {
  let data = await axios.get(`${url}/${favNumber}?json`)
  console.log(data)
}
// getData(6)


/**
 * Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.  
 */

async function getMultipleNumbers(favNumbers = [1,5,9]) {
  let listOfResponses = []
  let response = await axios.get(`${url}/${favNumbers}?json`)
  for (const [key, value] of Object.entries(response.data)) {
    listOfResponses.push(generateHTML(value))
    ul.innerHTML = listOfResponses.join('\n\n')
  }
}

getMultipleNumbers([6,7,8])