
import {React , useContext, useState} from "react"
import {DataContext} from '../test/contextReact'


const Child1 = ()=>{
    const details = useContext(DataContext)
    const [value , setValue] = useState(details)
return(
        <div>
            <button >click</button>
            <div>{value.child1.name} - {value.child1.lName}</div> 
        </div>
)
}
export default Child1