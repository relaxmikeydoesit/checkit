import React, { useEffect, useState } from 'react';
import { Button, Image } from 'semantic-ui-react';
import styles from '@/styles/Bored.module.css';
import 'semantic-ui-css/semantic.min.css';
// import ActivityIdea from '@/components/ActivityIdea';

function App() {
  const [activity, setActiviy] = useState([]);

  // run activity function when page loads
  useEffect(() => {
    getActivity();
  }, []);

  // fetch activity data from API
  const getActivity = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity');
   
    setActiviy(await response.json());
  }

  

  return (
    <>
    <div className={styles.main}>
      <Image className={styles.hero} src= 'flash-hero.jpeg'/>
      <h1>Random Activity Generator</h1>
      <Button onClick={getActivity}>Get Activity</Button>
      <h2>Here is your suggestion to beat boredom: </h2> 
      <div className={styles.holder}></div>
      <h3 className={styles.idea}>{activity.activity}</h3> 
      </div>
      </>
  
  );

}

export default App;





















