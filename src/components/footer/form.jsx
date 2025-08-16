import "./form.css";
import { RxCross2 } from "react-icons/rx";

const Form = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          <RxCross2 />
        </button>
        <h2>Login / Sign Up</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Form;
