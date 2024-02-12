import React from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagram,  FaPhoneAlt} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Index() {
  return (
    <>
      <Head>
        <title>Edit Profile Perusahaan</title>
      </Head>
      <Navbar />
      <div
        style={{
          backgroundColor: "#5E50A1",
          height: 200,
          width: 1200,
          marginLeft: 60,
          marginTop: 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignContent: "end",
            textAlign: "end",
          }}
        >
          <Image
            style={{ marginTop: "170px", marginRight: "10px" }}
            src="/edit.svg"
            alt="edit"
            width={15}
            height={15}
          />
          <p
            style={{ color: "white", marginTop: "170px", marginRight: "10px" }}
          >
            Ubah Latar
          </p>
        </div>
        <div className={Styles.content}>
          <Image
            style={{
              borderRadius: 70,
              marginBottom: "10px",
              marginLeft: 530,
            }}
            src="/naim.jpg"
            alt="naim"
            width={150}
            height={150}
          />
          <h3>PT. Martabat Jaya Abadi</h3>
          <h5>Financial</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
               <IoLocation />
            {/* <Image
              style={{ marginLeft: 15 }}
              src="/map.svg"
              alt="map"
              height={20}
              width={20}
            /> */}
            <p>Tangerang</p>
          </div>
          <button type="submit">
            <Link href="/editprofilept">Edit Profile</Link>
          </button>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {/* <Image src="/mail.svg" alt="mail" width={25} height={25} /> */}
              <MdEmail />
              <p>martabatjaya@gmail.com</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {/* <Image src="/ig.svg" alt="ig" width={25} height={25} /> */}
              <FaInstagram />
              <p>martabat_jaya</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {/* <Image src="/phn.svg" alt="phn" width={25} height={25} /> */}
              <FaPhoneAlt />
              <p>0821-8190-1821</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {/* <Image src="/li.svg" alt="li" width={25} height={25} /> */}
              <CiLinkedin />
              <p>Martabat Jaya Abadi</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "45em" }}>
        <Footer />
      </div>
    </>
  );
}

export default Index;
