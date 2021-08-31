import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
    return (
        <Flex align="center"
            >
            <Box mr="4" textAlign="right">
                <Text> Joseane Guedes </Text>
                <Text color="gray.300" fontSize="small" > 
                joseane_23@hotmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Joseane Guedes" src="https://github.com/Joseane-Guedes.png" />
            </Flex>
    );
}