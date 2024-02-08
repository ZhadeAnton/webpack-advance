import { Link, Outlet } from "react-router-dom";
import classes from "./app.module.scss";
import image from "@/assets/photo.jpg";
import Logo from "@/assets/active.svg";

const App = () => {
  return (
    <div id="app" className={classes.app_text}>
      <Link to={"/about"}>About</Link>
      <Link to={"/shop"}>Shop</Link>
      <img src={image} alt="" width={100} height={160} />
      <Logo style={{ color: "green" }} width={100} height={100} />
      Hello world!
      <div>{__PLATFORM}</div>
      <Outlet />
    </div>
  );
};

export default App;
