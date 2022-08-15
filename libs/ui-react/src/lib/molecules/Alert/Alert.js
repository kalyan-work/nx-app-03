import styles from './Alert.module.scss';
import {default as MUIAlert} from '@mui/material/Alert';
export function Alert(props) {
    return (<div className={styles['container']}>
      
      <Alert severity={props.severity}>{props.messsage || "Message not provided!"}</Alert>
      
    </div>);
}
;
export default Alert;
