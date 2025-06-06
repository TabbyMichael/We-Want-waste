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

export const useSkips = (postcode = "NR32", area = "Lowestoft") => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch skips');
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format - expected an array');
        }
        
        // Transform the data to match our needs
        const transformedSkips = data.map((skip: ApiSkip) => ({
          id: Number(skip.id),
          size: String(skip.size), // Explicitly convert size to string
          hire_period: `${skip.hire_period} hire`,
          price: skip.price,
          image_url: skip.image_url || 'https://wewantwaste.co.uk/wp-content/uploads/2023/05/waste-skip-img.png',
          feature: skip.feature || null
        }));
        
        setSkips(transformedSkips);
      } catch (err) {
        console.error('Error fetching skips:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};