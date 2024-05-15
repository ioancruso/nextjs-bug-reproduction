import type { Metadata } from "next/types";

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),
};

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
}
