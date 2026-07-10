import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

export default function App() {
  return (
    <div
      className="
        min-h-screen
        bg-base-200
        p-5
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[380px_1fr]
          gap-8
          xl:gap-10
        "
      >
        <LeftSide />

        <RightSide />
      </div>
    </div>
  );
}