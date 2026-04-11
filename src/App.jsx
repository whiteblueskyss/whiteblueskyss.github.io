import { useState } from "react";
import "./App.css";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section
        id="center"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
      >
        <div className="hero relative mb-8">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img
            src={reactLogo}
            className="framework absolute"
            alt="React logo"
          />
          <img src={viteLogo} className="vite absolute" alt="Vite logo" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Get started</h1>
          <p className="text-gray-600">
            Edit{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code>{" "}
            and save to test{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">HMR</code>
          </p>
        </div>
        <button
          className="counter bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <div className="text-center py-4 text-lg font-semibold">Hello vaiya</div>

      <div className="ticks border-t border-gray-300"></div>

      <section
        id="next-steps"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-16 max-w-6xl mx-auto"
      >
        <div id="docs" className="space-y-4">
          <svg className="icon w-8 h-8" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-2xl font-bold">Documentation</h2>
          <p className="text-gray-600">Your questions, answered</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <img className="logo w-5 h-5" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <img className="button-icon w-5 h-5" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="space-y-4">
          <svg className="icon w-8 h-8" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-2xl font-bold">Connect with us</h2>
          <p className="text-gray-600">Join the Vite community</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <svg
                  className="button-icon w-5 h-5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks border-t border-gray-300"></div>
      <section id="spacer" className="h-24"></section>
    </>
  );
}

export default App;
