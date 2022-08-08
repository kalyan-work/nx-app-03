import styles from './react-lib-components.module.css';

/* eslint-disable-next-line */
export interface ReactLibComponentsProps {}

export function ReactLibComponents(props: ReactLibComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLibComponents!</h1>
    </div>
  );
}

export default ReactLibComponents;
