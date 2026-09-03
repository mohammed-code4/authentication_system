import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { darkTheme, lightTheme } from "@/store/themeSlice";

const ThemeToggleButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const themeValue = useSelector((state: RootState) => state.theme.theme);

  const handleToggleTheme = () => {
    const html = document.documentElement;
    if (themeValue === "dark") {
      dispatch(lightTheme());
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      dispatch(darkTheme());
      html.classList.remove("light");
      html.classList.add("dark");
    }
  };

  return (
    <Button
      variant="outline"
      className={"cursor-pointer"}
      size="icon"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
    >
      {themeValue === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggleButton;
