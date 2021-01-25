import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (user) return <Redirect to="/" />;
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login({ credential, password })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };
  return (
    <form className="pure-form pure-form-stacked login-form" onSubmit={onSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <input
        className="credInput"
        placeholder="Username or Email"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <input
        placeholder="enter password"
        className="passInput"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="submit pure-button pure-button-primary" type="submit">
        Log In
      </button>
    </form>
  );
}
export default LoginFormPage;
