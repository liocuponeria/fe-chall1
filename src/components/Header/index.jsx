import styles from "./index.module.css";

import Buttons from "../../components/Buttons";
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.flex}>
          <span className={styles.imagemCard} />
          <h1 className={styles.cardH1}>CUPONERIA STORE</h1>
        </div>
        <Buttons />
      </div>
    </>
  );
}
