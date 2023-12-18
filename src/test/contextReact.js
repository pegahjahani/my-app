import {React, useState , createContext} from "react"
import Child1 from "../children/child1";
import Child2 from "../children/child2";

export const DataContext = createContext()
  const Test = ()=>{
    
 const [data , setData] = useState(
    {
                    child1: {
                      name: "pegah",
                      lName: "jahani"
                    },
                    child2: {
                        name: "neda",
                        lName: "jahani"
                      }
                  }

)
  console.log(data);
return(
    
 <DataContext.Provider value={data}>
 <h3>use context example component</h3>
<hr/>
 <Child1/> 
<hr/>
 <Child2/>
</DataContext.Provider> 
)
}
export default Test