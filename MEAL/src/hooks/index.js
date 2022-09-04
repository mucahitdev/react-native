import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

export const useFetch = param => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = Config.API_URL + param;
  
  async function fetchData() {
    try {
      const {data} = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};
