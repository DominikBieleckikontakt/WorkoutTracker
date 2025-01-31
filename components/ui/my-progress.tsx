"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyProgress = ({ value = 0, max = 100, color = "bg-primary" }) => {
  const progress = Math.min((value / max) * 100, 100);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(Math.round(start));
    }, 10);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="relative w-full h-6 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5 }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-800 dark:text-white">
        {displayValue} / {max}
      </span>
    </div>
  );
};

export default MyProgress;
