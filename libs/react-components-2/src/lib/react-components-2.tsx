import styles from './react-components-2.module.css';

/* eslint-disable-next-line */
export interface ReactComponents2Props {}

export function ReactComponents2(props: ReactComponents2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactComponents2!</h1>
    </div>
  );
}

export default ReactComponents2;
