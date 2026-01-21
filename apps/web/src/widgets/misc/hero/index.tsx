import "./style.css";
import { Badge, Button } from "@/components/ui";

export const Hero = () => {
  return (
    <section data-ui="hero">
      <Badge mode="lighter">🎉​ Olyx v1.0 is now available</Badge>

      <h1>Your Complete UI Component Library</h1>
      <p>
        A modern library for building exceptional applications. Flexible,
        performant, and designed to adapt to your brand perfectly.
      </p>
      <div className="actions">
        <Button size="lg">Get Started</Button>
        <Button size="lg" mode="ghost">
          View Components
        </Button>
      </div>
    </section>
  );
};
