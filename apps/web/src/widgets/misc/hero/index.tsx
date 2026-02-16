import Link from "next/link";
import "./style.css";
import { Badge, Button } from "@olyx/react";

export const Hero = () => {
  return (
    <section data-ui="hero" aria-labelledby="hero-heading">
      <Badge mode="lighter">🎉​ Olyx v1.0 is now available</Badge>

      <h1 id="hero-heading">Modern React Component Library Built on Base UI</h1>
      <p>
        50+ accessible, composable components styled with native CSS and HCT
        color system. Copy, paste, and own your UI.
      </p>
      <div className="actions">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href={{ pathname: "/docs" }}>Get Started</Link>}
        />
        <Button
          size="lg"
          mode="ghost"
          nativeButton={false}
          render={
            <Link href={{ pathname: "/docs/components/accordion" }}>
              View Components
            </Link>
          }
        />
      </div>
    </section>
  );
};
