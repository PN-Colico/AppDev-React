import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterS.css";
const RegisterS = () => {
  const navigate = useNavigate();

  const onFrameContainer11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    // Please sync "Success1" to the project
  }, []);

  return (
    <div className="registers">
      <img className="s-1-icon" alt="" src="/s-1@2x.png" />
      <div className="frame23">
        <img className="logo-1-icon2" alt="" src="/logo-1@2x.png" />
      </div>
      <div className="frame24" />
      <div className="frame25">
        <div className="program">Username</div>
      </div>
      <div className="frame26">
        <div className="program">Email</div>
      </div>
      <div className="frame27">
        <div className="program">Password</div>
      </div>
      <div className="frame28">
        <div className="program">Program</div>
      </div>
      <div className="frame29">
        <div className="frame-child3" />
      </div>
      <div className="frame30">
        <div className="frame-child3" />
      </div>
      <div className="frame31">
        <div className="frame-child3" />
      </div>
      <div className="frame32">
        <div className="frame-child3" />
      </div>
      <div className="frame33">
        <div className="student-registration">Student Registration</div>
      </div>
      <div className="frame34">
        <div className="create1">CREATE</div>
      </div>
      <div className="frame35" onClick={onFrameContainer11Click}>
        <div className="frame-child7" onClick={onRectangle4Click} />
      </div>
    </div>
  );
};

export default RegisterS;
