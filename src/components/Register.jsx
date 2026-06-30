import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
   const navigate = useNavigate();

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const API_URL = import.meta.env.VITE_API_URL;

   const handleRegister = async () => {
      try {
         const res = await axios.post(
            `${API_URL}/api/auth/register`,
            { username, email, password }
         );

         alert(res.data.message);
         navigate("/login");

      } catch (error) {
         console.log(error.response?.data || error.message);
      }
   };

   return (
      <div className="container">
         <div className="box">
            <h1>Register</h1>

            <input
               type="text"
               placeholder="Enter Name"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />

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

            <button onClick={handleRegister}>
               Register
            </button>

            <p>
               Already have an account? <Link to="/login">Login</Link>
            </p>
         </div>
      </div>
   );
}

export default Register;