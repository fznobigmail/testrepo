import React, {FC, useState} from "react";
import {useDrag} from "react-dnd";
import {useDrop} from "react-dnd";
const Test:FC = () =>{
    const food=[
        {
            key:" 1",
            title:"piza",
            price: 50,
            emoji: "🍕"

        },
        {
            key:" 1",
            title:"cheeze",
            price: 20,
            emoji: "🧀"

        },
        {
            key:" 1",
            title:"cake",
            price: 30,
            emoji: "🍰"

        },
    ]
    const [foods, setFoods]  = useState<any[]>(food)

    const [,drag]= useDrag(()=>({
        type:"widget",
        item:food,
    }))

    // const []= useDrop


return(
    <div style={{display:"flex"}}>

      <ul >
          this is draggable Box
          {food.map((item,key) =>
              <li key={key} ref={drag}>{item.title}-{item.emoji}:${item.price}</li>
          )
          }
      </ul>
        <div  style={{border:" 5px solid red"}} >this is droppable box</div>
    </div>
)
}
export default Test