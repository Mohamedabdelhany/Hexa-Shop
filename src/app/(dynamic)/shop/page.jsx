import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function blog() {
  const products = await getData();
  return (
    <div className={styles.mainContainer}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/shop/${product.id}`}
          className={styles.post}
        >
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              width={350}
              height={250}
              className={styles.image}
              alt="post image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title.slice(0, 30)}...</h1>
            <p className={styles.desc}>
              {product.description.slice(0, 100)}...
            </p>
          </div>
          <div className="text-center">
            <button className=" mt-5 p-3 border-white border-[1px] rounded-md">
              Buy Now
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
