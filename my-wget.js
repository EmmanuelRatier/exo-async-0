const axios = require('axios')
const fsPromises = require('fs/promises')

const myWget = async () => {
  try {
    let url = process.argv[2]
    let res = await axios.get(url)
    await fsPromises.writeFile('index.html', res.data)
    console.log(res.headers)
  } catch (error) {
    console.log(error.message)
  }
}
myWget()