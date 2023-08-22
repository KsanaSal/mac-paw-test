import Image from "next/image";
import GirlAndPet from "./assets/images/girl-and-pet 1.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Image
                    src={GirlAndPet}
                    alt="Girl and pet"
                    width={120}
                    height={120}
                />
            </div>
        </main>
    );
}
