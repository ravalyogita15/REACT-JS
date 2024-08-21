import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Google from "./components/Google";

function App() {
  return (
    <>
      <Signup />
      <hr style={{ marginTop: "10%" }}></hr>
      <Login />
      <hr style={{ marginTop: "10%" }}></hr>
      <Google />
    </>
  );
}

export default App;
