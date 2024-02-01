"use client"
import React, { useState } from "react";
import Head from "next/head";
import Styles from "./style.module.css";


function Index() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section className={Styles.right}>
        <form>
          <div className="wrapper-form">
            <p>Name</p>
            <input
              style={{ color: "black", width: 350, height: 50 }}
              label="Name "
              name="name"
              type="text"
              placeholder="input name"
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
            />
          </div>
          <div className="wrapper-form">
            <p>Perusahaan</p>
            <input
              style={{ color: "black", width: 350, height: 50 }}
              label="Perusahaan "
              name="perusahaan"
              type="text"
              placeholder="masukkan nama perusahaan"
            />
          </div>
          <div className="wrapper-form">
            <p>Jabatan</p>
            <input
              style={{ color: "black", width: 350, height: 50 }}
              label="Jabatan "
              name="jabatan"
              type="text"
              placeholder="Posisi di perusahaan anda"
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
