import "./HomePage.scss";
import logo from "../../assets/images/compasslogo2.png";
import { useNavigate } from "react-router-dom";
import { userDetailsInterface } from "../../interfaces/interface";
import { login } from "../../services/services";

function HomePage() {
  // state for auth
  // const [loginDetails, setLoginDetails] = useState({
  //   username: "",
  //   password: "",
  // });
  // const [loginToken, setLoginToken] = useState("");

  // navigate user logged in with token
  const navigate = useNavigate();

  // post login details to server & get token
  const postLoginDetails = async (loginDetails: userDetailsInterface) => {
    const token = await login(loginDetails);
    console.log(token);
    // setLoginToken(token);
    return token;
  };

  // get login details frm login form
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const username: string = event.target.username.value;
    const password: string = event.target.password.value;

    if (username.length > 4 && password.length > 4) {
      const userDetails: userDetailsInterface = {
        username: username,
        password: password,
      };
      console.log(userDetails);
      // setLoginDetails(userDetails);
      try {
        const token = await postLoginDetails(userDetails);
        console.log(token);

        // store token in local storage
        localStorage.setItem("token", token);

        if (token) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log("Login failed", error);
      }
    } else {
      alert("Missing Username &/or Password");
    }
  }

  return (
    <>
      <div className="homepage">
        <div className="homepage-container-1">
          <img
            className="homepage__image"
            src={logo}
            alt="Career compass logo"
          />
          <h1 className="homepage__title">Career Compass</h1>
          <h2 className="homepage__subtext">The North Star to your Career</h2>
        </div>

        <div className="homepage-container-2">
          <h2 className="login-form__title">Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <label className="login-form__label" htmlFor="username">
              Username
            </label>
            <input
              className="login-form__input"
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
            />
            <label className="login-form__label" htmlFor="password">
              Password
            </label>
            <input
              className="login-form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className="homepage__button" type="submit">
              Access to my Board
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HomePage;
