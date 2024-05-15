import type { Metadata } from "next/types";

export async function generateMetadata({
	searchParams,
}: {
	searchParams: { page?: string };
}): Promise<Metadata> {
	let canonicalPath = "/";

	if (searchParams.page !== undefined) {
		const paginaNumber = parseInt(searchParams.page, 10);
		if (!isNaN(paginaNumber)) {
			canonicalPath += `?page=${encodeURIComponent(
				paginaNumber.toString()
			)}`;
		}
	}

	console.log(canonicalPath);

	return {
		alternates: {
			canonical: canonicalPath,
		},
	};
}

export default function Home({
	searchParams,
}: {
	searchParams: { page?: string };
}) {
	const { page } = searchParams;

	const getRandomPage = () => {
		// Generate a random page number between 1 and 100 (adjust as needed)
		const randomPage = Math.floor(Math.random() * 100) + 1;
		return randomPage;
	};

	return (
		<div style={pageStyle}>
			<div style={buttonContainerStyle}>
				<a href={`?page=${getRandomPage()}`} style={buttonStyle}>
					Go to a Random Page
				</a>
			</div>
			{page && <div style={pageDisplayStyle}>Current Page: {page}</div>}
			<div style={folderLinkStyle}>
				<a href={`/folder`} style={buttonStyle}>
					Test folder page
				</a>
			</div>
		</div>
	);
}

const pageStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh",
	background: "#f0f0f0",
	paddingTop: "20px",
};

const buttonContainerStyle: React.CSSProperties = {
	marginBottom: "20px",
};

const buttonStyle: React.CSSProperties = {
	display: "inline-block",
	padding: "10px 20px",
	backgroundColor: "blue",
	color: "white",
	fontWeight: "bold",
	textDecoration: "none",
	borderRadius: "5px",
	textAlign: "center",
};

const pageDisplayStyle: React.CSSProperties = {
	fontSize: "18px",
	fontWeight: "bold",
	marginBottom: "20px", // Add margin between Current Page and Test folder
};

const folderLinkStyle: React.CSSProperties = {
	marginTop: "60px", // Add margin above Test folder link
};
