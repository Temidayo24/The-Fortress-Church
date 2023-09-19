import Image from "next/image";

const UpdatesCard = ({ classname }) => {
  return (
    <div className="update_card">
      <div className={classname}></div>
      <div className="overlay_img">
        <Image src="" alt="" />
        <Image src="" alt="" />
        <Image src="" alt="" />
      </div>
    </div>
  );
};

export default UpdatesCard;
