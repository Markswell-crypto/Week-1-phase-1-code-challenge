// SPEEDING TICKET CALCULATOR
 // Takes the speed the user inputs in km/hr which is recieved using the document.getElementById() method
 // The speed is parsed as an integer value using parseInt() and given a variable called speed

 let speed;
  function speedCalculator(speed) {
  // Takes input values from user
    let points = 0;
//First if statememtchecks if the speed is less than 70 and then displays the results if condition is met.
    if (speed < 70) {
    console.log('Ok');
    } 
//1 point is recieved for every 5 km/h over the speed limit set as 70 km/h. If the points exceed 12 your License is suspended
    else {
     let ticketPoints = Math.floor((speed - 70) / 5);
      if (ticketPoints > 12) {
     return ('Your License Has Been suspended');
      } else {
     return (`TicketPoints: ${ticketPoints}`);
      }
    }
  }