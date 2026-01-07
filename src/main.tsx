import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/system";
import "./index.css";
import "./custom.scss";

function App() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <header className="pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">HeroUI Boilerplate</h2>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Start Building Amazing Apps
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              A modern boilerplate with React 19, TypeScript, Tailwind CSS v4, SASS, and HeroUI components.
              Everything you need to build fast.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Powered by Vite for instant HMR and optimized builds
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Beautiful UI</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  HeroUI components with Tailwind CSS v4 and SASS support
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Type Safe</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Full TypeScript support with strict type checking
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                View on GitHub
              </a>
              <a
                href="#docs"
                className="custom-button px-8 py-3 bg-white dark:bg-gray-800 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 mt-16">
          <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>Built with React, TypeScript, Tailwind CSS, and HeroUI</p>
            <p className="mt-2">MIT License - Free to use for your projects</p>
          </div>
        </footer>
      </div>
    </HeroUIProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
