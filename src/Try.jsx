import { useEffect, useRef, useState } from "react";


export const Try  = () => {
    const setValuer = (val) => {
        setVal(val)
    };

    const [val, setVal] = useState(0);

    

    const ProgressBar = ({width}) => {
        return(
        <div className="" style={{position:'realtive', backgroundColor:'gray', height:'40px', width:'100%', margin:'15px 0px', borderRadius:'7px'}}>
            <div className="" style={{position:'realtive', backgroundColor:'blue', height:'40px', width:`${width}%`, margin:'15px 0px', borderRadius:'7px'}}>
            </div>
        </div>
        );
    }
  
    return (
      <>
        <div className="App">
          <h1>Progress bar</h1>
          <ProgressBar width={val}/>
          <form>
            <label>Input Percentage:</label>
            <input type="number" onChange={e => setValuer(parseInt(e.currentTarget.value))} />
          </form>
        </div>
      </>
    );
  }