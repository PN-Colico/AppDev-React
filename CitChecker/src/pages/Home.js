import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import TeamContainer from "../components/TeamContainer";
import CopyrightInformationContainer from "../components/CopyrightInformationContainer";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  const onGetStartedTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="home">
      <img
        className="congratulations-you-did-a-test"
        alt=""
        src="/congratulations-you-did-a-test-very-well@2x.png"
      />
      <Header />
      <div className="frame51">
        <div className="empowering-educators-to">
          Empowering educators to effectively manage student attendance, and
          allowing students to keep track of their attendance effortlessly.
        </div>
        <div className="citchecker-the-ultimate-container">
          <b>
            <span className="cit">CIT</span>
            <span>CHECKER:</span>
          </b>
          <span className="the-ultimate-logging-platform">
            <b>{` `}</b>
            <span className="the-ultimate">
              The ultimate Logging Platform for Educators and Students
            </span>
          </span>
        </div>
      </div>
      <div className="frame52">
        <div className="get-started" onClick={onGetStartedTextClick}>
          Get Started
        </div>
      </div>
      <div className="frame53">
        <div className="frame-child13" />
        <div className="frame-child14" data-scroll-to="rectangle" />
        <b className="about-us" data-scroll-to="aboutUsText">
          <span>{`About `}</span>
          <span className="us">Us</span>
        </b>
        <b className="features">Features</b>
        <div className="welcome-to-citcheck-container">
          <p className="welcome-to-citcheck">
            Welcome to CITCHECK we're here to make student attendance easy and
            efficient. AttendanceChecker is designed to save time for educators
            and encourage students to be more accountable. We aim to
            revolutionize attendance management, making it straightforward and
            accessible. Our goal is to empower educators and create a positive
            impact on the learning experience.
          </p>
          <p className="welcome-to-citcheck">&nbsp;</p>
          <p className="welcome-to-citcheck">
            Join us in making attendance hassle-free and education more
            engaging. Let's simplify the way we track attendance together!
          </p>
        </div>
        <b className="attendance-tracking">Attendance Tracking</b>
        <b className="security-measures">Security Measures</b>
        <div className="title">Title</div>
        <div className="frame-child15" />
        <div className="frame-child16" />
        <div className="frame-child17" />
        <div className="frame-child18" />
        <img className="line-icon" alt="" src="/line-23.png" />
        <div className="line-div" />
        <div className="frame-child19" />
        <img className="e-1-icon" alt="" src="/e-1@2x.png" />
        <img className="sec-2-1" alt="" src="/sec-2-1@2x.png" />
        <img className="user-1-icon" alt="" src="/user-1@2x.png" />
        <img className="d-1-icon" alt="" src="/d-1@2x.png" />
        <img className="h-6-icon" alt="" src="/h-6@2x.png" />
        <div className="frame-child20" />
        <div className="simplify-the-attendance">
          Simplify the attendance process! Teachers can easily mark attendance
          for their classes, and students get a clear view of their own
          attendance records. We've made sure it's user-friendly and efficient
          for a hassle-free experience.
        </div>
        <div className="we-believe-in">
          We believe in simplicity. Enjoy an intuitive and easy-to-use interface
          designed for both students and teachers. Our goal is to make the
          attendance checking process straightforward and efficient.
        </div>
        <div className="stay-informed-at">
          Stay informed at a glance! A centralized dashboard for both students
          and teachers, displaying relevant info like attendance statistics,
          upcoming events, and announcements. Everything you need in one place!
        </div>
        <div className="unlock-insights-get">
          Unlock insights! Get in-depth reports and analytics tailored for both
          students and teachers. Teachers can dive into attendance trends, while
          students can track their attendance history over time. Knowledge is
          power!
        </div>
        <div className="retrieve-a-detailed">
          Retrieve a detailed log of historical attendance to monitor patterns
          and changes in student attendance over time.
        </div>
        <div className="your-datas-safety">
          Your data's safety is our priority. We've implemented robust security
          measures, including encryption, regular data backups, and access
          control mechanisms, to protect sensitive attendance information.
        </div>
        <img className="rep-1-icon" alt="" src="/rep-1@2x.png" />
        <div className="frame-child21" />
        <img className="time-1-icon" alt="" src="/time-1@2x.png" />
      </div>
      <TeamContainer />
      <div className="frame54">
        <div className="chelter-matthew-gilbuena">Chelter Matthew Gilbuena</div>
        <div className="peter-neil-colico">Peter Neil Colico</div>
        <div className="margaux-kylie-canete">Margaux Kylie Canete</div>
        <div className="darryl-obbus">Darryl Obbus</div>
        <div className="frame-child22" />
      </div>
      <CopyrightInformationContainer />
    </div>
  );
};

export default Home;
