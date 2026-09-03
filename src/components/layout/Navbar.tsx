import { Button } from "@/components/ui/Button";
import type { RootState } from "@/store";
import { logout } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ThemeToggleButton from "./ToggleThemeButton";
const Navbar = () => {
  const { token } = useSelector((state: RootState) => {
    return state.auth;
  });

  const dispatch = useDispatch();

  return (
    <header className="border-b bg-background sticky top-0 left-0">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight">
          AuthSystem
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {token ? (
            <Button
              onClick={() => {
                toast.info("Logged Out Successfully.");
                dispatch(logout());
              }}
              className="cursor-pointer"
              variant="destructive"
            >
              Log Out
            </Button>
          ) : (
            <>
              <Link to={"/sign-in"} className="cursor-pointer">
                <Button variant="ghost" className="cursor-pointer">
                  Sign In
                </Button>
              </Link>
              <Link to={"/sign-up"} className="cursor-pointer">
                <Button className="cursor-pointer">Sign Up</Button>
              </Link>
            </>
          )}
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
