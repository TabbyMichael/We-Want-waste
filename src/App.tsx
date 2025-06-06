import { useState } from 'react'; // useEffect can be used for router integration
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import SkipSelector from './components/SkipSelector';
import PermitCheckPage from './components/PermitCheckPage';
import WasteTypePage from './components/WasteTypePage'; // Import WasteTypePage
import Loader from './components/Loader'; // Import the Loader component
import { Routes, Route } from 'react-router-dom'; // Import routing components

function App() {
  // Basic loading state. You'll need to set this to true/false when operations start/end.
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemeProvider>
      {isLoading && <Loader />}
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
        <ThemeToggle />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            {/* Assuming Postcode is the initial implicit step or handled differently */}
            {/* For now, SkipSelector is at root, WasteType precedes it logically but is accessed via back nav */}
            <Route path="/" element={<SkipSelector setIsLoading={setIsLoading} />} />
            <Route path="/waste-type" element={<WasteTypePage />} />
            <Route path="/permit-check" element={<PermitCheckPage />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;