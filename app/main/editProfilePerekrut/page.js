"use client";
import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { IoLocation } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import img from "@/public/assets/aim.jpg";

function Index() {
  const router = useRouter();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruiters/profile`, {
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

  const [data, setData] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    email: "",
    instagram: "",
    phone: "",
    linkedin: "",
  });

  const handleData = (e) => {
    setData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruiters/profile`, {
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
        router.push("/main/profilePerekrut");
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
  return (
    <>
      <Head>
        <title>Edit Profile Perusahaan</title>
      </Head>
      <Navbar />
      <div style={{ backgroundColor: "#5E50A1", height: 311 }}>
        <div className={Styles.content}>
          <section className={Styles.contentleft}>
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
              {/* <Image src="/edit.svg" alt="edit" width={15} height={15} /> */}
              <MdEdit />
              <p>edit</p>
            </div>
            <h3>{profile.company ? profile.company : "company"}</h3>
            <p>{profile.position ? profile.position : "position"}</p>
            <div style={{ display: "flex" }}>
              {/* <Image
                style={{ marginLeft: 15 }}
                src="/map.svg"
                alt="map"
                height={20}
                width={20}
              /> */}
              <IoLocation />
              <p>{profile.city ? profile.city : "Indonesia"}</p>
            </div>
            <button type="submit" onClick={handleSubmitProfile}>
              Simpan
            </button>
            <button type="submit">
              <Link href="/hire">Batal</Link>
            </button>
          </section>
          <section className={Styles.contentright}>
            <form>
              <div className={Styles.title}>
                <h2>Data Diri</h2>
              </div>
              <hr />
              <div className={Styles.form}>
                <p>Nama Perusahaan</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Nama Perusahaan "
                  name="company"
                  type="text"
                  placeholder="Masukkan Nama Perusahaan"
                  value={data.company}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Bidang</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Bidang"
                  name="position"
                  type="text"
                  placeholder="Masukkan bidang perusahaan"
                  value={data.position}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Domisili</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Domisili"
                  name="city"
                  type="text"
                  placeholder="Masukkan Domisili"
                  value={data.city}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Deskripsi Singkat</p>
                <textarea
                  style={{ color: "black", width: 600, height: 200 }}
                  label="Deskripsi Singkat"
                  name="description"
                  type="text"
                  placeholder="Tuliskan Deskripsi Singkat"
                  value={data.description}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Email</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Masukkan Email"
                  value={data.email}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Instagram</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Instagram"
                  name="instagram"
                  type="text"
                  placeholder="Masukkan Instagram"
                  value={data.instagram}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>No Telephone</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="No Telephone"
                  name="phone"
                  type="text"
                  placeholder="Masukkan No Telephone"
                  value={data.phone}
                  onChange={handleData}
                />
              </div>
              <div className={Styles.form}>
                <p>Linkedin</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Linkedin"
                  name="linkedin"
                  type="text"
                  placeholder="Masukkan Linkedin"
                  value={data.linkedin}
                  onChange={handleData}
                />
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
