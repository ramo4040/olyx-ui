import "./style.css";

export const Spinner = ({
  size = "sm",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "sm" | "md" | "lg";
}) => {
  return (
    <div data-ui="spinner" data-size={size} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};
