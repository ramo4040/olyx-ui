import "./index.css";

function Kbd(props: React.ComponentProps<"kbd">) {
	return <kbd data-slot="kbd" {...props} />;
}

function KbdGroup(props: React.ComponentProps<"div">) {
	return <div data-slot="kbd-group" {...props} />;
}

export { Kbd, KbdGroup };
