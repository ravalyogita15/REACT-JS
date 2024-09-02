
import { signInWithPopup } from "firebase/auth";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../service/firebase";
import "../App.css"; // or import the separate CSS file

function Google() {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="google-container">
      <GoogleButton className="google-button" onClick={handleClick} />
    </div>
  );
}

export default Google;
