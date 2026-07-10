import { themes } from "../data/themes";
import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme();

  return (
    <ul className="menu bg-base-200 rounded-box w-56">

      {themes.map((item) => (

        <li key={item}>
          <button
            className={theme === item ? "active" : ""}
            onClick={() => setTheme(item)}
          >
            {item}
          </button>
        </li>

      ))}

    </ul>
  );
}