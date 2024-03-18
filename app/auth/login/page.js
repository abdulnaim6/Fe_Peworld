"use client";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Bgleft from "@/components/bgLeft";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Index() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
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
        const token = res.data.token;
        const role = res.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully login!",
        });
        router.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err,
        });
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex">
        <section className="bg">
          <div>
            <Bgleft />
          </div>
        </section>
        <section
          id="login-right"
          className="flex-1 flex items-center justify-center mt-8"
        >
          <div className="w-96">
            <div>
              <h1 className="text-2xl font-bold">Halo, People</h1>
              <p className="text-gray-700">Log in into your existing account</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Masukan alamat email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p className="text-blue-500">Forgot Password ?</p>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              >
                <Link href="/">Submit</Link>
              </button>
            </form>
            <p className="mt-4 text-gray-700">
              You dont have an account yet ?
              <span className="text-yellow-500">
                <Link href="/auth/workers/register">Register here </Link>
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Index;
