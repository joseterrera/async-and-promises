let url = 'http://numbersapi.com'

async function getData(favNumber = 5) {
  let data = await axios.get(`${url}/${favNumber}`)
  console.log(data)
}

getData()