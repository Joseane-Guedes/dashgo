import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100vw" //Viewport Width
      h="100vh" //Viewport Height
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%" //width
        maxW={360} //maxWidth
        bg="gray.800"
        p="8" //p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4" >
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>

            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"

            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
        </Stack >

        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
