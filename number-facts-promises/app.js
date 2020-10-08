let url = 'http://numbersapi.com'
const body = document.querySelector('body');
const firstList = document.querySelector('ul.exercise-one')
const secondList = document.querySelector('ul.exercise-two')
const thirdList = document.querySelector('ul.exercise-three')


function generateHTML(value) {
  return `<li>${value}</li>`
}

function addInnerHTML(listEl, value) {
  return listEl.innerHTML = generateHTML(value)
}

/**
 * Make a request to the Numbers [API](http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.  
 * */ 
function getData(favNumber = 5, listEl) {
  let response = axios.get(`${url}/${favNumber}?json`)
  response.then(
    res => listEl.innerHTML = generateHTML(res.data.text))
}



/**
 * Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.  
 */
function getMultipleNumbers(favNumbers = [1,5,9], listEl) {
  let listOfResponses = []
  let response = axios.get(`${url}/${favNumbers}?json`)
  response.then(
    res => {
      for (const [key, value] of Object.entries(res.data)) {
        listOfResponses.push(generateHTML(value))
        listEl.innerHTML = listOfResponses.join('\n\n')
      }
    }
  )
  
}




/**
 * Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats. 
 */

function get4FactsonNumber(favNumber = 3, listEl) {
   let listItems = []
   let response = Promise.all(
     Array.from({length:4 }, () => axios.get(`${url}/${favNumber}?json`))
   );
   response.then(
     data => {
      for (let res of data) {
        listItems.push(generateHTML(res.data.text))
        listEl.innerHTML = listItems.join('\n\n')
      }
     }
   )
   .then(
     data => console.log('end')
   )
  

 }

 getData(6, firstList)
 getMultipleNumbers([6,7,8], secondList)
 get4FactsonNumber(4, thirdList)