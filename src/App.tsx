import './App.css';
import { SkipSelector } from './pages/SkipSelector';
function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <header className="bg-gray-800 py-4 shadow-md text-center text-white">
        wewantwaste.co.uk
      </header>
      <main className="py-6">
        <SkipSelector />
      </main>
      <footer className="bg-gray-800 py-4 text-center text-white">
        <div className="container mx-auto px-4">
          <p>© 2025 RemWaste Skip Hire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
