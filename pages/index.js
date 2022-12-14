import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import ChatBox from "../components/ChatBox";

export default function Home() {
	return (
		<Container>
			<Head>
				<title>whatsapp clone</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Main>
				<Sidebar />
				<ChatBox />
			</Main>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #e4e2de;
	z-index: -1;
	::after {
		content: "";
		background-color: #00a884;
		width: 100%;
		height: 15vh;
		z-index: 0;
		position: absolute;
		top: 0;
	}
`;

const Main = styled.main`
	display: flex;
	background-color: white;
	width: 90%;
	height: 95%;
	z-index: 1;
	box-shadow: 1px 1px 5px #b0b0b0;
`;
