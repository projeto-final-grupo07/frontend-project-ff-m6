import Logo from "../Logo";
import {
    ThemeDescriptionProductCard,
    ThemeDivAuthor,
    ThemeDivInfoVehicle,
    ThemeProductCard,
    ThemeTitleProductCard,
} from "./style";

interface ProductCardProps {
    title: string;
    description: string;
    img: string;
    name: string;
    km: number;
    year: number;
    price: number;
}

const ProductCard = ({
    title,
    description,
    img,
    name,
    km,
    year,
    price,
}: ProductCardProps) => {
    const initial = name.split("")[0].toUpperCase();

    const randomColor = "random" + (1 + Math.floor(Math.random() * 12));
    return (
        <ThemeProductCard>
            
            <img src={img} alt="Image of the vehicle" />
            <ThemeTitleProductCard>{title}</ThemeTitleProductCard>
            <ThemeDescriptionProductCard>
                {description}
            </ThemeDescriptionProductCard>
            <ThemeDivAuthor color={randomColor}>
                <span className="initial">{initial}</span>
                <span>{name}</span>
            </ThemeDivAuthor>
            <ThemeDivInfoVehicle>
                <div>
                    <span className="km">{km} KM</span>
                    <span className="year">{year}</span>
                </div>
                <span>
                    {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>
            </ThemeDivInfoVehicle>
        </ThemeProductCard>
    );
};

export default ProductCard;
