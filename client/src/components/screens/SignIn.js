import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <form className='formstyle'>
                <input
                type="text"
                placeholder="Phone number,username, or email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </form>
            <form className='formstyle'>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPasword(e.target.value)}
                    />
            </form>
            <button className="btn"
            onClick={()=>PostData()}
            >
                Log in
            </button>
            <h6 >---------------     OR      ---------------</h6>
            <div>
                <h6  classname="forcolor">
                    <Link to="/reset">Log in with Facebook</Link>
                </h6>
                <h6  classname="forcolor">
                    <Link to="/reset">Forgot password?</Link>
                </h6>
            </div>
        </div>
        <div className="card2">
            <h6>
                <Link to="/signup">Don't have an account ? Sign Up</Link>
            </h6>
        </div>
        <div className="getapp">
            <h5>Get the app</h5>
            <div className="row">
                <div class="column">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                     alt="AppStore" width="150" 
                     height="40"/>
                </div>
                <div class="column">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" 
                    alt="GooglePlay"  width="150" 
                    height="40"/>
                </div>
            </div>
        </div>
      </div>
   )
}


export default SignIn