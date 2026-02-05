"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@olyx/react/avatar";

const img =
  "https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75";

export default function Particle() {
  return (
    <AvatarGroup>
      <Avatar size={46}>
        <AvatarImage src={img} alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar size={46}>
        <AvatarImage src={img} alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar size={46}>
        <AvatarImage src={img} alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar size={46}>
        <AvatarGroupCount>+5</AvatarGroupCount>
      </Avatar>
    </AvatarGroup>
  );
}
