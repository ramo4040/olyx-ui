import { Button } from "@olyx/react";
import "./style.css";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const NotFoundCard = () => {
  return (
    <div data-ui="not-found">
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or may have been moved.</p>
      <Button
        render={
          <Link href="/">
            <HugeiconsIcon icon={ArrowLeft02Icon} />
            Return Home
          </Link>
        }
        nativeButton={false}
      />
    </div>
  );
};
