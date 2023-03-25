import Image from "next/image";

const Img = () => {
  return (
    <Image
      src={`../public/images/profile.jpeg`}
      height={144}
      width={144}
      alt="wmx"
    />
  );
};

export default Img;
