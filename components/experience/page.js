"use client"
import React, {useState, useEffect} from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import img from "@/public/assets/tp.png"


function Experience() {
    const [experience, setExperience] = useState([]);
  
    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setExperience(data.data))
        .catch((error) => console.error(error));
    }, []);
  
  return (
    <>
      <div className={Styles.content}>
      {
        Array.isArray(experience) &&
         experience.map((experiences) => (
        <div className={Styles.content2} key={experience.id}>
          <Image src={img} alt="tp" width={100} height={100} />
          <div className={Styles.noted}>
            <h3>{experiences.position}</h3>
            <h4>{experience.company}</h4>
            <div style={{ display: "flex" }}>
              <h5>{experiences.work_month}</h5>
              <h5>{experiences.work_year}</h5>
            </div>
            <h5>{experiences.description}</h5>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
