import React from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";



export const App = () => {
    const [person]=data;
    const {name,age,phone}=person;
    return<>
    <div>hello world!</div>
    {/* <CardItem name={person.name} age={person.age} phone={person.phone}/> */}
    {/* <CardItem name={name} age={age} phone={phone}/> */}
    {/* <CardItem {...person}/>
    {[<CardItem {...person}/>,<CardItem {...person}/>,<CardItem {...person}/>]} */}
    {/* {data.map((person)=>{
        return<CardItem{...person}/>; */}
    {data.map((person)=><CardItem{...person}/>)}
    </>
};