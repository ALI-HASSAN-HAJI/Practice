import React from "react";


const Greeting = () => {
 // 4am - 11: 59am, timeOfDay = "morning";
 // 12pm - 4: 59pm, timeOfDay = "afternoon";
 // 5pm - 7:59pm, timeOfDay = "evening";
 // 8pm - 3:59am, timeOfDat = "night"
 const duration = () => {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;
  if (hours >= 4 && hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 15) {
    timeOfDay = "afternoon"
  } else if (hours >= 15 && hours < 20) {
    timeOfDay = "evening"
  } else if(hours >= 20 && hours < 4) {
    timeOfDay = "night"
  }
    return timeOfDay;
 }
  duration();
  
  
  return (
    <h1>Good {duration()}</h1>
  )
}

export default Greeting;