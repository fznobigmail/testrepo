import React, {FC, useState} from "react";
import {useDrag} from "react-dnd";
import {useDrop} from "react-dnd";
type foodType={
    key:number
    title:string
    price:number
    emoji:string
}
const Test:FC = () =>{
    const [foods, setFoods]  = useState<foodType[]>([])
    const food =[
        {
            key: 0,
            title:"piza",
            price: 50,
            emoji: "🍕"

        },
        {
            key: 1,
            title:"cheeze",
            price: 20,
            emoji: "🧀"

        },
        {
            key:2,
            title:"cake",
            price: 30,
            emoji: "🍰"

        },
    ]




    const [,drag]= useDrag<foodType[]>(()=>({
        type:"widget",
        item: food
    }
    ))


    const [,drop]= useDrop(()=>({
        accept:"widget",
        drop:((item:foodType,monitor)=> {
            console.log("item dropped:",item)
            setFoods([...foods,item])
            console.log(foods)
        })
    }))





return(
    <div style={{display:"flex"}}>

      <div  style={{border:" 5px solid green", width:"500px", height:"500px"}} >
          this is draggable Box
          {food.map((item:any,key) =>
              <div ref={drag} key={key} >{item.title}-{item.emoji}:${item.price}</div>
          )
          }
      </div>
        <div  ref={drop} style={{border:" 5px solid red", width:"500px", height:"500px"}} >
            <h1>this is droppable box</h1>
            {foods?.map((item)=>
                <div>{item.title}-{item.emoji}:${item.price}</div>
            )}
        </div>
    </div>
)
}
export default Test


// axios.get():
//
//
// type userType = {
//     name: string
// }
//
// type categoryType = {
//     title: string
// }
// const onClickTrigger = (myParam: string = 'xyz',name: string = 'reza', age: number = 97) => {
//
// }
//
// interface MyAPIResponseInterface<T = unknown>
// {
//     data: T
//     status: 'success' | 'failed'
// }
//
// let x: MyAPIResponseInterface<categoryType> = {
//     data: {
//         title: 'my category title'
//     },
//     status: 'success'
// }
//
// let y: MyAPIResponseInterface<userType> = {
//     data: {
//         name: 'as'
//     },
//     status: 'failed'
// }