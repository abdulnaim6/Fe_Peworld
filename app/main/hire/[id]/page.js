"use client";
import img from "@/public/assets/aim.jpg";
import { useEffect, useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

function Index({ params: { id } }) {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [form, setForm] = useState({
    message_purpose: "",
    name: "",
    email: "",
    phone: "",
    desciption: "",
    worker_id: id,
  });

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.substring(path.lastIndexOf("/") + 1);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data.data))
      .catch((error) => console.error(error));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSkills(data.data))
      .catch((error) => console.error(error));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPortfolio(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hire`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        if (!res.ok) {
          const result = await res.json();
          throw result.message;
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Hire Successful",
          text: "You have successfully Hired!",
        });
        window.location.href = "/";
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Hire Failed",
          text: err,
        });
        console.log(err);
      });
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
            <h3>{profile.name}</h3>
            <p>{profile.job_desk}</p>
            <div style={{ display: "flex" }}>
              <IoLocation />
              <p>{profile.domicile ? profile.domicile : "Indonesia"}</p>
            </div>
            <p>{profile.workplace}</p>
            <h3>Skill</h3>
            <div className={Styles.skills} style={{ display: "table-row" }}>
              {Array.isArray(skills) &&
                skills.map((skill, index) => (
                  <button key={index} type="button">
                    {skill.skill_name}
                  </button>
                ))}
            </div>
            <div style={{ display: "flex", marginTop: 10 }}>
              <MdEmail />
              <p>{profile.email}</p>
            </div>
          </section>
          <section className={Styles.contentright}>
            <div>
              <h3>Hubungi {profile.name}</h3>
              <p>Untuk pekerjaan yang baik, hubungi talent berikut:</p>
              <form onSubmit={handleSubmit}>
                <div className={Styles.form}>
                  <p>Tujuan Tentang Pesan Ini</p>
                  <input
                    style={{
                      color: "black",
                      width: 800,
                      height: 50,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
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
                    style={{
                      color: "black",
                      width: 800,
                      height: 50,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
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
                    style={{
                      color: "black",
                      width: 800,
                      height: 50,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
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
                    style={{
                      color: "black",
                      width: 800,
                      height: 50,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
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
                    style={{
                      color: "black",
                      width: 800,
                      height: 200,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                    name="description"
                    type="text"
                    placeholder="Deskripsikan/jelaskan lebih detail "
                    value={form.desciption}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Hire</button>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
