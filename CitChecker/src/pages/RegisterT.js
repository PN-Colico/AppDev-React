import { useCallback } from "react";
import "./RegisterT.css";
const RegisterT = () => {
  const onCREATETextClick = useCallback(() => {
    // Please sync "Success1" to the project
  }, []);

  const onRectangle5Click = useCallback(() => {
    // Please sync "Success1" to the project
  }, []);

  return (
    <div className="registert">
      <div className="frame11">
        <img className="logo-1-icon1" alt="" src="/logo-1@2x.png" />
      </div>
      <img className="t-1-icon" alt="" src="/t-1@2x.png" />
      <div className="registert-child" />
      <div className="frame12">
        <div className="username">Username</div>
      </div>
      <div className="frame13">
        <div className="username">Email</div>
      </div>
      <div className="frame14">
        <div className="username">Password</div>
      </div>
      <div className="frame15">
        <div className="username">Department</div>
      </div>
      <div className="frame16">
        <div className="frame-item" />
      </div>
      <div className="frame17">
        <div className="frame-item" />
      </div>
      <div className="frame18">
        <div className="frame-item" />
      </div>
      <div className="frame19">
        <div className="frame-item" />
      </div>
      <div className="frame20">
        <div className="teacher-registration">Teacher Registration</div>
      </div>
      <div className="frame21">
        <div className="create" onClick={onCREATETextClick}>
          CREATE
        </div>
      </div>
      <div className="frame22">
        <div className="frame-child2" onClick={onRectangle5Click} />
      </div>
    </div>
  );
};

export default RegisterT;
