"use client"
import React, {useState} from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/navbar";
import img from "@/public/assets/aim.jpg"
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaGithub  } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import img2 from "@/public/assets/637.png";
import Experience from "@/components/experience/page";

function Index() {
  const [activeTab, setActiveTab] = useState("portofolio");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
                <Image
                  className={Styles.contentimg}
                  src={img}
                  alt="naim"
                  width={150}
                  height={150}
                />
              </Link>
              <h3>Naim</h3>
              <p>programming</p>
              <div style={{ display: "flex" }}>
              <IoLocation />
                <p>Tangerang</p>
              </div>
              <p>Freelance</p>
              <button type="submit">
                <Link href="/main/hire">Hire</Link>
              </button>
              <h3>Skill</h3>
              <div className={Styles.skills} style={{ display: "table-row" }}>
                <button type="submit">Python</button>
                <button type="submit">Javasript</button>
                <button type="submit">HTML</button>
                <button type="submit">Postgre</button>
              </div>
              <div style={{ display: "flex", marginTop: 10 }}>
              <MdEmail />
                <p>naimabdul71@gmail.com</p>
              </div>
              <div style={{ display: "flex", marginTop: 10 }}>
              <FaInstagram />
                <p>a_im46</p>
              </div>
              <div style={{ display: "flex", marginTop: 10 }}>
              <FaGithub />
                <p>abdulnaim06</p>
              </div>
              <div style={{ display: "flex", marginTop: 10 }}>
              <FiGitlab />
                <p>a_im46</p>
              </div>
            </section>
          <section className={Styles.contentright}>
            <div className={Styles.title}>
              <h3 
                onClick={() => handleTabClick("portofolio")}
                className={activeTab === "portofolio" ? Styles.activeTab : ""}>
                Portofolio
              </h3>
              <h3
                onClick={() => handleTabClick("pengalaman")}
                className={activeTab === "pengalaman" ? Styles.activeTab : ""}>
                Pengalaman kerja
              </h3>
            </div>
              <div className={Styles.porto}>
                <Image
                  className={Styles.contentrightimg}
                  src={img2}
                  alt="gambar"
                  width={250}
                  height={250}
                />
                <p>Reminder App</p>
              </div>
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
