
import {React , useContext} from "react"
import {DataContext} from '../test/contextReact'



const Child2 = ()=>{
    const details = useContext(DataContext)
    
    return(
     
        <div>{details.child2.name} - {details.child2.lName}</div> 
       
    )
}
export default Child2