let url = 'http://numbersapi.com'
const body = document.querySelector('body');
const firstList = document.querySelector('ul.exercise-one')
const secondList = document.querySelector('ul.exercise-two')
const thirdList = document.querySelector('ul.exercise-three')


function generateHTML(value) {
  return `<li>${value}</li>`
}

/**
 * Make a request to the Numbers [API](http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.  
 * */ 
async function getData(favNumber = 5, listEl) {
  let response = await axios.get(`${url}/${favNumber}?json`)
  listEl.innerHTML = generateHTML(response.data.text)
}



/**
 * Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.  
 */
async function getMultipleNumbers(favNumbers = [1,5,9], listEl) {
  let listOfResponses = []
  let response = await axios.get(`${url}/${favNumbers}?json`)
  for (const [key, value] of Object.entries(response.data)) {
    listOfResponses.push(generateHTML(value))
    listEl.innerHTML = listOfResponses.join('\n\n')
  }
}




/**
 * Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats. 
 */

 async function get4FactsonNumber(favNumber = 3, listEl) {
   let listItems = []
   let response = await Promise.all(
     Array.from({length:4 }, () => axios.get(`${url}/${favNumber}?json`))
   );
  for (let res of response) {
    listItems.push(generateHTML(res.data.text))
    listEl.innerHTML = listItems.join('\n\n')
  }

 }

 getData(6, firstList)
 getMultipleNumbers([6,7,8], secondList)
 get4FactsonNumber(4, thirdList)