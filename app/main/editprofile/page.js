import React  from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/navbar";
import img from "@/public/assets/aim.jpg"
import { MdEdit } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function Index() {
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
                <h3>naim</h3>
                <p>programming</p>
                <div style={{ display: "flex" }}>
                <IoLocation />
                  <p>Tangerang</p>
                </div>
                <p>Freelance</p>
              </div>
            <button type="submit" >
              <Link href="/profile">Simpan</Link>
            </button>
            <button type="submit">
              <Link href="/hire">Batal</Link>
            </button>
          </section>
          <section className={Styles.contentright}>
            <div className={Styles.title}>
              <h2>Data Diri</h2>
            </div>
            <hr />
            <div className={Styles.form}>
              <p>Nama Lengkap</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Nama Lengkap "
                name="name"
                type="text"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>
            <div className={Styles.form}>
              <p>Jobdesk</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Jobdesk"
                name="profesi"
                type="text"
                placeholder="Masukkan Jobdesk"
              />
            </div>
            <div className={Styles.form}>
              <p>Domisili</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Domisili"
                name="location"
                type="text"
                placeholder="Masukkan Domisili"
              />
            </div>
            <div className={Styles.form}>
              <p>Tempat Kerja</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Tempat Kerja"
                name="company"
                type="text"
                placeholder="Masukkan Tempat Kerja"
              />
            </div>
            <div className={Styles.form}>
              <p>Deskripsi Singkat</p>
              <textarea
                style={{ color: "black", width: 600, height: 200 }}
                label="Deskripsi Singkat"
                name="description"
                type="text"
                placeholder="Masukkan Deskripsi Singkat"
              />
            </div>
            <h2>Skill</h2>
            <hr />
            <div className={Styles.form} style={{ display: "flex" }}>
              <input
                style={{ color: "black", width: 500, height: 50 }}
                label="Skill"
                name="skill"
                type="text"
                placeholder="Skill"
              />
              <button type="submit">
                Simpan
              </button>
            </div>
            <h2>Pengalaman Kerja</h2>
            <hr />
            <div className={Styles.form}>
              <p>Posisi</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Posisi"
                name="profesi"
                type="text"
                placeholder="Masukkan Posisi Pekerjaan"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className={Styles.form}>
                <p>Nama Perusahaan</p>
                <input
                  style={{ color: "black", width: 250, height: 50 }}
                  label="Nama Perusahaan"
                  name="company"
                  type="text"
                  placeholder="Masukkan Nama perusahaan"
                />
              </div>
              <div className={Styles.form}>
                <p>Bulan/Tahun</p>
                <input
                  style={{ color: "black", width: 250, height: 50 }}
                  label="Bulan/Tahun"
                  name="date"
                  type="text"
                  placeholder="Bulan/Tahun"
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
              />
            </div>
            <div className={Styles.btn}>
              <button type="submit" >
                Tambah Pengalaman Kerja
              </button>
            </div>
            <h2>portofolio</h2>
            <hr />
            <div className={Styles.form}>
              <p>Nama Aplikasi</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Nama Aplikasi"
                name="namaAplikasi"
                type="text"
                placeholder="Masukkan Nama Aplikasi"
              />
            </div>
            <div className={Styles.form}>
              <p>Link Repository</p>
              <input
                style={{ color: "black", width: 600, height: 50 }}
                label="Link Repository"
                name="linkRepo"
                type="text"
                placeholder="Masukkan Link Repository"
              />
            </div>
            <p style={{ marginLeft: 30 }}>Type Repository</p>
            <div style={{ display: "flex" }}>
              <div className={Styles.form} style={{ display: "flex" }}>
                <input
                  style={{ color: "black", width: 50, height: 30 }}
                  label="Nama Perusahaan"
                  name="typeportofolio"
                  type="checkbox"
                  placeholder="Masukkan Nama perusahaan"
                />
                <p>Aplikasi Mobile</p>
              </div>
              <div className={Styles.form} style={{ display: "flex" }}>
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
              </div>
            </div>
            <div className={Styles.form}>
              <p>Upload Gambar</p>
              <input
                style={{ color: "black", width: 600, height: 250 }}
                label="Upload Gambar"
                name="Upload Gambar"
                type="file"
                placeholder="Upload Gambar"
              />
            </div>
            <div className={Styles.btn}>
              <button type="submit" >
                Tambah Pengalaman Kerja
              </button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;