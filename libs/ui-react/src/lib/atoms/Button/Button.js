import { default as MUIButton} from '@mui/material/Button';
import styles from './Button.module.scss';

export function Button(props) {
    return (<div><MUIButton {...props}>{props.name || 'Click Me'}</MUIButton></div>);
}
;

export default Button;