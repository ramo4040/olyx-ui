"use client";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@olyx/react/avatar";

const img =
  "https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75";

export default function Particle() {
  return (
    <>
      <Avatar>
        <AvatarImage src={img} alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
        <AvatarBadge status="online" />
      </Avatar>
      <Avatar>
        <AvatarImage src={img} alt="User avatar" />
        <AvatarFallback>AS</AvatarFallback>
        <AvatarBadge status="busy" />
      </Avatar>
      <Avatar>
        <AvatarImage src={img} alt="User avatar" />
        <AvatarFallback>MK</AvatarFallback>
        <AvatarBadge status="away" />
      </Avatar>
      <Avatar>
        <AvatarImage src={img} alt="User avatar" />
        <AvatarFallback>LM</AvatarFallback>
        <AvatarBadge status="offline" />
      </Avatar>
    </>
  );
}
