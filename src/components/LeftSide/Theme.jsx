import { themes } from "../../data/themes";
import { useTheme } from "../../hooks/useTheme";
import { Palette } from "lucide-react";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="card shadow-xl border border-base-content/5 bg-base-100 w-full hover:border-primary/10 transition-all duration-300">

      <div className="card-body p-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="font-semibold text-base">
              Theme
            </h2>

            <p className="text-sm opacity-60 capitalize">
              {theme}
            </p>

          </div>

          <div className="dropdown dropdown-end">

            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
            >
              <Palette size={20} />
            </button>

            <ul
              tabIndex={0}
              className="dropdown-content z-[999] mt-3 menu p-2 shadow-2xl bg-base-200 rounded-box w-72 max-h-96 overflow-y-auto"
            >

              {themes.map((item) => (

                <li key={item}>

                  <button

                    onClick={() => setTheme(item)}

                    className={`justify-between capitalize ${
                      theme === item
                        ? "active"
                        : ""
                    }`}

                  >

                    {item}

                    {theme === item && "✓"}

                  </button>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}