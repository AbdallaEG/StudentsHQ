import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import { useState } from "react";
function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [degree, setDegree] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [info, setInfo] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const handleDegree = (event) => {
    setDegree(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const handleInfo = (event) => {
    setInfo(event.target.value);
  };
  const onSubmit = (event) => {
    

    event.preventDefault();
    const data = {
      CandidateName: name,
      CandidateEmail: email,
      CandidateNumber: number,
      degree: degree,
      degreeType: type,
      degreeYear: year,
      info: info,
     
    };
    firebase.database().ref("Signups/" + number).set(data);
    history.push("/contact")
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 pb-12 md:pt-24 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-4 pr-2 text-grey font-special pt-8 md:pt-0 ">
                <h1 className="h1">Studentex</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm  font-special mx-auto">
                <form onSubmit={onSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="full-name"
                      >
                        Fornavn og Etternavn{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-input w-full text-gray-300"
                        placeholder="Fornavn og Etternavn"
                        required
                        onChange={handleName}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Epost <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-input w-full text-gray-300"
                        placeholder="you@yourcompany.com"
                        required
                        onChange={handleEmail}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="company-name"
                      >
                        Telefon <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="integer"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-input w-full text-gray-300"
                        placeholder="46336445"
                        required
                        onChange={handleNumber}
                        value={number}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="company-name"
                      >
                        Studieretning <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-input w-full text-gray-300"
                        placeholder="Navn på studiet"
                        required
                        onChange={handleDegree}
                        value={degree}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="country"
                      >
                        Grad
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="country"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-select w-full text-gray-300"
                        value={type}
                        onChange={handleType}
                      >
                        <option>Bachelor</option>
                        <option>Master</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="country"
                      >
                        Studieår
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="country"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-select w-full text-gray-300"
                        value={year}
                        onChange={handleYear}
                      >
                        <option>Første</option>
                        <option>Andre</option>
                        <option>Tredje</option>
                        <option>Fjerde</option>
                        <option>Femte</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="message"
                      >
                        Fagområder du ønsker å jobbe med{" "}
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="focus:outline-none focus:ring focus:border-blue-300 form-textarea w-full text-gray-300"
                        placeholder="Kort om det du brenner for..."
                        onChange={handleInfo}
                        value={info}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    Jeg samtykker å bli kontaktet av Studentex angående et jobb
                    tilbud i henhold til Studentex{" "}
                    <Link
                      to="#"
                      className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                    >
                      personvernregler.
                    </Link>
                    .
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="rounded-3xl btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                        Send inn
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
