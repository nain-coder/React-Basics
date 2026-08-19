// import ReactDom from 'react-dom'
// export default function Other (){
//      return ReactDom.createPortal(
//         <h1>Hello</h1>,
//         document.getElementById('other-root')
//      )
// }

import ReactDOM from "react-dom";

export default function OtherRoot() {
  return ReactDOM.createPortal(
    <h1>Hello</h1>,
    document.getElementById("other-root"),
  );
}
