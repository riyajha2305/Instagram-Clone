import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import "./UserProfile.css"
import ".Profile.css"
const Profile  = ()=>{
    const [userProfile,setProfile] = useState(null)
    
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    const [showfollow,setShowFollow] = useState(state?!state.following.includes(userid):true)
    useEffect(()=>{
       fetch(`/user/${userid}`,{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           //console.log(result)
         
            setProfile(result)
       })
    },[])


    const followUser = ()=>{
        fetch('/follow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
        
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
             localStorage.setItem("user",JSON.stringify(data))
             setProfile((prevState)=>{
                 return {
                     ...prevState,
                     user:{
                         ...prevState.user,
                         followers:[...prevState.user.followers,data._id]
                        }
                 }
             })
             setShowFollow(false)
        })
    }
    const unfollowUser = ()=>{
        fetch('/unfollow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                unfollowId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
             localStorage.setItem("user",JSON.stringify(data))
            
             setProfile((prevState)=>{
                const newFollower = prevState.user.followers.filter(item=>item != data._id )
                 return {
                     ...prevState,
                     user:{
                         ...prevState.user,
                         followers:newFollower
                        }
                 };
        });
        setShowFollow(true);
      });
  };
  return (
    <>
      {userProfile ? (
        <div className="profile">
          <div className="main">
            <div className="top-container">
              <div>
                <img className="profile-pic" src={userProfile.user.pic} />
              </div>
              <div className="info">
                <div className="profile-name">
                  <h4 className="top-line">{userProfile.user.name}</h4>

                  {showfollow ? (
                    <button
                      className="btn user-follow"
                      onClick={() => followUser()}
                    >
                        Follow
                    </button>
                    : 
                    <button className="btn user-unfollow"
                    onClick={()=>unfollowUser()}
                    >
                        UnFollow
                    </button>
                    }
                   
                  

               </div>
           </div>
     
           <div className="gallery">
               {
                   userProfile.posts.map(item=>{
                       return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                       )
                   })
               }

           
           </div>
       </div>
       
       
       : <h2>loading...!</h2>}
       
       </>
   )
}


export default Profile
