"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { FiMapPin } from "react-icons/fi";


function Index() {
  const [jobs, setJobs] = useState([]);
  // const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setJobs(data.data))
      .catch((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   fetch('https://fwm17-be-peword.vercel.app/v1/skills')
  //     .then((response) => response.json())
  //     .then((data) => setSkills(data.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Navbar />
        <div className="bg-purple-800 h-50 flex items-center justify-center">
          <h1 className="text-white text-center font-bold text-3xl">Top Jobs</h1>
        </div>

        <div className="w-100 h-20 flex-shrink-0 mt-4 ml-40">
          <div className="search-container flex">
            <input
              className="w-1/2 h-19 border border-gray-300 rounded-l px-4"
              type="text"
              placeholder="Search for any skill"
            />
            <button className="w-32 h-50 bg-purple-800 rounded-r text-white ml-5">Cari</button>
          </div>
        </div>

        {
        Array.isArray(jobs) &&
         jobs.map((job) => (
          <div className="flex-row flex ml-12 mt-12" key={job.id}>
            <Image
              className="rounded-full"
              src="/assets/aim.jpg"  
              alt="gambar"
              height={80}
              width={80}
            />

            <div className="ml-3">
              <h5 className="text-blue-900 text-2xl font-semibold">{job.name}</h5>
              <p className="text-gray-500 text-base">{job.job_desk}</p>

              <div className="flex items-center mt-2">
              <FiMapPin />
                <p className="ml-2">{job.domicile}</p>
              </div>

              <div className="flex-row mt-1">
              <button className="w-20 h-8 mr-2 bg-yellow-500 rounded">Python</button>
              <button className="w-20 h-8 mr-2 bg-yellow-500 rounded">Javascript</button>
              <button className="w-20 h-8 mr-2 bg-yellow-500 rounded">HTML</button>
              <button className="w-20 h-8 bg-yellow-500 rounded">Postgre</button>
            </div>
            </div>

            <div className="w-160 h-10 flex-shrink-0 bg-purple-800 ml-60 mt-10 text-white text-center justify-center items-center">
              <button>
                <Link href={`/profile/${job.id}`}>Lihat Profile</Link>
              </button>
            </div>
          </div>
        ))}
        <Footer />
      </main>
    </>
  );
}

export default Index;

