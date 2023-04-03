import { useDispatch, useSelector } from "react-redux"
import {login} from "../../store/slices/Auth"

export default function Dashboard() {
    const store = useSelector(state => state);
    const dispatch = useDispatch()

    function clickHandler() {
        dispatch(login({ token: "value"}))
    }
    console.log(store)
    return (<><h1>Welcome to Dashboard!</h1>
    <button onClick={clickHandler}>Login</button>
    </>)
}