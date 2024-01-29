import Header from "./Header";
import {useState, useRef} from "react";
import {checkValidData} from "../utils/validate";
function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate Form Data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        console.log(message);
        console.log(email.current.value);
        console.log(password.current.value)


    }
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

            <form
                className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded text-white bg-black bg-opacity-80'
                onSubmit={(e) => e.preventDefault()}
            >
                <h1 className="py-4 font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&  (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded"/>)}
                <input
                    className="p-4 my-4 w-full bg-gray-700 rounded"
                    type="email"
                    placeholder="Email Address"
                    ref={email}
                    />
                <input
                    className="p-4 my-4 w-full bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                    ref={password}
                    />

                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

                <button
                    className="p-4 my-6 w-full bg-red-700 rounded"
                    onClick={() => handleButtonClick()}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="p-4 my-4 cursor-pointer"
                    onClick={() => toggleSingInForm()}>
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In"}
                </p>
            </form>
        </div>
    );
}

export default Login;