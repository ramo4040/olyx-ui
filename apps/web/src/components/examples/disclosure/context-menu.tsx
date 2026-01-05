import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui";

export const ContextMenuExample = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        style={{
          display: "grid",
          height: 300,
          width: 300,
          placeItems: "center",
          border: "1px solid var(--color-surface-variant)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuItem>Add to Playlist</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Last</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Favorite</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};
