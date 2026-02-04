import { forwardRef } from 'react';

import { User } from 'lucide-react'
import { Trash } from 'lucide-react';



const  Massage =forwardRef((props,ref)=> {
    const {ShowMassage,setShowMassage}=props

    const MassDelete =()=>{
        setShowMassage(null);
    }

  return (
   

     <div className="App-Massage" ref={ref}>

      <div className="massage-container">
 
         <div className="M-box" >
            <span id='M-delete' onClick={MassDelete} style={{cursor:'pointer'}}><Trash size={26} color="#ff0000" strokeWidth={0.75} /></span> 
          <span 
          style={{width:'40px',height:'30px',borderRadius:'10px',backgroundColor:' rgba(161, 223, 95, 0.888)',display:'flex',justifyContent:'center',alignItems:'center'}}
          ><User size={30} color="#be9219" strokeWidth={1.5} /></span>

          <h4 style={{color:'#be9219',fontSize:'17px'}}>From {ShowMassage[0].Name}</h4>
          <h6>Email: <span style={{color:'#0ea5e9',fontSize:'14px',fontWeight:'300px'}}>{ShowMassage[0].Email}</span></h6>
          <div className="M-area" style={{boxSizing:'border-box',overflowY: 'scroll'}}>
            {ShowMassage[0].Mass}
          </div>
        </div>
    
      </div>

     </div>
  
  );
})

export default Massage;