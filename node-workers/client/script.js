const http = require('http')
const nRequests = 32
let missing = nRequests

const start = new Date()

for (let i = 1; i <= nRequests; i++)
  http.get('http://localhost:8081', (res) => {
    let data = ''
    res.on('data', (chunk) => data += chunk)
    res.on('end', () => {
      console.log(data)
      missing--
      if (missing === 0)
        console.log(`${nRequests} requests em ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
    })
  })

console.log('End script')