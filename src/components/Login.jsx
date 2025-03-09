import React from "react";
import styles from "../css/login_signup.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <div className={styles["Signup-input"]}> 
                <div className={styles["input-group"]}>
                    <i className="bi bi-envelope"></i>
                    <input type="text" placeholder="Enter Email" id="email" />
                </div>
                <div className={styles["input-group"]}>
                    <i className="bi bi-key"></i>
                    <input type="password" placeholder="Enter Password" id="password" />
                </div>
            </div>

            <div className={styles["agree-term"]}>
                <input type="checkbox" /> Keep me logged in
            </div>
            <p className={styles.forgotPass}><a href="#">Forgot Password?</a></p>
            
            <button className={styles["btn-Signup"]}>Log In</button>

            <div className={styles["other-signin"]}>
                <div className={styles["text-other-signin"]}>Or Login With</div>
                <div className={styles.btn}>
                    <button className={styles["btn-Google"]}>
                        <i className="bi bi-google"></i> Google
                    </button>
                    <button className={styles["btn-Facebook"]}>
                        <i className="bi bi-facebook"></i> Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
