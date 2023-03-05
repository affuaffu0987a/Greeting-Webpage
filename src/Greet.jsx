import React from "react";
function Greet() {
    let Dates = new Date();
    let GetHours = Dates.getHours()
    let greeting = ""
    let Colors = {}
    if (GetHours >= 1 && GetHours <= 12) {
        greeting = 'Good Morning';
        Colors.color = "green"
    }
    else if (GetHours >= 13 && GetHours <=17) {
        greeting = "Good Afternoon"
        Colors.color = "red"
    }
    else if (GetHours >= 18 && GetHours <= 20) {
        greeting = "Good Evening"
        Colors.color = "red"
    }
    else {
        greeting = "Good Night"
        Colors.color = "black"
    }
    return(
        <>
       <div className="head">
       <h1>Hello Sir:<span style={Colors}>{greeting}</span></h1>
       </div>
       </>
    )
}

export default Greet;