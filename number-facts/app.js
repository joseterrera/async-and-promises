let url = 'http://numbersapi.com'

async function getData(favNumber = 5) {
  let data = await axios.get(`${url}/${favNumber}`)
  console.log(data)
}

// getData(6)

async function getMultipleNumbers(favNumbers = [1,5,9]) {
  let data = await axios.get(`${url}/${favNumbers}?json`)
  console.log(data)
}

getMultipleNumbers([6,7,8])