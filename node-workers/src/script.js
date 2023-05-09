import cluster from 'cluster'
import http from 'http'
import { cpus } from 'os'

import { generateArray, bubbleSort, quickSort } from './array'

const nCpus = cpus().length

const elapsedTime = (time) => ((new Date()).getTime() - time.getTime()) / 1000


// if (cluster.isMaster) {
//   for (let i = 0; i < nCpus; i++) {
//     const worker = cluster.fork()
//     worker.on('exit', (code, signal) => {
//       if (signal) {
//         console.log(`worker was killed by signal: ${signal}`);
//       } else if (code !== 0) {
//         console.log(`worker exited with error code: ${code}`);
//       } else {
//         console.log('worker success!');
//       }
//     });
//   }
// } else {
//   http.createServer((_, res) => {
//     const start = new Date()
//     bubbleSort(generateArray(10000))
//       .then(() => {
//         const msg = `Worker ${cluster.worker.id} - ${elapsedTime(start)} segundos`
//         res.writeHead(200).end(msg)
//       }).catch((err) => {
//         res.writeHead(200).end(err.message)
//       })
//   }).listen(8081, () => console.log('Listening in port 8081'))
// }




const start = new Date()
const length = 2000000

console.log('Starting...')

quickSort(generateArray(length)).then(result => {
  console.log(`1 - ${elapsedTime(start)} segundos`)
}).catch(err => console.log(err))

quickSort(generateArray(length)).then(result => {
  console.log(`2 - ${elapsedTime(start)} segundos`)
})

quickSort(generateArray(length)).then(result => {
  console.log(`3 - ${elapsedTime(start)} segundos`)
})

quickSort(generateArray(length)).then(result => {
  console.log(`4 - ${elapsedTime(start)} segundos`)
})

console.log('End script!')