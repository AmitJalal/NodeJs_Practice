const EventEmitter = require('events');
const racer = new EventEmitter();

// subscribe to racer for observer 1(supporter)
racer.on('race win', ()=>{
    console.log('Congo! You were great!!');
})

// on takes args -> 1st = which event, 2nd = callback fn

// subscribe to racer for observer 2(rival)
racer.on('race win', ()=>{
    console.log('Boo Icould have better than that!');
})


racer.emit('race win'); /* Congo! You were great!!
                           Boo Icould have better than that!*/

racer.emit('race lost')     // no o/p since there is no event regarding that                      