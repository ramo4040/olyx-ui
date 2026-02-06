"use client";

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@olyx/react/progress";

export default function Particle() {
  return (
    <Progress value={3} max={10}>
      <ProgressLabel>Tasks completed</ProgressLabel>
      <ProgressValue>{(_formatted, value) => `${value} of 10`}</ProgressValue>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
}
