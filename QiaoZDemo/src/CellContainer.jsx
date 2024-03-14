import React,{ useState,createContext } from "react";
export const CellContent= createContext();

export default function CellContainer(props){

    const [CellClass,setCellClass]=useState({
        Cells:["cell","cell","cell","cell"]
    })

    const updateCell=(Field,newField)=>{
        setCellClass((preCell)=>({
            ...preCell,
            [Field]:newField
        }))
    }
    const getCount=()=>{

        let count =0;
        for (let str of CellClass.Cells) {
            if (str === "cell select") {
                count += 1
            }
        }
        return count;
       
    }
  
    return (
        <>
          <div>
             Count : {getCount()}
        </div>
         <CellContent.Provider value={{CellClass,updateCell}}>
         {props.children}
        </CellContent.Provider>
        </>
    )
}