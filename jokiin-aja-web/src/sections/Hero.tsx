"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center text-center hero-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.h1 variants={itemVariants} className="display-2 fw-bold mb-3">
              Jasa Joki Tugas Nomor #1
            </motion.h1>
            <motion.p variants={itemVariants} className="lead fs-4 mb-4">
              Bebaskan dirimu dari tumpukan tugas. Biarkan kami yang mengerjakan, kamu tinggal terima beres!
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/how-to-order" passHref legacyBehavior>
                <a className="btn btn-lg btn-custom">
                  Pesan Jasa Sekarang
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
