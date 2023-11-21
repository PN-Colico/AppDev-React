import { useCallback } from "react";
import RectangleComponent from "./RectangleComponent";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeaturesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignupTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="frame55">
      <img className="logo-1-icon4" alt="" src="/logo-1@2x.png" />
      <div className="frame-child24" />
      <div className="frame-child25" />
      <div className="home1">Home</div>
      <div className="frame-child26" onClick={onRectangle2Click} />
      <div className="about-us1">About Us</div>
      <div className="features1" onClick={onFeaturesTextClick}>
        Features
      </div>
      <div className="frame-child27" />
      <RectangleComponent />
      <div className="login3" onClick={onLoginTextClick}>
        Login
      </div>
      <div className="signup" onClick={onSignupTextClick}>
        Signup
      </div>
    </div>
  );
};

export default Header;
