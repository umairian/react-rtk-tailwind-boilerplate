import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Dashboard() {
  return (
    <>
        <Header />
      <h1 className="text-3xl text-center my-5">Welcome to Dashboard!</h1>
      <Link className="bg-purple-600 px-5 py-2 mx-auto w-16" to={'/login'}>Login</Link>
    </>
  );
}
