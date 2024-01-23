import { useEffect, useState } from "react";
import "./accordian.css";
import data from "./accordiandata.js";

const Accordian = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection (getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if(findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  }

  useEffect(() => {
    setSelected(null)
    setMultiple([])
  }, [enableMultiSelection])
  

  return (
    <div className="wrapper">
      <h1 className="project1">PROJECT 1 - ACCORDION</h1>
      <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)} className={enableMultiSelection ? "enableMulti" : "disableMulti"} >{enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={enableMultiSelection ? ()=> handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="sign">-</div> : <div className="sign">+</div> }
              </div>
              {
                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (<div className="answer">{dataItem.answer}</div>) : selected === dataItem.id && (<div className="answer">{dataItem.answer}</div>)
                // selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="answer">{dataItem.answer}</div> : null
              }
            </div>
          ))
        ) : (
          <div>Data not found !!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
