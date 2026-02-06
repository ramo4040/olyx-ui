"use client";

import { Progress } from "@olyx/react/progress";
import { useEffect, useState } from "react";

export default function Particle() {
  const [value, setValue] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25)),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Progress value={value} />;
}
