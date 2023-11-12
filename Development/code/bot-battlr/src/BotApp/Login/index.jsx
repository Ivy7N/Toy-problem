import { useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const toDashboard = () => {
        navigate("/dashboard");
    };
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <button onClick={toDashboard}>TO DASHBOARD</button>
            {/*<Link to="dashboard">TO DASHBOARD</Link>*/}
        </div>
    );
}
export default Login;