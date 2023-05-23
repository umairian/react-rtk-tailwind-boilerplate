import { useReducer, useState } from 'react';
import bgSrc from '../../assets/Container.png'
import illustrationSrc from '../../assets/Illustration.png'
import FormButton from '../../components/FormButton';
import LabeledInput from '../../components/LabeledInput';
import { BASE_URL } from '../../../config';
import ErrorContainer from '../../components/ErrorContainer';
import { useNavigate } from 'react-router';

const initialState = {
    email: '',
    password: '',
    error: null
};

function reducer(state, action) {
    if(action.type === 'SET_EMAIL') {
        return { ...state, email: action.payload }
    } else if(action.type === 'SET_PASSWORD') {
        return { ...state, password: action.payload}
    } else if(action.type === "ERROR") {
        return { ...state, error: action.payload}
    } else if(action.type === "CLEAR_ERROR") {
        return { ...state, error: null}
    } else {
        return state
    }
}

export default function Login() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    async function loginReq(body) {
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if(!res.ok) {
                const text = await res.text();
                throw text;
            }
            const data = await res.json();
            if(data) {
                navigate("/dashboard")
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            dispatch({ type: "ERROR", payload: err })
            setLoading(false);
        }
    }

    function onSubmit(e) {
        e.preventDefault()
        dispatch({ type: "CLEAR_ERROR"})
        if(state.email && state.password) {
            loginReq(state);
        }
    }
  return <div className="w-100 md:flex">
    <div className="w-100 md:w-1/2 h-full px-44 md:px-24 lg:px-32 xl:px-44 py-28">
        <h1 className="text-2xl font-bold mt-7">Welcome to Focus 👋</h1>
        <p className="text-gray-500 text-sm mt-5">
          Login to your account!.
        </p>
        <form className='mt-16' onSubmit={onSubmit}>
            <LabeledInput labelText={"Email"} placeholder={"Enter Email"} type={"text"} onChange={(e) => dispatch({ type: 'SET_EMAIL', payload:e.target.value})} value={state.email} />
            <LabeledInput labelText={"Password"} placeholder={"Enter Password"} type={"password"} className={'mt-3'} onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload:e.target.value})} value={state.password} />
            <FormButton type='submit' disabled={loading} text={loading ? "Loading" : "Login"} className={'mt-5'} />
        </form>
        {state.error && <ErrorContainer text={state.error} />}
    </div>
    <div className="w-100 md:w-1/2 h-screen bg-purple-800 relative hidden sm:block sm:flex items-center justify-center" style={{ backgroundImage: `url(${bgSrc})`}}>
        <img src={illustrationSrc} className='w-1/2 h-1/2' />
    </div>
  </div>;
}
