import Theme from "./Theme";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Social from "./Social";
import Contact from "./Contact";

export default function LeftSide() {
  return (
    <aside className="w-full flex flex-col gap-5">
      <Theme />

      <Profile />

      <About />

      <Skills />

      <Social />

      <Contact />
    </aside>
  );
}