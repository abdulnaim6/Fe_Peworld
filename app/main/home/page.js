"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { FiMapPin } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`mr-2 px-3 py-1 rounded ${
            currentPage === number ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

function Index() {
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, [search, page]);

  const fetchJobs = () => {
    setLoading(true);
    const queryParams = new URLSearchParams({ limit: 10, search, page });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/?${queryParams}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch("https://fwm17-be-peword.vercel.app/v1/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Navbar />
        <div className="bg-purple-800 h-50 flex items-center justify-center">
          <h1 className="text-white text-center font-bold text-3xl">
            Top Jobs
          </h1>
        </div>

        <div className="w-100 h-20 flex-shrink-0 mt-4 ml-40">
          <div className="search-container flex">
            <input
              className="w-1/2 h-19 border border-gray-300 rounded-l px-4"
              type="text"
              placeholder="Search for any skill"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="w-32 h-50 bg-purple-800 rounded-r text-white ml-5"
              onClick={() => handlePageChange(1)}
            >
              Cari
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center mt-4">
            <TailSpin color="#4B5563" height={50} width={50} />
          </div>
        ) : (
          <>
            {Array.isArray(jobs) &&
              jobs.map((job) => (
                <div className="flex-row flex ml-12 mt-12" key={job.id}>
                  <CiUser style={{ height: 80, width: 80 }} />
                  <div className="ml-3">
                    <h5 className="text-blue-900 text-2xl font-semibold">
                      {job.name}
                    </h5>
                    <p className="text-gray-500 text-base">
                      {job.job_desk ? job.job_desk : "Programmer"}
                    </p>

                    <div className="flex items-center mt-2">
                      <FiMapPin />
                      <p className="ml-2">
                        {job.domicile ? job.domicile : "Indonesia"}
                      </p>
                    </div>

                    <div className="flex-row mt-1">
                      <button className="w-20 h-8 mr-2 bg-yellow-500 rounded">
                        Python
                      </button>
                      <button className="w-20 h-8 mr-2 bg-yellow-500 rounded">
                        Javascript
                      </button>
                      <button className="w-20 h-8 mr-2 bg-yellow-500 rounded">
                        HTML
                      </button>
                      <button className="w-20 h-8 bg-yellow-500 rounded">
                        Postgre
                      </button>
                    </div>
                  </div>

                  <div className="w-190 h-10 flex-shrink-0 bg-purple-800 ml-60 mt-10 text-white text-center justify-center items-center rounded-r rounded-l">
                    <button
                      style={{ borderRadius: 50, marginTop: 10 }}
                      // onClick={() => handleClick(job.id)}
                    >
                      <Link href={`/main/profile/${job.id}`}>
                        Lihat Profile
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            <Pagination
              totalPages={5}
              currentPage={page}
              onPageChange={handlePageChange}
            />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

export default Index;
