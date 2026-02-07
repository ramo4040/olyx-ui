"use client";

import { StatusBadge } from "@olyx/react/status-badge";

export default function Particle() {
  return (
    <>
      <StatusBadge status="success">Active</StatusBadge>
      <StatusBadge status="warning">Pending</StatusBadge>
      <StatusBadge status="failed">Failed</StatusBadge>
      <StatusBadge status="info">New</StatusBadge>
      <StatusBadge status="disabled">Inactive</StatusBadge>
    </>
  );
}
