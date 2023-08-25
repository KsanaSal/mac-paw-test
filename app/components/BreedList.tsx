import { useEffect, useState } from "react";
import { IBreed, useGetBreeds } from "../api/useBreeds";
import { useDispatch } from "react-redux";
import { setCurrentBreedId } from "../redux/searchImages/sliceSearchImages";

const BreedList = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const { breedList } = useGetBreeds();
    const dispatch = useDispatch();

    useEffect(() => {
        if (breedList) {
            setBreeds(breedList);
        }
    }, [breedList]);

    return (
        <select
            onChange={(e) => {
                dispatch(setCurrentBreedId(e.target.value));
            }}
            name="breeds"
            defaultValue={""}
            className="bg-grayLight w-[226px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
        >
            <option value="">All breeds</option>
            {breeds &&
                breeds.length > 0 &&
                breeds.map((breed) => (
                    <option value={breed.id} key={breed.id}>
                        {breed.name}
                    </option>
                ))}
        </select>
    );
};

export default BreedList;
