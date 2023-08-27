import { useEffect, useState } from "react";
import { IBreed, useGetBreeds } from "../../api/useBreeds";
import { useDispatch, useSelector } from "react-redux";
import {
    setCurrentBreedId,
    setIsBreedsFound,
} from "../../redux/searchImages/sliceSearchImages";
import { usePathname } from "next/navigation";
import { searchValueSelector } from "@/app/redux/searchImages/selectorSearchImages";

const BreedList = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const { breedList } = useGetBreeds();
    const dispatch = useDispatch();
    const router = usePathname();
    const link = "/gallery";
    const isActive = router === link;
    const searchValue = useSelector(searchValueSelector);

    useEffect(() => {
        if (breedList) {
            setBreeds(breedList);
        }
    }, [breedList]);

    useEffect(() => {
        if (searchValue && breeds.length > 0) {
            const foundBreed = breeds
                .filter((breed) =>
                    breed.name.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((breed) => breed.id)
                .join(",");
            console.log(foundBreed);
            if (foundBreed) {
                dispatch(setCurrentBreedId(foundBreed));
                dispatch(setIsBreedsFound(true));
            } else {
                dispatch(setIsBreedsFound(false));
            }

            // setFoundBreeds(searchValue);
        }
    }, [searchValue, breeds, dispatch]);

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
                        ? "bg-white dark:bg-grayLight text-grayDark w-[290px]"
                        : "bg-grayLight dark:bg-transparent-with5 w-[226px] text-grayMedium dark:border-transparent-primaryDark20 dark:border-[2px]"
                } h-[40px] rounded-[10px] py-[8px] pl-[10px] text-[16px]  border-0  outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark`}
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
