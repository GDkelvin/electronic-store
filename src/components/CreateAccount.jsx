import React from "react";
import styles from "../css/CreateAccount.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CreateAccount() {
  return (
    <div className={styles.signup}>
      

      <h1>Create your account</h1>
      <div className={styles["Signup-input"]}>
        <div className={styles["input-group"]}>
          <i className="bi bi-person"></i>
          <input type="text" placeholder="Enter Full Name" id="fullname" />
        </div>
        <div className={styles["input-group"]}>
          <i className="bi bi-envelope"></i>
          <input type="text" placeholder="Enter Email" id="email" />
        </div>
        <div className={styles["input-group"]}>
          <i className="bi bi-key"></i>
          <input type="password" placeholder="Enter Password" id="password" />
        </div>
        <div className={styles["input-group"]}>
          <i className="bi bi-key"></i>
          <input type="password" placeholder="Confirm Password" id="confirmPassword" />
        </div>
      </div>

      <div className={styles["agree-term"]}>
        <input type="checkbox" /> I agree to all <a href="#">Terms & Conditions</a>
      </div>

      <button className={styles["btn-Signup"]}>Create Account</button>

      <div className={styles["other-signin"]}>
        <div className={styles["text-other-signin"]}>Or Sign In With</div>
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

export default CreateAccount;
