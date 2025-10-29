import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    // Menggunakan Fragment atau div sebagai container root
    <>
      <Header />

      {/* main adalah elemen semantik untuk konten utama halaman */}
      <main className="min-h-[100vh]">
        {children} {/* Di sini konten halaman (HomePage, dll.) akan dirender */}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
