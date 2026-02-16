import "./style.css";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" data-ui="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
        <path d="M100 136c11.046 0 20 8.954 20 20v100h-20C44.772 256 0 211.228 0 156v-20Zm156 120H136V156c0-11.046 8.954-20 20-20h100ZM120 100c0 11.046-8.954 20-20 20H0v-20C0 44.772 44.772 0 100 0h20ZM156 0c55.228 0 100 44.772 100 100v20H156c-11.046 0-20-8.954-20-20V0Z" />
      </svg>
    </Link>
  );
};
