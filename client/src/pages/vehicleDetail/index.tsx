import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useParams } from 'react-router-dom';

export const VehicleDetail = () => {
    const { id } = useParams();
    return (
        <>
            <Navbar />

            <StyledTitle fontSize='Heading-1-700' tag='h1'>
                Olá! essa e a pagina de vehicle
            </StyledTitle>
            <StyledParagraph>{id}</StyledParagraph>
            <Footer />
        </>
    );
};
