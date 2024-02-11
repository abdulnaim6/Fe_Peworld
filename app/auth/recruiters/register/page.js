"use client"
import React, { useState } from "react";
import Head from "next/head";
import Styles from "./style.module.css";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';


function Index() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    company: "",
    position: "",
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recruiters/register`, {
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

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section className={Styles.right}>
        <form onSubmit={handleSubmit}>
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
              label="email address "
              name="email"
              type="text"
              placeholder="input email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="wrapper-form">
            <p>Perusahaan</p>
            <input
              style={{ color: "black", width: 350, height: 50 }}
              label="Perusahaan "
              name="company"
              type="text"
              placeholder="masukkan nama perusahaan"
              value={form.company}
              onChange={handleChange}
            />
          </div>
          <div className="wrapper-form">
            <p>Jabatan</p>
            <input
              style={{ color: "black", width: 350, height: 50 }}
              label="Jabatan "
              name="position"
              type="text"
              placeholder="Posisi di perusahaan anda"
              value={form.position}
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
      </section>
    </>
  );
}

export default Index;
