import { Moon } from "./Moon";
import { Sun } from "./Sun";

import { useTheme } from "next-themes";

export function ToggleButton({ ...props }) {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="peer invisible h-0 w-0 absolute"
        onClick={changeTheme}
      />
      <label
        htmlFor="darkmode-toggle"
        className={`w-32 h-16 relative flex items-center bg-[#ebebeb] rounded-full cursor-pointer border-4 border-white transition-all duration-300 after:hover:w-16 after:transition-all after:duration-300 after:w-14 after:h-14 after:absolute after:top-0 after:left-0 after:bg-header after:rounded-full dark:after:left-[64px] dark:after:hover:left-[56px] dark:after:bg-zinc-700
        `}
      >
        <Sun />
        <Moon />
      </label>
    </div>
  );
}
