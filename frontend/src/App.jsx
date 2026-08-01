// import logo from "./logo.svg";
import Navbar from "./components/Navbar.jsx";
import { MainBody, MainBodyMobile } from "./components/Main.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import Associations from "./components/Associations.jsx";
import "./App.css";

function App() {
  return (
    <div class="md:h-[calc(100vh-5.5rem)] md:border-none h-full border-2 border-primary ">
      <picture class="block fixed inset-0 z-0 pointer-events-none w-full h-full opacity-40">
        <source media="(min-width: 768px)" srcset="blob-scene-haikei.svg" />
        <img
          class="w-full h-full object-cover"
          src="blob-scene-haikei_mobile.svg"
          alt=""
          aria-hidden="true"
        />
      </picture>
      <header class="sticky top-0 z-[100]">
        <Navbar />
      </header>
      {/* Mobile */}
      <main class="relative z-10 md:hidden w-full flex flex-col">
        <MainBodyMobile />
      </main>
      {/* Desktop */}
      <main class="relative z-10 hidden md:grid md:grid-cols-12 md:h-full md:mt-4">
        <div class="col-span-1">
          <SocialMedia />
        </div>
        <div class="col-span-10 flex overflow-hidden">
          <div class=" flex-1 overflow-y-scroll scrollbar-hide ">
            <MainBody />
          </div>
        </div>
        <div class="col-span-1">
          <Associations />
        </div>
      </main>
    </div>
  );
}

export default App;
