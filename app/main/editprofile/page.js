"use client";
import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/navbar";
import img from "@/public/assets/aim.jpg";
import { MdEdit } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Index() {
  const [profile, setProfile] = useState({});
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

  const [form, setForm] = useState({
    application_name: "",
    link_repository: "",
    application: "",
    image: "",
  });

  const [skill, setSkills] = useState({
    skill_name: "",
  });

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });

  const [data, setData] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSkills = (e) => {
    setSkills((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleExperience = (e) => {
    setExperience((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleData = (e) => {
    setData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((current) => ({
      ...current,
      image: file,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", form.image);
  //   formData.append("application_name", form.application_name);
  //   formData.append("link_repository", form.link_repository);
  //   formData.append("application", form.application);
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/portfolio`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //         body: formData,
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to upload image");
  //     }
  //     const data = await response.json();
  //     console.log("Image uploaded successfully:", data);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Post portofolio Successful",
  //       text: "You have successfully post portofolio!",
  //     });
  //     router.push("/main/profile");
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Post portofolio Failed",
  //       text: error.message,
  //     });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
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
          title: "Post portofolio Successful",
          text: "You have successfully post portofolio!",
        });
        // router.push("/main/profile");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Post portofolio Failed",
          text: err,
        });
        console.log(err);
      });
  };

  const handleSubmitSkills = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(skill),
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
          title: "Post skill Successful",
          text: "You have successfully post skills!",
        });
        router.push("/main/profile");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Post skills Failed",
          text: err,
        });
        console.log(err);
      });
  };

  const handleAsset = async (form) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      body: form,
    });
    const data = await response.json();
    console.log("data", data);
    return data.data.file_url;
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/profile`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
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
          title: "Update Profile Successful",
          text: "You have successfully post profile!",
        });
        router.push("/main/profile");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Update Profile Failed",
          text: err,
        });
        console.log(err);
      });
  };

  const handleSubmitCarrier = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(experience),
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
          title: "Post experience Successful",
          text: "You have successfully post experience!",
        });
        router.push("/main/profile");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Post experience Failed",
          text: err,
        });
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <Navbar />
      <div style={{ backgroundColor: "#5E50A1", height: 311 }}>
        <div className={Styles.content}>
          <section className={Styles.contentleft}>
            <div>
              <Image
                className={Styles.contentimg}
                src={img}
                alt="naim"
                width={150}
                height={150}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                <MdEdit />
                <p>edit</p>
              </div>
              <h3>{profile.name}</h3>
              <p>{profile.job_desk}</p>
              <div style={{ display: "flex" }}>
                <IoLocation />
                <p>{profile.domicile ? profile.domicile : "Indonesia"}</p>
              </div>
              <p>{profile.workplace}</p>
            </div>
            <button type="submit" onClick={handleSubmitProfile}>
              Simpan
            </button>
            <button type="submit">Batal</button>
          </section>
          <section className={Styles.contentright}>
            <div className={Styles.title}>
              <h2>Data Diri</h2>
            </div>
            <hr />
            <form onSubmit={handleSubmitProfile}>
              <div className={Styles.form}>
                <p>Nama Lengkap</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Nama Lengkap "
                  name="name"
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  value={data.name}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Jobdesk</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Jobdesk"
                  name="job_desk"
                  type="text"
                  placeholder="Masukkan Jobdesk"
                  value={data.job_desk}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Domisili</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Domisili"
                  name="domicile"
                  type="text"
                  placeholder="Masukkan Domisili"
                  value={data.domicile}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Tempat Kerja</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Tempat Kerja"
                  name="workplace"
                  type="text"
                  placeholder="Masukkan Tempat Kerja"
                  value={data.workplace}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Deskripsi Singkat</p>
                <textarea
                  style={{
                    color: "black",
                    width: 600,
                    height: 200,
                  }}
                  label="Deskripsi Singkat"
                  name="description"
                  type="text"
                  placeholder="Masukkan Deskripsi Singkat"
                  value={data.description}
                  onChange={handleData}
                />
              </div>
            </form>
            <h2>Skill</h2>
            <hr />
            <form onSubmit={handleSubmitSkills}>
              <div className={Styles.form} style={{ display: "flex" }}>
                <input
                  style={{ color: "black", width: 500, height: 50 }}
                  label="Skill"
                  name="skill_name"
                  type="text"
                  placeholder="Skill"
                  value={skill.skill_name}
                  onChange={handleSkills}
                />
                <button type="submit">Simpan</button>
              </div>
            </form>
            <h2>Pengalaman Kerja</h2>
            <hr />
            <form onSubmit={handleSubmitCarrier}>
              <div className={Styles.form}>
                <p>Posisi</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Posisi"
                  name="position"
                  type="text"
                  placeholder="Masukkan Posisi Pekerjaan"
                  value={experience.position}
                  onChange={handleExperience}
                />
              </div>
              <div className={Styles.form}>
                <p>Nama Perusahaan</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Posisi"
                  name="company"
                  type="text"
                  placeholder="Masukkan Posisi Pekerjaan"
                  value={experience.company}
                  onChange={handleExperience}
                />
              </div>
              <div style={{ display: "flex" }}>
                <div className={Styles.form}>
                  <p>Bulan</p>
                  <input
                    style={{ color: "black", width: 250, height: 50 }}
                    label="bulan"
                    name="work_month"
                    type="text"
                    placeholder="Masukkan Nama perusahaan"
                    value={experience.work_month}
                    onChange={handleExperience}
                  />
                </div>
                <div className={Styles.form}>
                  <p>Tahun</p>
                  <input
                    style={{ color: "black", width: 250, height: 50 }}
                    label="Tahun"
                    name="work_year"
                    type="text"
                    placeholder="Tahun"
                    value={experience.work_year}
                    onChange={handleExperience}
                  />
                </div>
              </div>
              <div className={Styles.form}>
                <p>Deskripsi Singkat</p>
                <textarea
                  style={{ color: "black", width: 600, height: 100 }}
                  label="Deskripsi Singkat"
                  name="description"
                  type="text"
                  placeholder="Deskripsi"
                  value={experience.description}
                  onChange={handleExperience}
                />
              </div>
              <div className={Styles.btn}>
                <button type="submit">Tambah Pengalaman Kerja</button>
              </div>
            </form>
            <h2>portofolio</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className={Styles.form}>
                <p>Nama Aplikasi</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Nama Aplikasi"
                  name="application_name"
                  type="text"
                  placeholder="Masukkan Nama Aplikasi"
                  value={form.application_name}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      application_name: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={Styles.form}>
                <p>Link Repository</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Link Repository"
                  name="link_repository"
                  type="text"
                  placeholder="Masukkan Link Repository"
                  value={form.link_repository}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      link_repository: e.target.value,
                    }))
                  }
                />
              </div>
              <p style={{ marginLeft: 30 }}>Type Repository</p>
              <div style={{ display: "flex" }}>
                <div className={Styles.form} style={{ display: "flex" }}>
                  <input
                    style={{ color: "black", width: 600, height: 50 }}
                    label="Nama Perusahaan"
                    name="application"
                    type="text"
                    placeholder="Masukkan Nama perusahaan"
                    value={form.application}
                    // onChange={handleChange}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        application: e.target.value,
                      }))
                    }
                  />
                  {/* <p>Aplikasi Mobile</p> */}
                </div>
                {/* <div className={Styles.form} style={{ display: "flex" }}>
                <input
                  style={{
                    color: "black",
                    width: 50,
                    height: 30,
                    borderRadius: 50,
                  }}
                  label="Bulan/Tahun"
                  name="Bulan/Tahun"
                  type="checkbox"
                  placeholder="Bulan/Tahun"
                />
                <p>Aplikasi Web</p>
              </div> */}
              </div>
              <div className={Styles.form}>
                <p>Upload Gambar</p>
                <input
                  style={{ color: "black", width: 600, height: 250 }}
                  label="Upload Gambar"
                  name="image"
                  type="file"
                  placeholder="Upload Gambar"
                  // value={form.image}
                  onChange={handleFileChange}
                  // onChange={handleChange}
                />
                {/* <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Upload Gambar"
                  name="image"
                  type="text"
                  placeholder="Masukkan Gambar"
                  value={form.image}
                  onChange={handleChange}
                /> */}
              </div>
              <div className={Styles.btn}>
                <button type="submit">Tambah Pengalaman Kerja</button>
              </div>
            </form>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
