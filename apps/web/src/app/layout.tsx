import type { Metadata } from "next";

import "../index.css";

export const metadata: Metadata = {
	title: "fluentx",
	description: "fluentx",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
