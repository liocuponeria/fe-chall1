import styles from "../Header/index.module.css";
import { useContext } from "react";
import { ApiContext } from "../../Context/apicontext";
export default function Header() {
  const { setname } = useContext(ApiContext);

  return (
    <>
      <div>
        <li style={{ display: "flex" }}>
          <button
            style={{ backgroundColor: "#FAD424" }}
            className={styles.cardH2}
          >
            HOME
          </button>
          <button
            onClick={() => setname("men's clothing")}
            className={styles.cardH2}
          >
            MEN CLOTHING
          </button>
          <button
            onClick={() => setname("women's clothing")}
            className={styles.cardH2}
          >
            WOMEN CLOTHING
          </button>
          <button
            onClick={() => setname("electronics")}
            className={styles.cardH2}
          >
            ELECTRONICS
          </button>
          <button onClick={() => setname("jewelery")} className={styles.cardH2}>
            JEWELERY
          </button>
        </li>
      </div>
    </>
  );
}
