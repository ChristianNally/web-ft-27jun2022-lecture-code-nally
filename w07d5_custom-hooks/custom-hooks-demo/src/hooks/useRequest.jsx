import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then( result => {
        setData(result.data);
        setLoading(false);
      } )
      .catch(err => {
        console.log('API REQUEST Call Error:', err);
        setLoading(false);
      });
  });

  return { data: data, loading: loading };
};

export default useRequest;
