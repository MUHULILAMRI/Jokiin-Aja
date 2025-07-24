"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPencilRuler, FaCode, FaFileAlt } from "react-icons/fa";

const services = [
  {
    title: "Joki Tugas Kuliah",
    description: "Mengerjakan berbagai macam tugas kuliah, mulai dari makalah, esai, hingga presentasi.",
    icon: <FaFileAlt />,
  },
  {
    title: "Joki Coding",
    description: "Membantu menyelesaikan tugas coding, bug fixing, hingga pembuatan aplikasi sederhana.",
    icon: <FaCode />,
  },
  {
    title: "Joki Desain",
    description: "Menyediakan jasa desain grafis untuk kebutuhan tugas, seperti poster, infografis, dan lainnya.",
    icon: <FaPencilRuler />,
  },
];

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const Services = () => {
  return (
    <div className="py-5" style={{backgroundColor: "#161616"}}>
      <div className="container">
        <h2 className="text-center section-title">Layanan Populer</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
               <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2 }}
                variants={cardVariants}
              >
                <div className="card text-center h-100 custom-card">
                  <div className="card-body p-4">
                    <div className="card-icon">{service.icon}</div>
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/services" passHref legacyBehavior>
            <a className="btn btn-custom">Lihat Semua Layanan</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
