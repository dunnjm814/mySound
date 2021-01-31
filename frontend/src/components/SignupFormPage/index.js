import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { Upload, message, Button } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profImg, setProfImg] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/home" />;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password, profImg })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setProfImg(file);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="pure-form pure-form-stacked login-form"
    >
      <ul className="errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="User name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        placeholder="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <input style={{ overflow: "hidden" }} type="file" onChange={updateFile} />
      <button
        type="submit"
        id="submit"
        className="pure-button pure-button-primary"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupFormPage;
