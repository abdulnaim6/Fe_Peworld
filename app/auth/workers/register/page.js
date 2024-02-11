"use client"
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Bgleft from "@/components/Bgleft";
import Styles from "./style.module.css";
import Register from "@/app/auth/recruiters/register/page";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

function Index() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/register`, {
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
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });
      router.push("/auth/login")
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: err,
      });
      console.log(err);
    })
  };

    const [activeTab, setActiveTab] = useState("Regis Pekerja");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <main style={{ display: "flex" }}>
        <section>
          <Bgleft />
        </section>
        <section className={Styles.right}>
          <div className={Styles.content}>
            <h1>Halo, People</h1>
            <p>Log in into your excisting account</p>
            <div className={Styles.tabs}>
              <h4
                onClick={() => handleTabClick("Regis Pekerja")}
                className={
                  activeTab === "Regis Pekerja" ? Styles.activeTab : ""
                }
              >
                Register Pekerja
              </h4>
              <h4
                onClick={() => handleTabClick("Regis Perekrut")}
                className={
                  activeTab === "Regis Perekrut" ? Styles.activeTab : ""
                }
              >
                Register Perekrut
              </h4>
            </div>
          </div>
          {activeTab === "Regis Pekerja" && (
            <form onSubmit={handleSubmit}>
              <div>
                <div className="wrapper-form">
                  <p>Name</p>
                  <input
                    style={{ color: "black", width: 350, height: 50 }}
                    label="Name "
                    name="name"
                    type="text"
                    placeholder="input name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <p>Email</p>
                  <input
                    style={{ color: "black", width: 350, height: 50 }}
                    label="email "
                    name="email"
                    type="text"
                    placeholder="input email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <p>Phone Num</p>
                  <input
                    style={{ color: "black", width: 350, height: 50 }}
                    label="Phone Num "
                    name="phone"
                    type="text"
                    placeholder="input phone number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <p>Password</p>
                  <input
                    style={{ color: "black", width: 350, height: 50 }}
                    label="password "
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <p>Confirm Password</p>
                  <input
                    style={{ color: "black", width: 350, height: 50 }}
                    label="confirm password "
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#FBB017",
                  width: 350,
                  height: 50,
                  borderRadius: 10,
                }}
              
              >
                {/* <Link href="/"> */}
                Register
                {/* </Link> */}
              </button>
            </form>
          )}
          {activeTab === "Regis Perekrut" && (
            <div className={Styles.loginPerekrut}>
              <Register />
            </div>
          )}
          <p>Forgot Password ?</p>
          <div>
            {/* <Button
              type="submit"
              style={{
                backgroundColor: "#FBB017",
                width: 350,
                height: 50,
                borderRadius: 10,
              }}
              text="Register"
            /> */}
          </div>
          <p>
            Do you already have an account?
            <span style={{ color: "#FBB017" }}>
              <Link href="/auth/login">Enter here</Link>
            </span>
          </p>
        </section>
      </main>
    </>
  );
}

export default Index;
