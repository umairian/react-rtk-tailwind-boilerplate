import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { login } from "../../store/slices/Auth";

export default function Dashboard() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(login({ token: "value" }));
  }
  console.log(store);
  return (
    <>
        <Header />
      <h1 className="text-3xl text-center my-5">Welcome to Dashboard!</h1>
      <button className="bg-purple-600 px-5 py-2 mx-auto block" onClick={clickHandler}>Login</button>
    </>
  );
}
