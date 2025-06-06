import  { useState } from 'react'; // useEffect can be used for router integration
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import SkipSelector from './components/SkipSelector';
import Loader from './components/Loader'; // Import the Loader component
// If you're using React Router (v6.4+ recommended for page transitions):
// import { useNavigation } from 'react-router-dom';

function App() {
  // Basic loading state. You'll need to set this to true/false when operations start/end.
  const [isLoading, setIsLoading] = useState(false);

  // EXAMPLE: To make the loader appear automatically during page navigations
  // with React Router v6.4+, you would use the useNavigation hook:
  // -------------------------------------------------------------------------
  // const navigation = useNavigation();
  // useEffect(() => {
  //   if (navigation.state === 'loading' || navigation.state === 'submitting') {
  //     setIsLoading(true);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [navigation.state]);
  // -------------------------------------------------------------------------
  // Make sure react-router-dom is installed and your app is set up with BrowserRouter.

  return (
    <ThemeProvider>
      {isLoading && <Loader />}
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
        <ThemeToggle />
        <div className="container mx-auto px-4 py-8">
          <SkipSelector setIsLoading={setIsLoading} />
          {/* If using React Router, your <Outlet /> for routed components would typically go here, 
              or SkipSelector itself might be part of a route. */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;