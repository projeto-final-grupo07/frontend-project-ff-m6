import styled from "styled-components";

interface ColorRandomProps {
    color: string;
}

export const ThemeProductCard = styled.div`
    width: 250px;

    display: flex;
    flex-direction: column;

    padding: 10px;
`;

export const ThemeTitleProductCard = styled.h3``;

export const ThemeDescriptionProductCard = styled.p``;

export const ThemeDivAuthor = styled.div<ColorRandomProps>`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    

    .initial {
        background-color: var(--${({color}) => color});

        padding: 4px 6px;
        margin-right: 5px;

        border-radius: 50%;

        color: var(--brand4);

        font-size: .8rem;
    }
`;

export const ThemeDivInfoVehicle = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-weight: 500;
    }

    div .km {
        margin-right: 5px;
        color: var(--brand1);
        padding: 5px;

        border-radius: 5px;

        background-color: var(--brand4);
    }

    div .year {
        color: var(--brand1);
        padding: 5px;

        border-radius: 5px;

        background-color: var(--brand4);
    }
`;
