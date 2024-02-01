import Image from "next/image";
import peworld from "@/public/assets/peworld(3).png"

const Footer = () => {
  return (
    <>
         <div className="bg-purple-800 h-401 flex-shrink-0 justify-center items-center text-center">
            <Image
                className="filter brightness-0 invert-100 m-10 mt-5 pt-5"
                src={peworld}
                alt="peworld"
                width={150}
                height={150}
            />
            <hr className="w-1140 h-1 justify-center items-center m-5" />
            <div className="flex text-white">
                <p className="ml-100">2020 Pewworld. All right reserved</p>
                <p className="ml-750">Phone</p>
                <p className="ml-50">Email</p>
            </div>
        </div>
    </>
  );
};

export default Footer;
