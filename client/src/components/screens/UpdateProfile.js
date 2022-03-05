import React, { useState, useContext } from "react";
import "./UpdateProfile.css";
import { UserContext } from "../../App";

const UpdateProfile = () => {

    const { state, dispatch } = useContext(UserContext);
    const [name,setName] = useState("")
    const [bio,setBio] = useState("");

    return (
        <form className='update-form' action='/profile'>
            <label for="profile-name">
                New User Name
                <input
                id = "profile-name"
                type="text"
                name = "profile-name"
                maxLength="15"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>
            </label>
            <label for="bio">
                New Bio
                <input
                id = "bio"
                type="text"
                name = "bio"
                value={bio}
                maxLength="100"
                onChange={(e)=>setBio(e.target.value)}
                ></input>
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default UpdateProfile;