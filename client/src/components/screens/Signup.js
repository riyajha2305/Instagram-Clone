import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const SignIn  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])
    const uploadPic = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","dqjgjdewi")
        fetch("https://api.cloudinary.com/v1_1/dqjgjdewi/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const uploadFields = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    const PostData = ()=>{
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
       
    }

   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <h6 className="welcometext">
            Sign up to see photos and videos from your friends.
            </h6>
            <button className="btn"
            onClick={()=>PostData()}
            >
                Log in with facebook
            </button>
            <h6 className="orline">--------------- OR ----------------</h6>
            
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
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
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
            <div className="file-field input-field">
            <div className="btnuploadphoto">
                <span>Upload picture</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Choose a picture from gallery"/>
            </div>
            </div>
            <button className="btn"
            onClick={()=>PostData()}
            >
                Sign UP
            </button>
            <div className="termncond">
                <h6 >By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h6>
            </div>
        </div>
        <div className="card2">
        <div className="rowcard2">
                <div class="columncard2">
                    <h6>
                    <Link to="/signin">Already have an account ?</Link>
                    </h6>
                </div>
                <div class="columncard2">
                    <h6>
                    <Link to="/signin"><h6 className="signbtn">Log In</h6></Link>
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