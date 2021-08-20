import React, { ReactChild } from "react";
import { View } from "vcc-ui";
import Header from "components/header";

interface Props {
    children: ReactChild;
}

const Layouts = ({ children }: Props) => {
    return (
        <View>
            <Header />
            <View
                extend={{
                    padding: "1rem",
                    "@media (min-width: 48rem)": {
                        padding: "2rem"
                    }
                }}
            >
                {children}
            </View>
        </View>
    );
};

export default Layouts;
