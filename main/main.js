const { Worker } = require('worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  parentPort.postMessage(sum);
`, { eval: true });

worker.on('message', msg => console.log('Sum:', msg));

console.log('Worker started, waiting for result...');