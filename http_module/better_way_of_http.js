const {request, get} = require('https');

// get does same thing as request request
get('https://www.google.com', (res) => {
    //event emitter
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    })
    res.on('end', ()=>{
        console.log('No more Data');
    })
}) 
// *** no need to use end() when using get


// const req = request('https://www.google.com', (res) => {
//     //event emitter
//     res.on('data', (chunk) => {
//         console.log(`Data Chunk: ${chunk}`);
//     })
//     res.on('end', ()=>{
//         console.log('No more Data');
//     })
// })



// req.end();  // o/p same as http but is now encrypted data, since https provide security

