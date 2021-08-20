import React from "react";
import { View, Logo } from "vcc-ui";

const Header = () => {
    return (
        <View
            extend={{
                padding: "2rem",
                textAlign: "center"
            }}
        >
            <Logo type="spreadmark" height={20} />
        </View>
    );
};

export default Header;
