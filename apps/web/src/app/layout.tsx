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
		<html lang="en" suppressHydrationWarning data-theme="light">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
				/>
			</head>
			<body>
				<div className="root">{children}</div>
			</body>
		</html>
	);
}
