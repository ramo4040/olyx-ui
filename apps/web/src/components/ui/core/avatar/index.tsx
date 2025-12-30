import "./style.css";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

type AvatarProps = AvatarPrimitive.Root.Props & {
  size?: number;
  shape?: "circle" | "square";
};

const Avatar = ({
  children,
  size = 40,
  shape = "circle",
  ...props
}: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-shape={shape}
      tabIndex={0}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
};

const AvatarFallback = ({
  children,
  ...props
}: AvatarPrimitive.Fallback.Props) => {
  return (
    <AvatarPrimitive.Fallback data-slot="avatar-fallback" {...props}>
      {children}
    </AvatarPrimitive.Fallback>
  );
};

const AvatarImage = ({ children, ...props }: AvatarPrimitive.Image.Props) => {
  return (
    <AvatarPrimitive.Image data-slot="avatar-image" {...props}>
      {children}
    </AvatarPrimitive.Image>
  );
};

type AvatarBadgeProps = React.ComponentProps<"span"> & {
  status?: "online" | "offline" | "busy" | "away";
};

const AvatarBadge = ({ status = "online", ...props }: AvatarBadgeProps) => {
  return <span data-slot="avatar-status" data-status={status} {...props} />;
};

const AvatarGroupCount = ({ ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="avatar-group-count" {...props} />;
};

const AvatarGroup = ({ ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="avatar-group" {...props} />;
};

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroupCount,
  AvatarGroup,
};
