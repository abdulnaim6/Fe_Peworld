import React from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { IoLocation } from "react-icons/io5";


function Index() {
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
              src="/naim.jpg"
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
              <Image src="/edit.svg" alt="edit" width={15} height={15} />
              <p>edit</p>
            </div>
            <h3>PT. Martabat Jaya Abadi</h3>
            <p>Financial</p>
            <div style={{ display: "flex" }}>
              {/* <Image
                style={{ marginLeft: 15 }}
                src="/map.svg"
                alt="map"
                height={20}
                width={20}
              /> */}
              <IoLocation />
              <p>Jakarta Barat</p>
            </div>
            <button type="submit" >
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
                  name="perusahaan"
                  type="text"
                  placeholder="Masukkan Nama Perusahaan"
                />
              </div>
              <div className={Styles.form}>
                <p>Bidang</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Bidang"
                  name="bidang"
                  type="text"
                  placeholder="Masukkan bidang perusahaan"
                />
              </div>
              <div className={Styles.form}>
                <p>Domisili</p>
                <input
                  style={{ color: "black", width: 600, height: 50 }}
                  label="Domisili"
                  name="kota"
                  type="text"
                  placeholder="Masukkan Domisili"
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
