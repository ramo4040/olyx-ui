import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
} from "@/components/ui";

export const AvatarExamples = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			<div style={{ display: "flex", gap: 8 }}>
				<Avatar size={50}>
					<AvatarImage src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80" />
					<AvatarFallback>LT</AvatarFallback>
				</Avatar>

				<Avatar size={50} shape="square">
					<AvatarImage src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80" />
					<AvatarFallback>LT</AvatarFallback>
					<AvatarBadge status="online" />
				</Avatar>

				<Avatar size={50}>LT</Avatar>
			</div>

			<div style={{ display: "flex", gap: 8 }}>
				<Avatar size={50}>
					<AvatarGroupCount>+10</AvatarGroupCount>
				</Avatar>

				<AvatarGroup>
					<Avatar size={50}>
						<AvatarImage src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80" />
						<AvatarFallback>LT</AvatarFallback>
					</Avatar>
					<Avatar size={50}>
						<AvatarImage src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=128&dpr=2&q=80" />
						<AvatarFallback>JS</AvatarFallback>
					</Avatar>
					<Avatar size={50}>
						<AvatarImage src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=128&dpr=2&q=80" />
						<AvatarFallback>MS</AvatarFallback>
					</Avatar>

					<Avatar size={50}>
						<AvatarGroupCount>+10</AvatarGroupCount>
					</Avatar>
				</AvatarGroup>
			</div>
		</div>
	);
};
