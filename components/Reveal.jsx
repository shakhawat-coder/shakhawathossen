"use client";
import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
