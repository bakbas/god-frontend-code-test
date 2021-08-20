import React, { Suspense, ReactChild } from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

interface Props {
    children: ReactChild;
}

const Providers = ({ children }: Props) => {
    return (
        <Suspense fallback="Loading Providers">
            <StyleProvider>
                <ThemePicker variant="light">
                    {children}
                </ThemePicker>
            </StyleProvider>
        </Suspense>
    );
};

export default Providers;
