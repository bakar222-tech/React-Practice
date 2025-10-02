 import React, { useEffect, useState } from "react";
 
 
 function Clock({ color }){
const [time, setTime] = useState(0);

useEffect(()=>{
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000)
},[])
    return(
        
        <div>
            <h1 style={{color:color}}>Clock Component</h1>
            <p>This is a simple clock component.</p>
                        <div style={{
                            display: 'inline-block',
                            background: '#fff',
                            border: `2px solid ${color}`,
                            borderRadius: '8px',
                            padding: '12px 24px',
                            marginTop: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                        }}>
                            <h3 style={{
                                color: color,
                                margin: 0,
                                fontWeight: 700,
                                fontSize: '1.7em',
                                letterSpacing: '2px',
                                textAlign: 'center'
                            }}>{time}</h3>
                        </div>


        </div>
    )
}
export default Clock;