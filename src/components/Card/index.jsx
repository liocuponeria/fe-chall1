import styles from "./index.module.css";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Context/apicontext";
import Link from "next/link";

export default function Card() {
  const { produtos } = useContext(ApiContext);

  return (
    <>
      <ul className={styles.ul}>
        {produtos.map((products) => (
          <li key={products.id} className={styles.li}>
            <Link
              className={styles.linkProduto}
              href={`/produto/${products.id}`}
            >
              <img
                className={styles.imagemproduto}
                src={products.image}
                alt=''
              />
            </Link>

            <strong className={styles.strong}> R${products.price}</strong>

            <button className={styles.button}>
              <span className={styles.span}>{products.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
