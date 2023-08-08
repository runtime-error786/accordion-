import { Ai } from "./Api";
import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
let cou=0;
let f=0;

let Gi = ()=>{
    
    function Hi(e)
    {
        if(document.getElementById(e.target.id).innerHTML=='+')
        {
            let r = Ai.map((val,ind)=>{
                return val.id;
            }
            );
    
            for(let i=0;i<r.length;i++)
            {
                document.getElementById(i).innerHTML="+";
                document.getElementById('a'+i).style.display="none";
            }
            document.getElementById(e.target.id).innerHTML="-";
            document.getElementById('a'+e.target.id).style.display="block";
        }
        else{
            let r = Ai.map((val,ind)=>{
                return val.id;
            }
            );
    
            for(let i=0;i<r.length;i++)
            {
                document.getElementById(i).innerHTML="+";
                document.getElementById('a'+i).style.display="none";
            }
            document.getElementById(e.target.id).innerHTML="+";
            document.getElementById('a'+e.target.id).style.display="none";
        }
    }
    return(
        <>
           {
            Ai.map((value,index)=>{
                return(
                    <div className="all"> 
                        <button id={index} onClick={Hi} className="bb">+</button>
                        <h1 id={'q'+ index} className="qq">{value.ques}</h1>
                        <h1 id={'a'+ index} className="pp" style={{display:'none'}}>{value.ans}</h1>
                    </div>
                )
            })
           }
        </>
    )
}
function GH()
{
   
    return(
        <>
        <h1 className="hm">ACCORDION 🎚️</h1>
 <div className="pi">
        <Gi></Gi>
        </div>
        </>
       
    )
}

export {GH,Gi};