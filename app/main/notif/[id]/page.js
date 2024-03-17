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
          <h1 className="text-white text-center font-bold text-3xl">Jobs</h1>
        </div>
      </main>
    </>
  );
}

export default Index;
