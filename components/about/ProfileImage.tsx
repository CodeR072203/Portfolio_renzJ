"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gradientRingSpin, hoverLiftSmall } from "@/lib/animations";
import { PROFILE } from "@/lib/data";

interface ProfileImageProps {
  size?: number;
}

export function ProfileImage({ size = 176 }: ProfileImageProps) {
  const [errored, setErrored] = useState(false);
  const src = errored ? PROFILE.avatarFallback : PROFILE.profileImage;

  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      whileHover={hoverLiftSmall}
    >
      {/* Animated gradient ring */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-full opacity-80"
        style={{
          background: "conic-gradient(from 0deg, var(--amber), var(--teal), var(--amber))",
        }}
        animate={gradientRingSpin.animate}
        transition={gradientRingSpin.transition}
      />
      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full blur-xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--amber) 0%, transparent 70%)" }}
      />
      {/* Border ring + image */}
      <div className="absolute inset-0 rounded-full border-4 border-bg overflow-hidden">
        <Image
          src={src}
          alt={`${PROFILE.name} — profile photo`}
          fill
          sizes={`${size}px`}
          className="object-cover"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      </div>
    </motion.div>
  );
}
