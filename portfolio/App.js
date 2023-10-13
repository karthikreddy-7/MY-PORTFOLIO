import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
inject();
function App() {
  inject();
  return (
    <>
      <Analytics />
      {inject()}
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
