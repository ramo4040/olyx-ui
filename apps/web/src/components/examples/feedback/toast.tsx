"use client";

import type { ToastType } from "@/components/ui";
import {
  AnchoredToastProvider,
  Button,
  StackedToastProvider,
  stackedToast,
} from "@/components/ui";

export const ToastExamples = () => {
  const addToast = (type: ToastType) => {
    stackedToast.add({
      type,
      title: `This is a ${type} toast.`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    });
  };

  return (
    <div style={{ display: "grid", gap: 20 }}>
      <StackedToastProvider timeout={1000000} />
      <AnchoredToastProvider timeout={1000000} />

      <h4>Stacked Toast</h4>
      <div style={{ display: "flex", gap: 20 }}>
        <Button
          mode="lighter"
          variant="neutral"
          onClick={() => addToast("default")}
        >
          Default
        </Button>

        <Button
          mode="lighter"
          variant="neutral"
          onClick={() => addToast("info")}
        >
          Info
        </Button>

        <Button
          mode="lighter"
          variant="neutral"
          onClick={() => addToast("success")}
        >
          Success
        </Button>

        <Button
          mode="lighter"
          variant="neutral"
          onClick={() => addToast("warning")}
        >
          Warning
        </Button>

        <Button
          mode="lighter"
          variant="neutral"
          onClick={() => addToast("error")}
        >
          Error
        </Button>

        <Button
          mode="lighter"
          variant="neutral"
          onClick={() => addToast("loading")}
        >
          Loading
        </Button>
      </div>
    </div>
  );
};
