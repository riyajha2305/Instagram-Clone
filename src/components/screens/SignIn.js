import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
import "./FontStyles.css";
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
                placeholder="Email"
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
            <h6 className="orline">--------------- OR ---------------</h6>
            <div >
                <div className="rowcard1">
                <Link to="/reset">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7WZj///8mS5Hf4+3w8vcqTpM2VpcnTJLS1+X09vmzvNMzVJYvUZQeR4/j5u/K0OBEYJyOnL95irSHlrt0hrGossyfq8iNm75Sa6JbcqY+XJpvgq+YpcSstc6AkLdnfKzFy91NZ6DEy9wAPIsPQY2Bl4GkAAAEZUlEQVR4nO3dW3eiMBQFYIglQiEgVK127HXm///GoRentmtVNoZDOMzeT30pJ99aBiQ3o/gzWbmYR8rsRBUd/6iayJm5xEVN9U2YrkwezSm5WaWnwtrZ0E0aPNbVn8J1Ero5IknWR2E9T2BLrN+FqQvdErG49E24ml8fPMauXoWVCd0OwZiqFTbzekx8Td60wtCNEE4cZfO9z7zGZVE5527YdsQyWsxcuKBQeyjUHwr1h0L9oVB/KNQfCvWHQv2hUH8oDB2b58VJ8jy3tt8I/XSFtkhMcrdvbg/bzf39ZrPZHurbm4f14/45yhNjTJK04m7tNIW2MMvH7dOXueovybKrRfW0OTS7TuIUhYXbbRc/2b7lunNecHJCu7TbEuRpFFqzf8F5+oStL+3l0yYsoqeePmVCd9Pbp0poi74fUGXCYvfjs28ewveFLzMWLi/pgpqEycVAJcKiuRioQ5jvLweqENr8sruoHqG76DmoSFjUPkAFQnvnBVQgNFW3QrXQPvoBpy906GiFVmH+yxM4eaHfk0KB0O58gVMXJtdzFzqf72sahNb7PjN14QAf0okLzdXMhfbZHzhtoedbxYew6CoTUJj0GOEurw+/dqvX+dJvmfT8oUGnmLLtnUuKvnO//8oE/JSCwM2y8Nl5Fk5owQGo/dKvTjhh/oABO28lHQknLLYI8NZ7d2s4IfSNpvTfdRZQiIzQPPhvjQwnXCJvvwNsHAwnNMAQTeV5H32vE0wIfO/e+t5Io6kLh9ihPG1h95ouoM6khUMcFDBt4RAnIUxbOMCNZuLCIQ4koVAuFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBTqFzpAOMCgvrDQngkkPHcBi83siwqTboNngNk35cJ94NUm8kKgEbqFGdB03ULk6FXdwgp4YOoWdq9M1C48AJNTuoVrYBZctxCZBdctRFquWgidRK5aCLVctfAFeX9ULbxHVjKoFtazFz7O/g34efZCaEGRZuEVtL5WszCFGq5Z+AQNp2oWbmbfD2+gFcSahdDjULUQW1+rWYhtxlAsBH/FSbEwxWamFAuRoUTdQmQoUbcQ3NemWAjMrIkLi/RcAMTZ/7/DGiE7y708k9/ALPcfc+YCYBu4FkMuFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjXoVAsFFII16FQLBRSCNehUCwUUgjX+R+E4Ek2Q2c0YRlBJ7kOn7GELouQw+kFMpaw9Q3yy8n9M5Iwb1phFaQjjiQ0VSsc5KeT+5ceRWhX8aswDXGvGUfo0jdhXA/SpftlFGFSx+/CeD0+cQxhso6Pwrh2Y/dFeaF1dfwpjNOVGfehIS3MzerjsK3oeLmqiZwZL9hJWJfGRU11vEp0csWsXIyXrDsXX7vMTlR/AYn9VbN6VB0TAAAAAElFTkSuQmCC" 
                        alt="fb logo" width="26" height="26"/></Link>
                <Link to="/reset"><h6 className="textcolor1"> Log in with Facebook</h6></Link>
                </div>
                    
                <Link to="/reset"><h6 className="textcolor2">Forgot password?</h6></Link>
            </div>   
        </div>
        <div className="card2">
            <div className="rowcard2">
                <div class="columncard2">
                    <h6>
                    <Link to="/signup">Don't have an account ?</Link>
                    </h6>
                </div>
                <div class="columncard2">
                    <h6>
                    <Link to="/signup"><h6 className="signbtn">Sign Up</h6></Link>
                    </h6>
                </div>
            </div>
        </div>
        <div className="getapp">
            <h6>Get the app</h6>
            <div className="rowgetapp">
                <div class="columngetapp">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                     alt="AppStore" width="150" 
                     height="40"/>
                </div>
                <div class="columngetapp">
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