import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";

inject();
function App() {
  return (
    <>
      {inject()}
      <Analytics />
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
