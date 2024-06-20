import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
	title: "switch",
	description: "beauty products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">

			<link rel="icon" href="/logo.jpg" />
			<body>
		
				<main className="relative overflow-hidden">{children}</main>
			
			</body>
		</html>
	);
}