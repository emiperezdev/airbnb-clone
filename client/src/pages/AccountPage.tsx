import { NavLink, useLocation } from "react-router-dom";
import useUserState from "../states/useUserState";
import useLogout from "../hooks/useLogout";

export const AccountPage = () => {
  const user = useUserState((s) => s.user);

  const logout = useLogout();

  const { pathname } = useLocation();
  function linkClasses(currentPath: string) {
    let classes = "py-2 px-6";
    if (pathname === currentPath)
      classes += " bg-primary rounded-full text-white";

    return classes;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center mb-8">
        <NavLink className={linkClasses("/account")} to={"/account"}>
          My profile
        </NavLink>
        <NavLink
          className={linkClasses("/account/bookings")}
          to={"/account/bookings"}
        >
          My bookings
        </NavLink>
        <NavLink
          className={linkClasses("/account/places")}
          to={"/account/places"}
        >
          My accommodations
        </NavLink>
      </nav>

      {pathname === "/account" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user!.name} {user!.email}
          <br />
          <button 
            className="primary max-w-sm mt-2" 
            onClick={() => {
              logout.mutate({});
            }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
