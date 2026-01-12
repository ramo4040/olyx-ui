import "./style.css";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../../core/button";

function Pagination({
  rounded = false,
  variant = "stroke",
  ...props
}: React.ComponentProps<"nav"> & {
  rounded?: boolean;
  variant?: "ghost" | "stroke";
}) {
  return (
    <nav
      aria-label="pagination"
      data-ui="pagination"
      data-rounded={rounded}
      data-variant={variant}
      {...props}
    />
  );
}

function PaginationContent({ ...props }: React.ComponentProps<"ul">) {
  return <ul data-ui="pagination-content" {...props} />;
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-ui="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "asIcon"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  asIcon = true,
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      mode="stroke"
      variant="neutral"
      data-active={isActive}
      size="md"
      asIcon={asIcon}
      render={
        <a
          aria-current={isActive ? "page" : undefined}
          data-slot="pagination-link"
          data-active={isActive}
          {...props}
        />
      }
    />
  );
}

function PaginationPrevious({
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      asIcon={!children}
      {...props}
    >
      <HugeiconsIcon icon={ArrowLeft01Icon} />
      {children}
    </PaginationLink>
  );
}

function PaginationNext({
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label="Go to next page" asIcon={!children} {...props}>
      {children}
      <HugeiconsIcon icon={ArrowRight01Icon} />
    </PaginationLink>
  );
}

function PaginationEllipsis({ ...props }: React.ComponentProps<"span">) {
  return (
    <Button
      asIcon
      size="md"
      variant="neutral"
      mode="stroke"
      data-slot="pagination-ellipsis"
      render={
        <span aria-hidden {...props}>
          <HugeiconsIcon icon={MoreHorizontalIcon} />
        </span>
      }
    />
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
