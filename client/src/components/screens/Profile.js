import React,{useEffect, useState, useContext} from 'react'
import {UserContext} from '../../App'

 const Profile = ()=>{
     const [mypics,setPics] = useState([]);
     const {state,dispatch} = useContext(UserContext);

     useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization" : "Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
     },[])
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                        src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                    />
                </div>
                <div>
                    <h4>{state?state.name:"loading..."}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>30 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            
            </div>
            <div className='gallery'>
            {
                mypics.map(item=>{
                    return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Profile;