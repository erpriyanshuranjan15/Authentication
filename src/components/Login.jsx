import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
   const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async () => {
      try {
         const res = await axios.post(
            "http://localhost:3000/api/auth/login",
            { email, password }
         );

         localStorage.setItem("token", res.data.token);

         alert(res.data.message);

         // Redirect to home page
         navigate("/home");

      } catch (error) {
         console.log(error.response?.data || error.message);
      }
   };

   return (
      <div className="container">
         <div className="box">
            <h1>Login</h1>

            <input
               type="email"
               placeholder="Enter Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />

            <input
               type="password"
               placeholder="Enter Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
               Login
            </button>

            <p>
               Don’t have an account? <Link to="/">Register</Link>
            </p>
         </div>
      </div>
   );
}

export default Login;