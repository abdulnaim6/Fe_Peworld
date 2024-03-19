"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FiMapPin } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

function Index() {
  const [hire, setHire] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hire/recruiters`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setHire(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Navbar />
        <div className="bg-purple-800 h-50 flex items-center justify-center">
          <h1 className="text-white text-center font-bold text-3xl">Jobs</h1>
        </div>
        {hire.map((worker, index) => (
          <div key={index} style={{ display: "flex", marginTop: 10 }}>
            <div style={{ marginRight: 100 }}>
              {worker.worker_photo ? (
                <Image
                  // className={Styles.contentimg}
                  src={worker.worker_photo}
                  alt="naim"
                  width={150}
                  height={150}
                />
              ) : (
                <CiUser
                  style={{
                    height: 100,
                    width: 100,
                    marginRight: 20,
                    marginLeft: 30,
                    // marginTop: 50,
                  }}
                />
              )}
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Name :</p>
                <p>{worker.worker_name}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Email :</p>
                <p>{worker.email_request_hire}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Phone :</p>
                <p>{worker.worker_phone}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: 10 }}>Description :</p>
                <p>{worker.desciption_request_hire}</p>{" "}
              </div>
            </div>
          </div>
        ))}

        {/* <Footer /> */}
      </main>
    </>
  );
}

export default Index;
