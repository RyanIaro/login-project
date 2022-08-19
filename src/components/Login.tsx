import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export function Login():React.ReactElement {
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();

    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState<boolean>(false);

    const signInWithGoole = async () => {
      setAuthing(true);

      signInWithPopup(auth, new GoogleAuthProvider())
      .then(response => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        setAuthing(false);
      });
    };

    const signIn = async () => {
      setAuthing(true);

      if(email !== undefined && password !== undefined) {
        signInWithEmailAndPassword(auth, email, password)
        .then(response => {
          console.log(response.user.uid);
          navigate('/');
        })
        .catch(error => {
          console.log(error);
          setAuthing(false);
        });
      }
    }

  return (
    <div className="App">
      <div className="Container">
        <div className="Header">
          <h1>Login</h1>
        </div>
        <div className="Row">
          <label>Email</label>
          <input type="text" placeholder="My Email" onChange={(e:any)=>{
            setEmail(e.target.value)
          }} value={email}/>
        </div>
        <div className="Row">
          <label>Password</label>
          <input type='password' placeholder="My Password" onChange={(e:any)=>{
            setPassword(e.target.value)
          }} value={password}/>
        </div>
        <div className="Footer">
          <button type="reset" onClick={() => {
            setEmail("");
            setPassword("");
            }}>Reset</button>
          <button onClick={() => signIn()} disabled={authing}>Log in</button>
          <button onClick={() => signInWithGoole()} disabled={authing}>Log in with Google</button>
        </div>
      </div>
    </div>
  );
}