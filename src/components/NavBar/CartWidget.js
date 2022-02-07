import { BsFillCartFill } from 'react-icons/bs';
import { useContexto } from '../Context/CartContext';

export const CartWidget = () => {

    const { cantidadTotal } = useContexto();

    return (
        <h5 className="nav-link">
            <BsFillCartFill/>{cantidadTotal}
        </h5>
    );
}
