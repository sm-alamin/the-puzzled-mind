import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const { signIn } = useContext(AuthContext);


  // Custom Login
  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
          console.log(error.message)
        })
    
}
  return (
    <div className="min-h-screen flex items-center justify-around gap-20 bg-[#e8eaec] py-12 px-4 sm:px-6 lg:px-8">
      <div className='w-2/3 bg-register h-screen flex justify-center items-center'>
            <img src="/public/puzzled.png" alt="" />
      </div>
      <div className="max-w-md w-full space-y-8 shadow-custom px-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm field-input"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm field-input field-input"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-slate-200 group-hover:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4v-.667A2.333 2.333 0 0010.667 1h-1.334A2.333 2.333 0 007.667 3.333V4H6a2 2 0 00-2 2v8c0 1.103.897 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2h-1.333zm-4.667 0V3.333c0-.368.298-.666.666-.666h1.334c.368 0 .666.298.666.666V4H7.333zm3.333 9h-2.666a.333.333 0 00-.334.333v.667c0 .184.15.333.334.333h2.666c.184 0 .334-.149.334-.333v-.667a.333.333 0 00-.334-.333zm-2.666-2.333a.667.667 0 010-1.334h2.666a.667.667 0 010 1.334h-2.666zm2.666-3.334H8a.667.667 0 010-1.333h2.666a.667.667 0 010 1.333z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Login
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="border-b border-gray-300 w-1/4"></span>
            <span className="text-gray-500 mx-2">Need an account?{" "}</span>
            <span className="border-b border-gray-300 w-1/4"></span>
          </div>
          
          <div className="flex justify-center mt-6">
            <p className="text-gray-600">
            <a href="#" className="text-blue-500 hover:text-blue-700">
                Register
              </a>
             
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
