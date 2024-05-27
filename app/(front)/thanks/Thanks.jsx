"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";

const Thanks = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-136px)]">
      <Confetti width={1500} height={700} recycle={false} />
      <h1 className="font-bold text-gray-700 text-6xl max-w-2xl px-4 text-center align-baseline">
        Thank you for your purchase!
      </h1>
    </div>
  );
};

export default Thanks;
