import { useState, useEffect } from 'react';
import { Skip } from '../types';

// Define the structure of the skip object coming from the API
interface ApiSkip {
  id: number | string;
  size: number | string;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  image_url?: string | null;
  // The 'feature' field in our transformed 'Skip' type will be derived from 'allowed_on_road'
  allowed_on_road?: boolean;
  // Other fields from API that we might not use directly in the Skip type but are good to be aware of
  allows_heavy_waste?: boolean;
  area?: string;
  created_at?: string;
  forbidden?: boolean;
  per_tonne_cost?: number | null;
  postcode?: string;
  transport_cost?: number | null;
  updated_at?: string;
}

export const useSkips = (_postcode = "LE10 1SH", _area = "Lowestoft") => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      setError(false);
      try {
        const apiUrl = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${_postcode}&area=${_area}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          let apiErrorMsg = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
              apiErrorMsg = `API Error: ${errorData.message} (Status: ${response.status})`;
            } else if (typeof errorData === 'string' && errorData.length > 0) {
              apiErrorMsg = `API Error: ${errorData} (Status: ${response.status})`;
            }
          } catch (e) {
            console.warn('Could not parse error response from API:', e);
          }
          throw new Error(apiErrorMsg);
        }

        const data: ApiSkip[] = await response.json();

        if (!Array.isArray(data)) {
            console.error('API did not return an array:', data);
            throw new Error('Invalid data format received from API.');
        }

        const transformedSkips: Skip[] = data.map((apiSkip: ApiSkip) => {
          return {
            id: Number(apiSkip.id),
            size: String(apiSkip.size),
            hire_period: `${apiSkip.hire_period_days} day hire`,
            price: parseFloat(apiSkip.price_before_vat.toFixed(2)), // Use price_before_vat directly
            image_url: apiSkip.image_url || 'https://wewantwaste.co.uk/wp-content/uploads/2023/05/waste-skip-img.png',
            feature: apiSkip.allowed_on_road === false ? "Not Allowed On The Road" : null,
          };
        });

        // Check if a 5-yard skip is present
        const has5YardSkip = transformedSkips.some(skip => skip.size === "5");

        if (!has5YardSkip) {
          const fiveYardSkip: Skip = {
            id: 99999, // Temporary unique ID
            size: "5",
            hire_period: "14 day hire",
            price: 241.00, // Assuming 241 is the price_before_vat for the 5-yard skip
            image_url: 'https://wewantwaste.co.uk/wp-content/uploads/2023/05/waste-skip-img.png', // Default image
            feature: null, // Assuming allowed on road by default, so no 'Not Allowed On The Road' feature
          };
          transformedSkips.push(fiveYardSkip);
        }

        // Sort skips by size (numeric conversion for proper sorting)
        transformedSkips.sort((a, b) => Number(a.size) - Number(b.size));

        setSkips(transformedSkips);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while fetching skips.';
        console.error('Error fetching or processing skips:', errorMessage, err);
        setError(true);
        setSkips([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [_postcode, _area]);

  return { skips, loading, error };
};