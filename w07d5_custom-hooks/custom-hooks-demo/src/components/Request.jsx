import React from 'react';
import useRequest from '../hooks/useRequest';

const Request = () => {

  const { data, loading } = useRequest('https://www.dnd5eapi.co/api/classes');

  return (
    <div>
      <h3>Request</h3>
      { loading && <p>Loading...</p> }
      { data && <p>{ JSON.stringify(data) }</p> }
    </div>
  );

};

export default Request;