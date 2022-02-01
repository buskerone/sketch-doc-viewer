import { useState, useEffect } from 'react';
import request from 'graphql-request';

const baseUrl = process.env.REACT_APP_API_URL;

const useCallQuery = ({ query, params }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const res = await request(baseUrl, query, params);
      setResponse(res);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error };
};

export default useCallQuery;
