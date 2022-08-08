import styles from './ui-form.module.css';

/* eslint-disable-next-line */
export interface UiFormProps {}

export function UiForm(props: UiFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiForm!</h1>
    </div>
  );
}

export default UiForm;
