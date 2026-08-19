function HandleClick(event){
   console.log("Click");
   console.log(event);
}
function HandleMouseOver() {
  console.log("MouseOver");
}

function HandleDblClick(){
    console.log("I am clisck dbl")
}

export default function Button(){
    return (
      <>
        <button onClick={HandleClick}>Click me!</button>
        <p onMouseOver={HandleMouseOver}>Hello kiya hakll ha</p>
        <button onDoubleClick={HandleDblClick}>Click me double</button>
      </>
    );
}