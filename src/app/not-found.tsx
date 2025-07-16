"use client";
import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import { AuroraBackground } from "./components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="min-h-screen relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          잘못된 경로입니다.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          404 Not Found
        </div>
        <Link href="/" passHref legacyBehavior>
          <button className="bg-blue-600 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            홈으로 돌아가기
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo;
