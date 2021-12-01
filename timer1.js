  let input = process.argv.slice(2); 

  const timer = function (input) {
  //iterates over array
    input.forEach((time) => {
      // checking for edge cases
      if (time === " " || time <= 0 || isNaN(time)) {
        
        return null;
      }
      setTimeout(() => {
         process.stdout.write("beep\n");
      }, time * 1000);
    });
  }

timer(input);
  