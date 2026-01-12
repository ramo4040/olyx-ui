import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui";

export const PaginationExample = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Pagination rounded>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          {Array.from({ length: 7 }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" data-active={index === 4}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Pagination variant="ghost">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious>previous</PaginationPrevious>
          </PaginationItem>
          {Array.from({ length: 7 }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" data-active={index === 4}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext>next</PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Pagination variant="stroke">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          {Array.from({ length: 7 }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" data-active={index === 4}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
