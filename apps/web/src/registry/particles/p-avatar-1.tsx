"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@olyx/react/avatar";

export default function Particle() {
  return (
    <Avatar>
      <AvatarImage
        src="https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75"
        alt="User avatar"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}
