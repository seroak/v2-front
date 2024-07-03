import styles from "./ListBox.module.css";
import cx from "classnames";

type Props = {
  exprItem: string;
  isLight: boolean;
  index: number;
};
function ListBox({ exprItem, isLight, index }: Props) {
  console.log(isLight);
  return (
    <div>
      <div className={cx(styles.list_box, isLight && styles.highlight)}>
        <span className={styles.text}>{exprItem}</span>
      </div>
      <span className={cx(styles.Noto_Serif_KR, styles.index)}>{index}</span>
    </div>
  );
}

export default ListBox;
