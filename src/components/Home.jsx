import "./Home.css";

function Home() {
   return (
      <div>
         {/* Navbar */}
         <nav className="navbar">
            <h2>MyWebsite</h2>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Contact</li>
            </ul>
            <button>Login</button>
         </nav>

         {/* Hero Section */}
         <section className="hero">
            <div className="hero-text">
               <h1>Welcome to My Website</h1>
               <p>
                  Build modern web applications with React and Node.js.
               </p>
               <button>Get Started</button>
            </div>

            <div className="hero-image">
               <img
                  src="https://via.placeholder.com/400"
                  alt="hero"
               />
            </div>
         </section>

         {/* Features */}
         <section className="features">
            <div className="card">
               <h3>Fast</h3>
               <p>High speed and optimized performance.</p>
            </div>

            <div className="card">
               <h3>Secure</h3>
               <p>Protected with modern authentication.</p>
            </div>

            <div className="card">
               <h3>Responsive</h3>
               <p>Works on mobile, tablet, and desktop.</p>
            </div>
         </section>

         {/* Footer */}
         <footer className="footer">
            <p>© 2026 MyWebsite. All rights reserved.</p>
         </footer>
      </div>
   );
}

export default Home;