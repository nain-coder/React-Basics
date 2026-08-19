import { useState,useEffect } from "react";



export default function Counter(){


   let [countx, setCountx] = useState(0);
   let [county, setCounty] = useState(0);

   let incCountx = () => {
    setCountx((currcount) => {
      return currcount + 1;
    });
    setCountx(function (curcount){
      return curcount + 1;
    });

   }

   let incCounty = () => {
     setCounty((currcount) => {
       return currcount + 1;
     });
     setCounty(function (curcount) {
       return curcount + 1;
     });
   };

   useEffect(
     function printSomeThing() {
       console.log("This is side effect");
     },
     [],
   );

    return (
      <>
        <h3>Counntx = {countx}</h3>
        <button onClick={incCountx}> increase count</button>

        <h3>Counntxy= {county}</h3>
        <button onClick={incCounty}> increase count</button>
      </>
    );
}