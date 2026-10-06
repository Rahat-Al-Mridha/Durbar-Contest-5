function simulateTicketQueue(commands) {
  const queue = [];
  const served = [];

  for (const command of commands) {
    if (command.startsWith("join ")) {
      const name = command.slice(5);

      // Add only if the person is not already waiting
      if (!queue.includes(name)) {
        queue.push(name);
      }
    } 
    
    else if (command.startsWith("leave ")) {
      const name = command.slice(6);

      // Remove the person from the queue
      const index = queue.indexOf(name);

      if (index !== -1) {
        queue.splice(index, 1);
      }
    } 
    
    else if (command === "serve") {
      // Serve the person at the front
      if (queue.length > 0) {
        const person = queue.shift();
        served.push(person);
      }
    }
  }

  return {
    queue: queue,
    served: served
  };
}

console.log(simulateTicketQueue(["join Rafi","join Sara","serve","join Alex","leave Sara","serve"]))
console.log(simulateTicketQueue(["serve","join Bob","join Bob","leave Alice","join Alice","serve"]))