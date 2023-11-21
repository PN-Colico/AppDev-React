import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    // Please sync "Admin" to the project
  }, []);

  const onRectangle1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    // Please sync "STHome" to the project
  }, []);

  const onLOGINTextClick = useCallback(() => {
    // Please sync "TeacherHome" to the project
  }, []);

  return (
    <div className="login1">
      <div className="login-child" />
      <img
        className="grey-and-yellow-modern-univers"
        alt=""
        src="/grey-and-yellow-modern-university-logo-1-1@2x.png"
      />
      <div className="frame36">
        <div className="frame-child8" onClick={onRectangleClick} />
      </div>
      <div className="frame37">
        <div className="frame-child9" onClick={onRectangle1Click} />
      </div>
      <div className="login-item" />
      <div className="frame38">
        <div className="connect-with">connect with</div>
      </div>
      <div className="frame39">
        <div className="connect-with">Forget Password?</div>
      </div>
      <div className="frame40">
        <b className="dont-have-an-container">
          <span>{`Don’t have an account? `}</span>
          <span className="register-today">Register today</span>
        </b>
      </div>
      <div className="frame41">
        <div className="connect-with">or</div>
      </div>
      <div className="frame42">
        <div className="connect-with">Welcome back</div>
      </div>
      <div className="frame43">
        <div className="login-to-continue">Login to continue</div>
      </div>
      <div className="frame44">
        <div className="frame-child10" onClick={onRectangle3Click} />
      </div>
      <div className="frame45">
        <div className="login2" onClick={onLOGINTextClick}>
          LOGIN
        </div>
      </div>
      <div className="frame46">
        <div className="email2">Email</div>
      </div>
      <div className="frame47">
        <div className="email2">Password:</div>
      </div>
      <div className="frame48">
        <div className="frame-child11" />
      </div>
      <div className="frame49">
        <div className="frame-child11" />
      </div>
      <div className="frame50">
        <img className="logo-1-icon3" alt="" src="/logo-1@2x.png" />
      </div>
      <img className="frame-icon1" alt="" src="/undefined.png" />
      <img className="frame-icon2" alt="" src="/undefined1.png" />
      <img className="frame-icon3" alt="" src="/undefined2.png" />
      <img className="frame-icon4" alt="" src="/undefined3.png" />
      <img className="frame-icon5" alt="" src="/undefined4.png" />
      <img className="frame-icon6" alt="" src="/undefined5.png" />
      <div className="login-inner" />
    </div>
  );
};

export default Login;
