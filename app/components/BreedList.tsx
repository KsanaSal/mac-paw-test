import { useEffect, useState } from "react";
import { IBreed, useGetBreeds } from "../api/useBreeds";
import { breedsSelector } from "../redux/breeds/selectorBreeds";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBreedId } from "../redux/breeds/sliceBreeds";

const BreedList = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const { breedList } = useGetBreeds();
    const test = useSelector(breedsSelector);
    console.log(test);
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
                console.log(e.target.value);
            }}
            name="breeds"
            defaultValue={"allBreeds"}
            className="bg-grayLight w-[226px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
        >
            <option value="allBreeds">All breeds</option>
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
