import styles from '@/styles/Todo.module.css';
export const Task = (props) => {
    return (
      <div className={styles.task}
        style={{ backgroundColor: props.completed ? "green" : "grey", textDecoration: props.completed ? "line-through" : "none"}}
        >
       <h2> <button onClick={() => props.deleteTask(props.id)}> X </button>
        {props.taskName}</h2>
        <button onClick={() => props.completeTask(props.id)}> Complete </button>

      </div>
    );
  };