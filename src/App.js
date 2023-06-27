import React, {useState} from "react";
import './App.css';

function App() {
  const [mouseCordinates, setMouseCordinates] = useState([])

  const handleMouseClick = (e)=>{
    //x & y co-ordinate
    console.log("e",e)
    const {clientX, clientY} = e
    //prevState
    //maintain the preveious clicked co-ordinates as well as new co-ordiantes
    // setMouseCordinates([...mouseCordinates,{x:clientX, y:clientY}])

    setMouseCordinates((prevState)=>{
      const newCordinates = [...prevState]
      newCordinates.push({x:clientX, y:clientY})
      return newCordinates
    })


  }

  const handleUndo = ()=>{
    //remove last element from array
    const localCordinates = [...mouseCordinates]
    localCordinates.pop()
    console.log("mouseCordinates",mouseCordinates)
    setMouseCordinates(localCordinates)
  }

  console.log("mouseCordinates",mouseCordinates)
  return (
    <React.Fragment>
         <button onClick={handleUndo}>
          Undo
        </button>
        <button>
          Redo
        </button>
   
    <div className="App" onClick={handleMouseClick}>
      <div className="action-buttons">
        {/* <button>
          Undo
        </button>
        <button>
          Redo
        </button> */}
      </div>
   {/* <h1>Hello react</h1> */}
  {
    mouseCordinates.length>0  && mouseCordinates.map((item,index)=><div style={{left:item.x-10 , top: item.y-10}} key={index} className="cordinate">{index + 1}</div>)
  }
  
    </div>
    </React.Fragment>
  );
}

export default App;
