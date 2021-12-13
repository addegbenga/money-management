import "./App.css";
import RoutePages from "./pages/index";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <RoutePages />
      </div>
      <div className="md:hidden">
        <h1>
          Please switch to Tablet or Desktop mode Mobile Responsiveness will be
          available shortly{" "}
        </h1>
      </div>
    </>
  );
}

export default App;
