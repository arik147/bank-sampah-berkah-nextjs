import React, { useState } from 'react';
import AddField from '../components/AddField';

const Home = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleAddField = () => {
    // Add your logic for adding fields here
    // Increment itemCount or manage dynamic fields
  };

  return (
    <div className="container mt-5">
      {/* ... Rest of your code ... */}
      <AddField handleAddField={handleAddField} />
      {/* ... Rest of your code ... */}
    </div>
  );
};

export default Home;
