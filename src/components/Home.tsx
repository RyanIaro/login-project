import { getAuth, signOut } from "firebase/auth";

export function Home():React.ReactElement {

  const auth = getAuth();


    return(
    <div className="App">
      <div className="Container">
        <div className="Row">
          <h1>You have been authentified</h1>
        </div>
        <div className="Row">
          <h1>This is the home page</h1>
        </div>
        <div className="Footer">
          <button onClick={() => signOut(auth)} >Log out</button>
        </div>
      </div>        
    </div>
    );
}