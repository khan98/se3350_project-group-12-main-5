import React, { useState, useEffect } from 'react'
import './Scoreboard.css'

const Scoreboard = () =>{
  let lives = 3;
  let winOrLose = true; //this will differ depending on the algorithm
  
  //variables to record time
  var start, end; 
  if(!winOrLose){
     lives -= 1;
  }
  if(lives == 0){ //restart the game if the user 
    location.reload();
  }
  
  return(
    <div clasName = 'scoreboard'> 
      <h1>Level:  Time:  Lives:</h1>  
    </div>
  )
}
export default Scoreboard
