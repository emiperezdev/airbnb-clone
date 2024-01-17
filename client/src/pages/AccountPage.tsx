import { NavLink, Navigate, useParams } from "react-router-dom";
import useUserState from "../states/useUserState";
import { PlacesPage } from "./PlacesPage";
import { axiosInstance } from "../services/api-client";

export const AccountPage = () => {
  const user = useUserState((s) => s.user);
  const setUser = useUserState(s => s.setUser);
  async function logout() {
    await axiosInstance.post('/logout');
    setUser();
    <Navigate to='/' />
  }

  let { subpage } = useParams();
  if (subpage === undefined) subpage = "profile";

  function linkClasses(type: string) {
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
    if (type === subpage) classes += " bg-primary text-white";
    else classes += " bg-gray-200";

    return classes;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center mb-8">
        <NavLink className={linkClasses("profile")} to={"/account"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          My profile
        </NavLink>
        <NavLink className={linkClasses("bookings")} to={"/account/bookings"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
            />
          </svg>
          My bookings
        </NavLink>
        <NavLink className={linkClasses("places")} to={"/account/places"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          My accommodations
        </NavLink>
      </nav>

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user!.name} {user!.email}
          <br />
          <button
            className="primary max-w-sm mt-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}

      {subpage === "places" && <PlacesPage />}
    </div>
  );
};
