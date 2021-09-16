import axios from 'axios';
import { useEffect, useState } from 'react';

const useSearchId = (): string => {
  const [searchId, setSearchId] = useState<string>('');

  useEffect(() => {
    const fetchSearchId = async () => {
      try {
        const res = await axios.get(
          'https://front-test.beta.aviasales.ru/search'
        );

        setSearchId(res.data.searchId);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchSearchId();
  }, []);

  return searchId;
};

export default useSearchId;
