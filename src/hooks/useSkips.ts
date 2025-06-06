import { useState, useEffect } from 'react';
import { Skip } from '../types';

// Define the structure of the skip object coming from the API
interface ApiSkip {
  id: number | string;
  size: number | string;
  hire_period: number | string;
  price: number;
  image_url?: string | null;
  feature?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSkips = (_postcode = "NR32", _area = "Lowestoft") => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // START TEMPORARY MOCK FOR LOCAL TESTING
  useEffect(() => {
    setLoading(true);
    setError(false);

    // Mock data representing the API response structure (ApiSkip type)
    // Prices are VAT-inclusive as expected by the 'price' field in ApiSkip
    const mockApiSkipsData: ApiSkip[] = [
      { id: 17933, size: 4, hire_period: 14, price: 211, image_url: null, feature: null },
      { id: 99999, size: 5, hire_period: 14, price: 241, image_url: null, feature: null }, // New 5 Yard (Temporary ID)
      { id: 17934, size: 6, hire_period: 14, price: 264, image_url: null, feature: null },
      { id: 17935, size: 8, hire_period: 14, price: 295, image_url: null, feature: null },
      { id: 17936, size: 10, hire_period: 14, price: 356, image_url: null, feature: "Not Allowed On The Road" },
      { id: 17937, size: 12, hire_period: 14, price: 390, image_url: null, feature: "Not Allowed On The Road" },
      { id: 17938, size: 14, hire_period: 14, price: 434, image_url: null, feature: "Not Allowed On The Road" },
      { id: 17939, size: 16, hire_period: 14, price: 510, image_url: null, feature: "Not Allowed On The Road" },
      { id: 15124, size: 20, hire_period: 14, price: 802, image_url: null, feature: "Not Allowed On The Road" },
      { id: 15125, size: 40, hire_period: 14, price: 877, image_url: null, feature: "Not Allowed On The Road" }
    ];

    // Simulate async fetch delay (optional, but good for mimicking real API)
    setTimeout(() => {
      try {
        // Transform the mock data to match our application's Skip type
        const transformedSkips = mockApiSkipsData.map((skip: ApiSkip) => ({
          id: Number(skip.id),
          size: String(skip.size), // UI likely adds " Yard Skip" or similar based on this string
          hire_period: `${skip.hire_period} hire`, // UI likely adds "day period" or similar
          price: skip.price, // This is the final display price
          image_url: skip.image_url || 'https://wewantwaste.co.uk/wp-content/uploads/2023/05/waste-skip-img.png', // Default image
          feature: skip.feature || null
        }));
        
        setSkips(transformedSkips);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        console.error('Error processing mock skips:', errorMessage, err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 500); // Simulate 0.5 second delay
  }, []); // Empty dependency array ensures this runs only once on component mount
  // END TEMPORARY MOCK FOR LOCAL TESTING

  return { skips, loading, error };
};