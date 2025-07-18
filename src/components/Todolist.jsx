import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Item from "./Item";

function Todolist() {
    let InputName = useRef(null);
    let InputDate = useRef(null);
    const [name, SetName] = useState([]);
    
    const submit = () => {
        
         let Value = InputDate.current.value;
         let Value2 = InputName.current.value;
        SetName([...name, {
            p1 : Value,
            p2 : Value2
        }]);
      
        InputDate.current.value = "";  
        InputName.current.value = "";   
    }

  //   const dlete = (id) => {
  //     console.log("delete");
  //     const updated = name.filter((todo) => todo.id !== id);

  //     SetName([updated]);
  // }

  return (
    <>
      <h1 className="text-center">Todo List</h1>
      <div className="main">
        
          <input
            type="text"
            class="form-control"
            placeholder="Item Name"
            id="input"
            ref={InputName}
          />
     

       
          <input
            type="date"
            class="form-control"
            placeholder="name@example.com"
            id="input"
            ref={InputDate}
          />
        

        <button type="button" class="btn btn-success" onClick={submit}>
          ADD
        </button>
        </div>
        <Item name = {name} ></Item>
    </>
  );
}

export default Todolist;
