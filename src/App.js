import React from "react"

class App extends React.Component{ 
    constructor(){
        super();
        this.state={
            n:0
        }
    }
    add(){
        this.setState((state)=>{
            const n = state.n +1
            return {n}
        }) //监听   是异步任务 所以用函数的形式
    }
    render(){
        return (
        <div>
            <div>爸爸:{this.state.n}</div>
            <button onClick={()=>this.add()}>+1</button>
            <Son/>
        </div>
    )
    }
}
function Son (){
    const [n,setN] = React.useState(0)
    const [m,setM] = React.useState(0)
    return (
        <div><br/>
            儿子:{n}
            <button onClick={()=>setN(n+1)}>+1</button>
            <br/>
            儿子:{m}
            <button onClick={()=>setM(m+1)}>+1</button>
        </div>
    )
}
export default App