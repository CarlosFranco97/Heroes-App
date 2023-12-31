import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  
  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext)
  
  const handleLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Carlos Franco')
     
    navigate(lastPath, {
      replace: true
    })
}
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <hr />
      <button 
      onClick={handleLogin}
      className="btn btn-primary">
        Login
      </button>
    </div>
    )
}
