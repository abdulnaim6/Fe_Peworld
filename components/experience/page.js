"use client";
import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import img from "@/public/assets/tp.png";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setExperience(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteExperience = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setExperience((prevExperience) =>
            prevExperience.filter((exp) => exp.id !== id)
          );
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Pengalaman kerja berhasil dihapus!",
          });
        } else {
          console.error("Gagal menghapus pengalaman");
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Terjadi kesalahan saat menghapus pengalaman kerja.",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Terjadi kesalahan saat menghapus pengalaman kerja.",
        });
      });
  };

  return (
    <>
      <div
        className={Styles.content}
        style={{ display: "flex", marginLeft: "20px" }}
      >
        {Array.isArray(experience) &&
          experience.map((experience) => (
            <div
              className={Styles.content2}
              style={{ marginRight: "20px" }}
              key={experience.id}
            >
              <Image src={img} alt="tp" width={100} height={100} />
              <div className={Styles.noted}>
                <h3>{experience.position}</h3>
                <h4>{experience.company}</h4>
                <div style={{ display: "flex" }}>
                  <h5>{experience.work_month}</h5>
                  <h5>{experience.work_year}</h5>
                </div>
                <h5>{experience.description}</h5>
                <button
                  type="button"
                  onClick={() => handleDeleteExperience(experience.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Experience;
