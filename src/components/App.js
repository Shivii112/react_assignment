import react from "react";

function App() {

   const clickA = () => {
    document.write("button clicked");
  }

  return (
   <>
     <button id="button-a" onClick={clickA}>click</button>
   </>
  );
}

export default App;
