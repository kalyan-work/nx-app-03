import styles from './Title.module.scss';
export function Title(props) {
    return (<div className={styles['container']}>
      
      <h1>{props.title}</h1>
      
    </div>);
}
;
export default Title;
