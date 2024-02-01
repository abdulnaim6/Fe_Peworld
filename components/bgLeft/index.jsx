import Image from "next/image";
import Styles from "./style.module.css";
import image1 from "@/public/assets/agency.png"
import peworld from "@/public/assets/peworld (2).png"

const Bgleft = () => {
  return (
    <>
      <div className={Styles.bg}></div>
      <div className={Styles.left}>
        <Image
          className={Styles.peworld}
          src={peworld}
          alt="peworld"
          width={65}
          height={65}
        />
        <h1>
          Temukan Developer berbakat & terbaik di berbagai bidang keahlian
        </h1>
        <div className={Styles.Imagecontainer}>
          <Image
            src={image1}
            alt="picture agency"
            width={619}
            height={800}
          />
          <div className={Styles.imageOverlay}></div>
        </div>
      </div>
    </>
  );
};

export default Bgleft;