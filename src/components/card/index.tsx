import React from "react";
import { useTheme, View, Text, Link, Flex } from "vcc-ui";
import { Car } from "types";

const Card = ({ id, bodyType, modelName, modelType, imageUrl }: Car) => {
    const theme = useTheme();

    return (
        <View width="21rem">
            <View>
                <Text
                    extend={{
                        color: theme.color.foreground.secondary,
                        textTransform: "uppercase"
                    }}
                    subStyle="emphasis"
                    variant="bates"
                >
                    {bodyType}
                </Text>
                <Flex
                    extend={{
                        "@media (min-width: 48rem)": {
                            flexDirection: "row"
                        },
                    }}
                >
                    <Text subStyle="emphasis" as="h2">
                        {modelName}
                    </Text>
                    <Text
                        extend={{
                            color: theme.color.foreground.secondary,
                            "@media (min-width: 48rem)": {
                                textIndent: "0.25rem"
                            },
                        }}
                    >
                        {modelType}
                    </Text>
                </Flex>
            </View>
            <View paddingTop={1} paddingBottom={1}>
                <img src={imageUrl} alt={modelName} />
            </View>
            <View direction="row" justifyContent="space-evenly">
                <Link href={`/${id}/learn`} arrow="right">
                    LEARN
                </Link>
                <Link href={`/${id}/shop`} arrow="right">
                    SHOP
                </Link>
            </View>
        </View>
    );
};

export default Card;
