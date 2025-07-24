"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaTags } from "react-icons/fa";

const features = [
  {
    title: "Cepat & Tepat Waktu",
    description: "Kami menjamin pengerjaan tugas yang cepat dan sesuai dengan deadline yang Anda berikan.",
    icon: <FaBolt />,
  },
  {
    title: "Terpercaya & Aman",
    description: "Privasi dan keamanan data Anda adalah prioritas utama kami. Semua informasi dijamin kerahasiaannya.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Harga Terjangkau",
    description: "Kami menawarkan harga yang kompetitif dan ramah di kantong mahasiswa tanpa mengurangi kualitas.",
    icon: <FaTags />,
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

const WhyUs = () => {
  return (
    <div className="container py-5 my-5">
      <h2 className="text-center section-title">Kenapa Memilih JOKIIN-AJA?</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.div variants={cardVariants}>
                <div className="card text-center h-100 custom-card">
                  <div className="card-body p-4">
                    <div className="card-icon">{feature.icon}</div>
                    <h5 className="card-title fw-bold">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
