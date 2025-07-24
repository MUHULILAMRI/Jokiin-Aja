"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaperPlane, FaFileInvoiceDollar, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Hubungi Kami",
    description: "Kirim detail tugas Anda melalui formulir pemesanan atau kontak yang tersedia.",
    icon: <FaPaperPlane />,
  },
  {
    title: "Dapatkan Penawaran",
    description: "Tim kami akan segera menganalisis tugas dan memberikan penawaran harga terbaik.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "Proses Pengerjaan",
    description: "Setelah konfirmasi, kami akan langsung mengerjakan tugas Anda sesuai brief.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Tugas Selesai",
    description: "Tugas akan dikirimkan kepada Anda sebelum deadline yang telah ditentukan.",
    icon: <FaCheckCircle />,
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

const HowToOrder = () => {
  return (
    <div className="container py-5 my-5">
      <h2 className="text-center section-title">4 Langkah Mudah Pemesanan</h2>
      <div className="row align-items-center justify-content-center">
        {steps.map((step, index) => (
          <div className="col-md-3 mb-4 text-center" key={index}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
              variants={cardVariants}
            >
              <div className="card-icon">{step.icon}</div>
              <h4 className="fw-bold">{step.title}</h4>
              <p className="text-white-50">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link href="/how-to-order" passHref legacyBehavior>
          <a className="btn btn-lg btn-custom">Pesan Sekarang Juga</a>
        </Link>
      </div>
    </div>
  );
};

export default HowToOrder;
