import { signInWithPopup } from "firebase/auth";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../service/firebase";

function Google() {
  const handleclick = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  };
  return (
    <div style={{marginLeft:"20%",marginTop:"15%"}}>
      <GoogleButton onClick={handleclick} />
    </div>
  );
}

export default Google;
