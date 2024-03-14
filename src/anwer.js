// worker.js
onmessage = function (event) {
    console.log('Received message from the main thread:', event.data);
  
    let sum = 0;
    for ( let i = 0; i < 5000000000; i++){
      sum += i;
    }
    postMessage(sum);
  
   
};