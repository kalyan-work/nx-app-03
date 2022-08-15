import styles from "./Card.module.scss";
import { default as MUICard } from "@mui/material/Card";

export function Card(props) {
  return (
    <div>
      <MUICard {...props} />
    </div>
  );
}
export default Card;
