import React from "react";
import styles from "@/app/styles/common.module.css";
import hero from "@/app/styles/herosection.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({title,imgUrl}) => {
  return (
    <main className={hero.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={hero.hero_content}>
            <h1>{title}</h1>
            <p>
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href='/movie'>
            <button>
                Explore Movies
            </button>
            </Link>
          </div>
          <div className={hero.hero_image}>
            <Image src={imgUrl} alt="Watch" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className={hero.custom_shape_divider_bottom_1681647578}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path className={hero.shape_fill}
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>
    </main>
  );
};

export default HeroSection;
