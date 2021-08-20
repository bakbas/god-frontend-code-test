import React, { useState, useEffect } from "react";
import { View, SelectInput } from "vcc-ui";

import API from "services/api";
import Carousel from "components/carousel";
import { Car } from "types";

interface Data {
    data: Car[];
}

const HomePage = () => {
    const [allCars, setAllCars] = useState<Car[]>([]);
    const [cars, setCars] = useState<Car[]>([]);
    const [bodyTypes, setBodyTypes] = useState<string[]>([]);
    const [value, setValue] = useState("all");

    useEffect(() => {
        (async () => {
            const { data }: Data = await API.getCars();

            const categories = data
                .map((d) => d.bodyType)
                .filter((v, i, a) => a.indexOf(v) === i);

            setBodyTypes(categories);
            setAllCars(data);
        })();
    }, []);

    useEffect(() => {
        setCars(
            value === "all"
                ? allCars
                : allCars.filter((car) => car.bodyType === value)
        );
    }, [allCars, value]);

    return (
        <>
            <View
                alignSelf="flex-end"
                marginBottom={2}
                extend={{ minWidth: "10rem" }}
            >
                <SelectInput
                    value={value}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                        setValue(e.target.value)
                    }
                    label="Select body type"
                >
                    <option value="all">ALL</option>
                    {bodyTypes.map((type: string) => (
                        <option key={type} value={type}>
                            {type.toUpperCase()}
                        </option>
                    ))}
                </SelectInput>
            </View>
            <Carousel items={cars} />
        </>
    );
};

export default HomePage;
