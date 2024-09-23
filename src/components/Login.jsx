import React from 'react'
import './Login.css'

export default function Login() {
    const handleClick = () => {
        const clientId = "1ed5507e6d4b445f898791a674b2668e";
        const redirctUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = ["user-read-email", 
            "user-read-private", 
            "user-read-playback-state"
            , "user-modify-playback-state",
            "user-read-currently-playing","user-read-playback-position",
            "user-top-read",
            "user-read-recently-played"];
            window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirctUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    }
    return (
        <div className='login-container'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black-300x300.png" alt="" />
            <button onClick={handleClick}>Connect Spofity</button>
        </div>
    )
}


