"use client";

import { Button } from "@olyx/react/button";
import { stackedToast } from "@olyx/react/toast";

export default function Particle() {
  return (
    <>
      <Button
        variant="neutral"
        mode="stroke"
        onClick={() =>
          stackedToast.success({
            title: "Changes saved",
            description: "Your profile has been updated.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="neutral"
        mode="stroke"
        onClick={() =>
          stackedToast.error({
            title: "Something went wrong",
            description: "Please try again later.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="neutral"
        mode="stroke"
        onClick={() =>
          stackedToast.info({
            title: "New update available",
            description: "Version 2.4 is ready to install.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="neutral"
        mode="stroke"
        onClick={() =>
          stackedToast.warning({
            title: "Session expiring",
            description: "Your session expires in 5 minutes.",
          })
        }
      >
        Warning
      </Button>
    </>
  );
}
