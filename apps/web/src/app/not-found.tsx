import type { Metadata } from "next";
import { MainNavbar, NotFoundCard } from "@/widgets/misc";

export const metadata: Metadata = {
  description:
    "The page you're looking for doesn't exist or may have been moved.",
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <MainNavbar />
      <NotFoundCard />
    </>
  );
}
