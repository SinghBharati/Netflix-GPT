import Header from "./Header";
import {useState, useRef} from "react";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase";
import {addUser} from "../utils/userSlice";
import {useDispatch} from "react-redux";
import {BG_URL, USER_AVATAR} from "../utils/constants";
function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate Form Data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        // console.log(message);
        // console.log(email.current.value);
        // console.log(password.current.value)

        if(message) return;

        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });


        }else{
            // Sign In Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }


    }
    const toggleSingInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    className="w-screen h-screen object-cover fixed"
                    src={BG_URL}
                     alt="backgroung"
                />
            </div>

            <form
                className='absolute w-full md:w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded text-white bg-black bg-opacity-80'
                onSubmit={(e) => e.preventDefault()}
            >
                <h1 className="py-4 font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&  (<input className="p-4 my-4 w-full bg-gray-700 rounded" type="text" placeholder="Full Name" ref={name}/>)}
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