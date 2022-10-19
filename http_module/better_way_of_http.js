const {request, get} = require('https');

const req = request('https://www.google.com', (res) => {
    //event emitter
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    })
    res.on('end', ()=>{
        console.log('No more Data');
    })
})

// get same as request
const req2 = get('https://www.google.com', (res) => {
    //event emitter
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    })
    res.on('end', ()=>{
        console.log('No more Data');
    })
})

req.end();  // o/p same as http but is now encrypted data, since https provide security

req2.end()