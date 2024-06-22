import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop destination!</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          vitae ea possimus, veritatis quos animi sunt voluptatum beatae
          deleniti provident?
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="" />
      </div>
    </div>
  );
}
