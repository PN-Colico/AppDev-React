import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterationChoices.css";
const RegisterationChoices = () => {
  const navigate = useNavigate();

  const onStudentTextClick = useCallback(() => {
    navigate("/registers");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/registert");
  }, [navigate]);

  const onTeacherTextClick = useCallback(() => {
    navigate("/registert");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="registeration-choices">
      <div className="frame">
        <div className="frame1">
          <div className="frame2">
            <div className="frame3">
              <div className="frame4">
                <div className="register">Register</div>
                <div className="as">as</div>
              </div>
            </div>
            <div className="frame5">
              <div className="student" onClick={onStudentTextClick}>
                Student
              </div>
            </div>
          </div>
          <div className="frame6">
            <div className="frame7" onClick={onFrameContainer5Click}>
              <div className="student" onClick={onTeacherTextClick}>
                Teacher
              </div>
            </div>
            <div className="frame8">
              <div className="frame9">
                <b className="already-have-an-container">
                  <span>{`Already have an account? `}</span>
                  <span className="login">Login</span>
                </b>
                <div className="frame-child" onClick={onRectangleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame10">
        <img className="logo-1-icon" alt="" src="/logo-1@2x.png" />
        <img className="frame-icon" alt="" src="/r-1@2x.png" />
      </div>
    </div>
  );
};

export default RegisterationChoices;
