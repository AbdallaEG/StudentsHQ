import React from "react";
import { Link } from "react-router-dom";
function Career() {
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}

          {/* Job list */}
          <div className="-my-3 font-special" data-aos-id-career>
            {/* 1st Item */}

            <div
              className="py-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-career]"
            >
              <div className="pb-6 border-b border-gray-800">
                <div className="mb-2">
                  <Link
                    className="flex justify-between items-center text-xl font-bold text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    to="/signup"
                  >
                    <span>Full-stack utvikler</span>
                    <svg
                      className="stroke-current flex-shrink-0 ml-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g strokeWidth="2" fill="none">
                        <path d="M1 12h20" />
                        <path strokeLinecap="square" d="M14 5l7 7-7 7" />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="text-lg text-gray-400 mb-3">
                  For vår kunde søker vi etter en full-stack utvikler for et
                  sommerprosjekt. Er du en student og på jakt etter gyllen
                  erfaring innenfor programmering kan vi nå tilby et
                  sommerprosjekt med muligheter for deltidsstilling etter
                  sommeren.
                </div>
                <div className="text-gray-400 flex flex-wrap items-center">
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 flex-shrink-0"
                      vidth="14"
                      height="17"
                      viewBox="0 0 14 17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current text-gray-300"
                        d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      />
                    </svg>
                    <span>Oslo/Remote </span>
                  </div>

                  <div className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="ml-4"
                    >
                      <path
                        fill="#c5d2dc"
                        d=" M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
                      />
                    </svg>
                    <span className="ml-2 ">Sommerprosjekt </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="py-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-career]"
            >
              <div className="pb-6 border-b border-gray-800">
                <div className="mb-2">
                  <Link
                    className="flex justify-between items-center text-xl font-bold text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    to="/signup"
                  >
                    <span>Front-end utvikler</span>
                    <svg
                      className="stroke-current flex-shrink-0 ml-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g strokeWidth="2" fill="none">
                        <path d="M1 12h20" />
                        <path strokeLinecap="square" d="M14 5l7 7-7 7" />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="text-lg text-gray-400 mb-3">
                  På vegne av en av våre klienter søker vi etter en front-end
                  utvikler. Vi ser etter deg som er komfortabel med utvikling av
                  nettsider og har interesse for web-designing.
                </div>
                <div className="text-gray-400 flex flex-wrap items-center">
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 flex-shrink-0"
                      vidth="14"
                      height="17"
                      viewBox="0 0 14 17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current text-gray-300"
                        d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      />
                    </svg>
                    <span>Oslo/Remote </span>
                  </div>

                  <div className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="ml-4"
                    >
                      <path
                        fill="#c5d2dc"
                        d=" M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
                      />
                    </svg>
                    <span className="ml-2 ">8-22 timer/uke</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="py-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-career]"
            >
              <div className="pb-6 border-b border-gray-800">
                <div className="mb-2">
                  <Link
                    className="flex justify-between items-center text-xl font-bold text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    to="/signup"
                  >
                    <span>Growth konsulent</span>
                    <svg
                      className="stroke-current flex-shrink-0 ml-2"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g strokeWidth="2" fill="none">
                        <path d="M1 12h20" />
                        <path strokeLinecap="square" d="M14 5l7 7-7 7" />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="text-lg text-gray-400 mb-3">
                  På vegne av en av våre klienter søker vi nå etter en Growth
                  konsulent. Vi ser etter deg som er opptatt av sosiale medier,
                  markedsføring og brukeropplevelse, samt har interesse for
                  e-commerce.
                </div>
                <div className="text-gray-400 flex flex-wrap items-center">
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 flex-shrink-0"
                      vidth="14"
                      height="17"
                      viewBox="0 0 14 17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current text-gray-300"
                        d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      />
                    </svg>
                    <span>Oslo/Remote </span>
                  </div>
                  <div className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="ml-4"
                    >
                      <path
                        fill="#c5d2dc"
                        d=" M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
                      />
                    </svg>
                    <span className="ml-2 ">8-22 timer/uke</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
