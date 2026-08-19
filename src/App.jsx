import './App.css'
// import Forms from './Fornms';
// import CommentFrom from './CommentForm';
import Counter from './Counter';
// import Joker from './Joker';
// import UseRef from './UseRef';
// import OtherRoot from './OtherRoot';
import { useState, useEffect } from "react";
import NavBar from './component/NavBar';
import { counterContext } from './context/context';


function App() {

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
          <counterContext.Provider value={{ countx, incCountx }}>
            <NavBar />

            <h3>Counntx = {countx}</h3>
            <button onClick={incCountx}> increase count</button>

            <h3>Counntxy= {county}</h3>
            <button onClick={incCounty}> increase count</button>
          </counterContext.Provider>
        </>
      );
}

export default App

// cd E:\delta-react\vite-project