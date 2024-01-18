import React from 'react'; 
import { Image, Form, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';    
import styles from '@/styles/Robot.module.css';

export default function Robot() {

  const router=useRouter();

  function robotSubmit(e){
    e.preventDefault();
    router.push('/robot/planner')
  }

  return (
        <>
        <div className={styles.pageRobot}>
        <Image className={styles.herobot} src='greenwide.jpeg' />
        <div className={styles.robotContainer}>
        <h1>enjoy</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XnZH4izf_rI?si=GY8aoFdzPN3jAyzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Form>
        <Form.Field>
          <label>Full Name</label>
          <input placeholder='Full Name?'/>
        </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email Address?' />
    </Form.Field>
    <Button type='link'  content='submit' onClick={robotSubmit} />
  </Form>
</div>
</div>
        </>
    )
}