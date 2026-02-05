"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@olyx/react/avatar";

const img =
  "https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75";

export default function Particle() {
  return (
    <>
      <Avatar shape="circle" size={56}>
        <AvatarImage src={img} alt="Circle avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar shape="square" size={56}>
        <AvatarImage src={img} alt="Square avatar" />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
    </>
  );
}
