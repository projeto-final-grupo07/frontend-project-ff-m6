import styled from 'styled-components'

export const NavbarContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;

	inset: 0;
	padding: 0px 60px;
	height: 80px;

	background: var(--grey10);
	color: var(--grey2);

	border-bottom: 2px solid var(--grey6);
	font-size: 16px;

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.isWide {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	hr {
		border: none;
		width: 2px;
		height: 80px;
		background-color: var(--grey6);
	}

	a {
		color: var(--grey2);
		border-radius: 4px;
		padding: 12px 28px;
		margin: 0px 5px;
	}
	a:hover {
		background-color: var(--grey8);
	}
	.registerBtn {
		border: 2px solid var(--grey4);
	}

	button:hover {
		color: var(--grey4);
	}

	@media (max-width: 700px) {
		padding: 15px;
	}
`

export const NotWide = styled.section`
	background: var(--whiteFixed);
	display: flex;
	flex-direction: column;

	background: var(--grey10);
	color: var(--grey2);

	filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.2));

	a {
		color: var(--grey2);
		margin: 20px 10px;
	}
	.registerBtn {
		text-align: center;
		border: 2px solid var(--grey4);
		border-radius: 4px;
		padding: 10px;
	}

	hr {
		width: 100%;
		height: 2px;
	}
`
