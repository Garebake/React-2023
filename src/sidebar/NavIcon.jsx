import { Link, Outlet } from "react-router-dom";

export function NavIcon({ icon, text = "tooltip", destination }) {
  return (
    <>
      <div className="navbar-icon group">
        <Link to={destination}>{icon}</Link>

        <span className="navbar-tooltip group-hover:scale-100">{text}</span>
      </div>

      <Outlet />
    </>
  );
}
