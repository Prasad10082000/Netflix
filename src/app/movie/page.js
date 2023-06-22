import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20/&lang=en";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e3003f75amsh20a3c2174b22b2bp15a867jsn69c3b059c364",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url,options)
  const data = await res.json();
  const maindata = data.titles;

  return (
    <section className={`${styles.movieSection}`}>
    <div className={`${styles.container}`}>
      <h1>Series & Movies</h1>
      <div className={styles.card_section}>
        {
        maindata.map((ele)=>(
            <MovieCard key={ele.id} {...ele}/>
        ))
        }
      </div>
    </div>
    </section>
  );
};

export default Movie;
