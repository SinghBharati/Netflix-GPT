import Header from "./Header";
import {useState} from "react";

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSingInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
                     alt="backgroung"/>
            </div>

            <form className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded text-white bg-black bg-opacity-80'>
                <h1 className="py-4 font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&  (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded"/>)}
                <input type="email" placeholder="Email" className="p-4 my-4 w-full bg-gray-700 rounded"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded"/>
                <button className="p-4 my-6 w-full bg-red-700 rounded">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 my-4 cursor-pointer" onClick={() => toggleSingInForm()}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In"}</p>
            </form>
        </div>
    );
}

export default Login;