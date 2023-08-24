import Image from "next/image";

const Breeds = () => {
    const images = [
        {
            src: "/path/to/first-image.jpg",
            alt: "Image 0",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/second-image.jpg",
            alt: "Image 1",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/third-image.jpg",
            alt: "Image 2",
            width: 200,
            height: 200,
        },

        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 14",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 15",
            width: 200,
            height: 200,
        },

        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 5",
            width: 200,
            height: 200,
        },

        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 14",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 15",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 16",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 17",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 18",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 19",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 20",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 20",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 20",
            width: 200,
            height: 200,
        },
        // Add more images as needed
    ];

    const chunkSize = 10;
    const chunkedImages = [];

    for (let i = 0; i < images.length; i += chunkSize) {
        const chunk = images.slice(i, i + chunkSize);
        chunkedImages.push(chunk);
    }

    return (
        <div className="grid grid-cols-3 gap-5 w-[640px]">
            {chunkedImages.map((chunk) =>
                chunk.map((image, index) => (
                    <div
                        data-index={index}
                        key={index}
                        className={`bg-slate-400 rounded-[20px] overflow-hidden ${
                            index % 10 === 0
                                ? "col-span-1 row-span-2"
                                : index % 9 === 0
                                ? "col-span-1 row-span-1"
                                : index % 8 === 0
                                ? "col-span-2 row-span-2"
                                : index % 7 === 0
                                ? "col-span-1 row-span-2"
                                : index % 6 === 0
                                ? "col-span-1 row-span-1"
                                : index % 5 === 0
                                ? "col-span-1 row-span-1"
                                : index % 4 === 0
                                ? "col-span-1 row-span-1"
                                : index % 3 === 0
                                ? "col-span-2 row-span-2"
                                : index % 2 === 0
                                ? "col-span-1 row-span-1"
                                : index !== 0 && index % 1 === 0
                                ? "col-span-1 row-span-1"
                                : "col-span-1 row-span-2"
                        }`}
                    >
                        {" "}
                        {image.alt}
                        <Image
                            width={image.width}
                            height={image.height}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default Breeds;
