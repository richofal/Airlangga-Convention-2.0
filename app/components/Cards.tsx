import ReadMoreButton from "./ReadMoreButton";

export default function Cards({
  title,
  description,
  image,
  imageSize = "100%", // Default image size
  color = "#0A3981", // Default color
  titleColor = "#FFFFF",
  bodyColor = "#FFFFF",
}: {
  title: string;
  description: string;
  image?: string;
  imageSize?: string; // Optional image size parameter
  color?: string; // Optional color parameter
  titleColor?: string;
  bodyColor?: string;
}) {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 rounded-3xl py-5 shadow-lg"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-center">
        {image && (
          <img
            className="flex flex-col items-center justify-center"
            src={image}
            alt=""
            style={{ width: imageSize }}
          />
        )}
        <p
          className={`${
            image ? "pt-4" : "pt-0"
          } text-wrap font-bold uppercase self-start`}
          style={{ color: titleColor }}
        >
          {title}
        </p>
        <p className="text-xs pb-3 pt-1" style={{ color: bodyColor }}>
          {description}
        </p>
        <ReadMoreButton url="#" width="100%" />
      </div>
    </div>
  );
}
