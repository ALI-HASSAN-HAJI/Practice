import React from "react";


const TernaryPractice = () => {
    let isWeekend = true;
    if(isWeekend) {
        console.log("Party Time:!!!")
    } else {
        console.log('Work Time!!!!')
    }

     //Ternary Operator:
     let IsMonday = true;
     IsMonday ? console.log('Class Time OOOps:') : console.log("Party Time!!!");
    return(
        <div>
            <h1>Ternary Practice</h1>
          
           
        </div>
    )
}

export default TernaryPractice;