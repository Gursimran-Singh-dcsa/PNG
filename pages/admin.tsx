import { useState } from "react";
import styles from "../styles/admin.module.scss";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div>
        <form
          action=""
          method="post"
          className={styles.login_container}
          style={{
            border: "1px solid gray",
            backgroundColor: "rgb(239, 245, 245)",
          }}
        >
          <div className="container">
            <label>
              <b>
                <span style={{ color: "red" }}>*</span>Username
              </b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label>
              <b>
                <span style={{ color: "red" }}>*</span>Password
              </b>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="psw"
              required
            />
            <input
              type="checkbox"
              onChange={(e) => setShowPassword(e.target.checked)}
            />{' '}
            Show Password
            <button type="submit">Login</button>
            {/* <span className="psw">
              <a href="#" style={{ textDecoration: "none", float: "right" }}>
                Forgot Password?
              </a>
            </span> */}
          </div>
        </form>
      </div>
    </>
  );
};
export default function Admin() {
  return (
    <>
      <div className={styles.login_form}>
        <Login />
      </div>
    </>
  );
}
