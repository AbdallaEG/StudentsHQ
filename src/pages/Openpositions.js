import React from "react";


import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Career from "../partials/Career";
import Cta from "../partials/Cta";
function SignIn() {
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
            <div className=" pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}

              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 font-special">Ledige stillinger</h1>
              </div>

              <Career />
              
              <Cta />
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
