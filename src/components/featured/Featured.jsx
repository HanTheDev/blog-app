import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Han The Dev here!</b> Discover my stories and opinion on this
        blog.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
            dolores!
          </h1>
          <p className={styles.postDec}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            nihil provident nesciunt tempora rem porro sapiente odio! Et, nulla?
            Quidem dignissimos autem sint quas amet aspernatur libero saepe,
            voluptatibus tempore?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
