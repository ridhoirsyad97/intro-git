import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

// 1. HERO SECTION
const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 text-center">
    <div className="w-40 h-40 bg-blue-500 rounded-full mb-8 overflow-hidden border-4 border-blue-400 shadow-2xl">
      <img src="https://via.placeholder.com/150" alt="Ridho Irsyad Fauzan" className="w-full h-full object-cover" />
    </div>
    <h1 className="text-5xl font-extrabold mb-2">Ridho Irsyad Fauzan</h1>
    <h2 className="text-2xl text-blue-400 font-semibold mb-6">Full-Stack Web Developer</h2>
    <p className="max-w-2xl text-gray-300 text-lg mb-10">
      Membangun solusi web yang skalabel dan berkinerja tinggi dengan latar belakang analisis data yang kuat dari pengalaman di sektor energi.
    </p>
    <div className="flex gap-4">
      <a href="#portfolio" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition duration-300">View Portfolio</a>
      <a href="#contact" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-bold transition duration-300">Contact Me</a>
    </div>
  </section>
);

// 2. ABOUT ME
const About = () => (
  <section className="py-24 bg-white px-8 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 border-b-4 border-blue-600 inline-block">About Me</h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Lulusan Fisika Geofisika dari Universitas Indonesia dengan IPK 3.12. Memiliki keahlian dalam analisis data seismik dan pengadaan (procurement) di PT Pertamina Hulu Rokan. Kini fokus mengembangkan aplikasi web menggunakan ekosistem JavaScript modern.
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-bold text-xl mb-4 text-blue-600">Core Values</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Attention to Detail</li>
          <li>Timeliness &amp; Reliability</li>
          <li>Clear Communication</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-4 text-blue-600">Certifications</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>BNSP K3 General Expert</li>
          <li>Python, Data Science &amp; AI Bootcamp</li>
          <li>ISO 9001, 14001, 45001 Expert</li>
        </ul>
      </div>
    </div>
  </section>
);

// 3. SKILLS SECTION
const Skills = () => {
  const tech = [
    { cat: "Front-End", items: ["ReactJS", "Vite", "Tailwind CSS", "TypeScript"] },
    { cat: "Back-End", items: ["Node.js", "Express", "Python", "RESTful API"] },
    { cat: "Tools & DevOps", items: ["Git", "SAP (PO Expert)", "Smart GEP", "I-CAN"] }
  ];
  return (
    <section className="py-20 bg-gray-50 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Technical Expertise</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {tech.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-6 text-blue-600">{s.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, idx) => (
                  <span key={idx} className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. PORTFOLIO (STAR METHOD)
const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-white px-8 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-16 text-center">Portfolio Projects</h2>
    <div className="bg-gray-900 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-600 p-12 flex items-center justify-center">
        <h3 className="text-4xl font-bold">E-commerce Platform Integration</h3>
      </div>
      <div className="md:w-1/2 p-12">
        <p className="text-blue-400 font-bold mb-4">React, Node.js, MongoDB, AWS</p>
        <div className="space-y-6 text-gray-300">
          <p><strong>Situation:</strong> Perusahaan memerlukan platform skalabel untuk mencapai audiens lebih luas dan integrasi inventaris real-time.</p>
          <p><strong>Task:</strong> Membangun komponen front-end dan back-end yang terintegrasi dengan sistem pembayaran klien.</p>
          <p><strong>Action:</strong> Mengembangkan UI responsif dengan React dan membangun RESTful API menggunakan Node.js.</p>
          <p><strong>Result:</strong> Peningkatan penjualan online sebesar 35% dalam 3 bulan pertama.</p>
        </div>
      </div>
    </div>
  </section>
);

// 5. CONTACT SECTION
const Contact = () => (
  <section id="contact" className="py-24 bg-blue-600 text-white px-8 text-center">
    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
    <p className="mb-12 text-blue-100">Tertarik berkolaborasi? Hubungi saya melalui saluran di bawah ini.</p>
    <div className="flex flex-wrap justify-center gap-8 text-xl">
      <a href="mailto:ridhoirsyad97@gmail.com" className="flex items-center gap-2 hover:underline"><FaEnvelope /> ridhoirsyad97@gmail.com</a>
      <p className="flex items-center gap-2"><FaPhone /> +62 813-2299-2977</p>
      <a href="https://linkedin.com/in/ridhoirsyadfauzan" className="flex items-center gap-2 hover:underline"><FaLinkedin /> LinkedIn</a>
    </div>
  </section>
);

const App = () => (
  <div className="scroll-smooth">
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </div>
);

export default App;
