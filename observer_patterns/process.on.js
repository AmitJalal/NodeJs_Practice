const EventEmitter = require("events");
const racer = new EventEmitter();

// *** other way of doing the same thing

// subscribe to racer for observer 1(supporter)
racer.on("race", (result) => {
  if (result === "win") console.log("Congo! You were great!!");
});

// on takes args -> 1st = which event, 2nd = callback fn

// subscribe to racer for observer 2(rival)
racer.on("race", (result) => {
  if (result === "win") console.log("Boo Icould have better than that!");
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
}); // Process exit event with code:  0 -> 0 for success without errors

racer.emit("race", "win"); /* Congo! You were great!!
                           Boo Icould have better than that!*/

racer.emit("race", "lost"); // no o/p since there is no event regarding that
