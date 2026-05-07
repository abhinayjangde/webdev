import { useState } from "react";

export default function StateVariables(props){

    const [name, setName]= useState(props.name)

    return (
        <div>
            <p>Hello, {name}</p>
            <button onClick={()=>setName("Tony")} >Change Name</button>
        </div>
    )
}