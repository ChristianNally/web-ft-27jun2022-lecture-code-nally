import React from 'react';
import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const DocumentTitle = () => {

  const [title,setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <div>
      <h1>Document Title</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};

export default DocumentTitle;