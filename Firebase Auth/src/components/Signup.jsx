import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebase";
import { useState } from "react";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => err);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form action="" onSubmit={handlesubmit}>
        <input
          onChange={(e) => setemail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input type="submit" value="signup" />
      </form>
    </div>
  );
};

export default Signup;
