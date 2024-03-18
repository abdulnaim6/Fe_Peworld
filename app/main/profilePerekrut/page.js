"use client";
import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";

function Index() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruiters/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

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
          <MdEdit style={{ marginTop: "170px", marginRight: "10px" }} />
          <p
            style={{ color: "white", marginTop: "170px", marginRight: "10px" }}
          >
            Ubah Latar
          </p>
        </div>
        <div className={Styles.content}>
          {loading ? (
            <div className="flex justify-center mt-4">
              <TailSpin color="#fff" height={50} width={50} />
            </div>
          ) : (
            <>
              <CiUser
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                  marginBottom: "20px",
                  marginLeft: 560,
                }}
              />
              <h3>{profile.company}</h3>
              <h5>{profile.position}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoLocation />
                <p>{profile.city}</p>
              </div>
              <button type="submit">
                <Link href="/main/editProfilePerekrut">Edit Profile</Link>
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
                  <MdEmail />
                  <p>{profile.email}</p>
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
                  <FaInstagram />
                  <p>{profile.instagram}</p>
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
                  <FaPhoneAlt />
                  <p>{profile.phone}</p>
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
                  <CiLinkedin />
                  <p>{profile.linkedin}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div style={{ marginTop: "45em" }}>
        <Footer />
      </div>
    </>
  );
}

export default Index;
