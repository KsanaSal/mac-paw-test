import Image from "next/image";
import GirlAndPet from "./assets/images/girl-and-pet 1.png";

export default function Home() {
    return (
        <main className="flex h-[900px] relative w-[775px] items-center">
            <div className="bg-primaryLight dark:bg-transparent-with5 w-[680px] h-[840px] rounded-[20px] absolute right-[30px]"></div>
            <Image
                src={GirlAndPet}
                alt="Girl and pet"
                width={775}
                height={900}
                className="w-full h-full z-10 absolute"
            />
        </main>
    );
}
