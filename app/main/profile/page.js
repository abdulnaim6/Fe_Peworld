"use client";
import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import img from "@/public/assets/aim.jpg";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import img2 from "@/public/assets/637.png";
import Experience from "@/components/experience/page";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { CiUser } from "react-icons/ci";

function Index() {
  const [activeTab, setActiveTab] = useState("portofolio");
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState({});
  const [portfolio, setPortofolio] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSkills(data.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPortofolio(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setPortofolio((prevPortofolio) =>
            prevPortofolio.filter((exp) => exp.id !== id)
          );
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Portofolio berhasil dihapus!",
          });
        } else {
          console.error("Gagal menghapus portofolio");
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Terjadi kesalahan saat menghapus portofolio.",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Terjadi kesalahan saat menghapus portofolio.",
        });
      });
  };

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Navbar />
      <div style={{ backgroundColor: "#5E50A1", height: 311 }}>
        <div className={Styles.content}>
          <section className={Styles.contentleft}>
            <Link href="/main/editprofile">
              {/* <CiUser style={{ height: 80, width: 80 }} /> */}
              {/* <Image
                className={Styles.contentimg}
                src={profile.photo}
                alt="naim"
                width={150}
                height={150}
              /> */}
              <div>
                {profile.photo ? (
                  <Image
                    className={Styles.contentimg}
                    src={profile.photo}
                    alt="naim"
                    width={150}
                    height={150}
                  />
                ) : (
                  <CiUser style={{ height: 80, width: 80 }} />
                )}
              </div>
            </Link>
            <h3>{profile.name && profile.name}</h3>
            <p>{profile.job_desk}</p>
            <div style={{ display: "flex" }}>
              <IoLocation />
              <p>{profile.domicile ? profile.domicile : "Indonesia"}</p>
            </div>
            <p>{profile.workplace}</p>
            <button type="submit">
              <Link href="/main/hire">Hire</Link>
            </button>
            <h3>Skill</h3>
            <div className={Styles.skills} style={{ display: "table-row" }}>
              {Array.isArray(skills) &&
                skills.map((skill, index) => (
                  <button key={index.id} type="submit">
                    {skill.skill_name}
                  </button>
                ))}
              {/* <button type="submit">{skills.skill_name}</button> */}
              {/* <button type="submit">Javasript</button>
              <button type="submit">HTML</button>
              <button type="submit">Postgre</button> */}
            </div>
            <div style={{ display: "flex", marginTop: 10 }}>
              <MdEmail />
              <p>{profile.email}</p>
            </div>
          </section>
          <section className={Styles.contentright}>
            <div className={Styles.title}>
              <h3
                onClick={() => handleTabClick("portofolio")}
                className={activeTab === "portofolio" ? Styles.activeTab : ""}
              >
                Portofolio
              </h3>
              <h3
                onClick={() => handleTabClick("pengalaman")}
                className={activeTab === "pengalaman" ? Styles.activeTab : ""}
              >
                Pengalaman kerja
              </h3>
            </div>

            {activeTab === "portofolio" && (
              <div style={{ display: "flex" }}>
                {Array.isArray(portfolio) &&
                  portfolio.map((portfolioItem) => (
                    <div className={Styles.porto} key={portfolioItem.id}>
                      <Image
                        className={Styles.contentrightimg}
                        src={portfolioItem.image}
                        alt={portfolioItem.application_name}
                        width={250}
                        height={250}
                      />
                      <div className={Styles.portfolioItem}>
                        <p>
                          {portfolioItem.application_name
                            ? portfolioItem.application_name
                            : "Tidak ada"}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleDelete(portfolioItem.id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {activeTab === "pengalaman" && (
              <div className={Styles.pengalaman}>
                <Experience />
              </div>
            )}
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
