import "./Cell.css"
import React,{useContext} from "react"
import {CellContent} from "./CellContainer"
export default function Cell(){
    const {CellClass,updateCell}=useContext(CellContent)
    //use context to share the public data
    function clickCell(x){
        let pre= CellClass.Cells
        if (pre[x] === "cell") {
            pre[x] = "cell select";
          } else {
            pre[x] = "cell";
          }
          updateCell("Cells",pre)
    }
    function showCells(){
        let cellitems=[]
        for(let i =0;i<4;i++){
            let item =<div className={CellClass.Cells[i]} onClick={()=>clickCell(i)} ></div>
            cellitems.push(item)
        }
        return cellitems;
    }
    return (
        <div className="CellShow">
        {showCells()}
        </div>
    )
}