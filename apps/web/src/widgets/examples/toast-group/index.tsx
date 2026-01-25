"use client";

import "./style.css";
import { Button, stackedToast } from "@olyx/react";

export const ToastGroup = () => {
  return (
    <div data-ui="toast-group">
      <Button
        mode="lighter"
        variant="primary"
        onClick={() =>
          stackedToast.add({
            type: "default",
            title: "Hey there!",
            description: "Just checking if you're still awake. You good?",
          })
        }
      >
        Say Hi
      </Button>
      <Button
        mode="lighter"
        variant="primary"
        onClick={() =>
          stackedToast.add({
            type: "success",
            title: "Nailed it!",
            description: "You did the thing. Your parents would be proud.",
          })
        }
      >
        Done
      </Button>
      <Button
        mode="lighter"
        variant="primary"
        onClick={() =>
          stackedToast.add({
            type: "info",
            title: "Fun fact",
            description: "Octopuses have three hearts. Now you know.",
          })
        }
      >
        Info
      </Button>
    </div>
  );
};
