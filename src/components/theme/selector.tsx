import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

interface ThemeSelectorProps {
  isSidebarOpen: boolean;
}

export default function ThemeSelector({ isSidebarOpen }: ThemeSelectorProps) {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {isSidebarOpen &&
        (theme === "dark" ? (
          <Sun
            size={18}
            className="cursor-pointer transition-all duration-200"
            onClick={() => setTheme("light")}
          />
        ) : (
          <Moon
            size={18}
            className="cursor-pointer transition-all duration-200"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
