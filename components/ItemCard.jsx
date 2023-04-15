import Image from "next/image";

const ItemCard = ({ link, image, title, children }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={image} alt={title} width={500} height={500} />
      </a>
      <br />
      <h1 className="text-base font-bold pb-4">{title}</h1>
      <div className="text-base">{children}</div>
    </div>
  );
};

export default ItemCard;
