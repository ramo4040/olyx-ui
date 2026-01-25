import "./style.css";
import { Button, Spinner } from "@olyx/react";

export const LoadingCard = () => {
  return (
    <div data-ui="loading-card">
      <div className="spinner">
        <Spinner />
      </div>

      <h3>Just a moment...</h3>
      <p>Working our magic. This should only take a few seconds.</p>

      <Button variant="primary" mode="lighter">
        Cancel
      </Button>
    </div>
  );
};
