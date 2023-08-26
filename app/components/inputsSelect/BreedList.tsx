import { useEffect, useState } from "react";
import { IBreed, useGetBreeds } from "../../api/useBreeds";
import { useDispatch } from "react-redux";
import { setCurrentBreedId } from "../../redux/searchImages/sliceSearchImages";
import { usePathname } from "next/navigation";

const BreedList = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const { breedList } = useGetBreeds();
    const dispatch = useDispatch();
    const router = usePathname();
    const link = "/gallery";
    const isActive = router === link;

    useEffect(() => {
        if (breedList) {
            setBreeds(breedList);
        }
    }, [breedList]);

    return (
        <div className="flex flex-col">
            {isActive && (
                <label
                    htmlFor="breeds"
                    className="text-[10px] font-medium uppercase text-grayMedium ml-[10px]"
                >
                    breed
                </label>
            )}
            <select
                onChange={(e) => {
                    dispatch(setCurrentBreedId(e.target.value));
                }}
                id="breeds"
                name="breeds"
                defaultValue={""}
                className={`${
                    isActive
                        ? "bg-white text-grayDark w-[290px]"
                        : "bg-grayLight w-[226px] text-grayMedium"
                } h-[40px] rounded-[10px] py-[8px] pl-[10px] text-[16px]  border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark`}
            >
                <option value="">{isActive ? "None" : "All breeds"}</option>
                {breeds &&
                    breeds.length > 0 &&
                    breeds.map((breed) => (
                        <option value={breed.id} key={breed.id}>
                            {breed.name}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default BreedList;
