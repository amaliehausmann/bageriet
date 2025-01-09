import { FaRegComments } from "react-icons/fa";

export const ProductCard = ({image, comments, title, subtitle}) => {
  return (
    <div>
        <img src={`${image}`} alt="" />
        <p>{comments}<FaRegComments/></p>
        <h2>{title}</h2>
        {/* Substring sørger for at der kun bliver vist 90 tegn */}
        <p>{subtitle.substring(0, 90) + '...'}</p>
        <button>SE MERE</button>
    </div>
  )
}