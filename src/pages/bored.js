import React, { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://boredapi.com/api/activities/')
      .then(response => response.json())
      .then(data => {
        setActivities(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Button onClick={App} />
      <h1>Activities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.key}>{activity.activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;