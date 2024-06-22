import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function post({ params }) {
  const product = await getData(params.id);
  return (
    <div>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h1 className={styles.title}>{product.title}</h1>
          </div>
        </header>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              className={styles.postImage}
              alt={product.title}
              width={500}
              height={350}
            />
            <span className={styles.rate}>{product.rating.rate}</span>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
