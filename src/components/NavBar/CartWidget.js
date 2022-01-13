import { BsFillCartFill } from 'react-icons/bs';
import { useContexto } from '../Context/CartContext';

export const CartWidget = () => {

    const { cantidadTotal } = useContexto();

    return (
        <h4 className="nav-link cartIcon">
            <BsFillCartFill/>
            {cantidadTotal}
        </h4>
    );
}
