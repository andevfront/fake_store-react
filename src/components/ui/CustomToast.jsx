export const CustomToast = ({ image, title }) => {
  return (
    <div className="flex gap-5">
      <figure className="h-14 w-14">
        <img className="h-full w-full object-contain" src={image} alt={title} />
      </figure>
      <p className="flex flex-wrap gap-1 items-center">
        A{" "}
        <b className="inline-block max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis align-middle leading-[inherit]">
          {title}
        </b>{" "}
        succesfully added to Cart!
      </p>
    </div>
  );
};
