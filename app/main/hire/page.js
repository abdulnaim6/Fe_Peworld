"use client"
import React, { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import img from "@/public/assets/aim.jpg"
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaGithub  } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

function Index() {
  const [form, setForm] = useState({
    message_purpose: "",
    name: "",
    email: "",
    phone: "",
    desciption: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hire`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(async(res)=>{
      if(!res.ok){
       const result =  await res.json()
        throw result.message
      } 
      return res.json()
    })
    .then((res)=>{
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Hire Successful',
        text: 'You have successfully Hire!',
      });
      router.push("/auth/login")
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Hire Failed',
        text: err,
      });
      console.log(err);
    })
  };
  return (
    <>
      <Head>
        <title>Hire</title>
      </Head>
      <Navbar />
      <div>
        <div className={Styles.content}>
          <section className={Styles.contentleft}>
            <Image
              className={Styles.contentimg}
              src={img}
              alt="naim"
              width={150}
              height={150}
            />
            <h3>Abdul Naim</h3>
            <p>Web Developer</p>
            <div style={{ display: "flex" }}>
            <IoLocation />
              <p>Tangerang</p>
            </div>
            <p>Freelance</p>
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
            <div>
              <h3>Hubungi Abdul Naim</h3>
              <p>Untuk pekerjaan yang baik hire talent berikut</p>
              <form onSubmit={handleSubmit}>
              <div className={Styles.form}>
                <p>Tujuan Tentang Pesan Ini</p>
                <input
                  style={{ color: "black", width: 800, height: 50 }}
                  label="Proyek "
                  name="message_purpose"
                  type="text"
                  placeholder="Proyek"
                  value={form.message_purpose}
              onChange={handleChange}
                />
              </div>
              <div className={Styles.form}>
                <p>Nama Lengkap</p>
                <input
                  style={{ color: "black", width: 800, height: 50 }}
                  label="Nama Lengkap "
                  name="name"
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.form}>
                <p>Email</p>
                <input
                  style={{ color: "black", width: 800, height: 50 }}
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Masukkan Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.form}>
                <p>No Handphone</p>
                <input
                  style={{ color: "black", width: 800, height: 50 }}
                  label="No Handphone "
                  name="phone"
                  type="text"
                  placeholder="Masukkan No Handphone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.form}>
                <p>Deskripsi</p>
                <textarea
                  style={{ color: "black", width: 800, height: 200 }}
                  label="Deskripsi "
                  name="description"
                  type="text"
                  placeholder="Deskripsikan/jelaskan lebih detail "
                  value={form.desciption}
                  onChange={handleChange}
                />
              </div>
              </form>
              <button type="submit" >
                {/* <Link href="/hire"> */}
                Hire
                {/* </Link> */}
              </button>
              {/* {successMessage && (
                <p
                  style={{
                    color: "green",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {successMessage}
                </p>
              )}
           
                <p
                  style={{
                    color: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {errorMessage}
                </p> */}
       
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
