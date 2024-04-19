import React, { useState } from 'react';
import { getBoredActivity } from '../models/BoredModel';

const BoredView = () => {
  const [activity, setActivity] = useState('');

  const handleGetActivity = async () => {
    const data = await getBoredActivity();
    setActivity(data.activity);
  };

  return (
    <div>
      <h1>Bored?</h1>
      <p>{activity}</p>
      <button onClick={handleGetActivity}>Get Something to Do</button>
    </div>
  );
};

export default BoredView;