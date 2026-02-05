"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@olyx/react/avatar";

const img =
  "https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75";

export default function Particle() {
  return (
    <>
      <Avatar size={32}>
        <AvatarImage src={img} alt="Small avatar" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size={40}>
        <AvatarImage src={img} alt="Default avatar" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size={56}>
        <AvatarImage src={img} alt="Large avatar" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size={72}>
        <AvatarImage src={img} alt="Extra large avatar" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </>
  );
}
