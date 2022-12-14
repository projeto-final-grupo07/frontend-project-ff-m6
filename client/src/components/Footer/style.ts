import styled from 'styled-components'

export const FooterContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;

	bottom: 0;
	padding: 25px 10%;
	gap: 60px;

	background: var(--grey0);
	color: #fff;

	p {
		font-weight: 400;
		font-size: 14px;
	}

	button {
		width: 53px;
		height: 50px;

		background: var(--grey1);
		color: #fff;

		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	button:hover {
		filter: brightness(0.7);
	}

	@media (max-width: 700px) {
		flex-direction: column;
	}
`
