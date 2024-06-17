import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaWater } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to the World of Lakes
        </Heading>
        <Box boxSize="sm">
          <Image src="/images/lake.jpg" alt="Beautiful Lake" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover the most beautiful lakes around the world. Explore their unique features, stunning landscapes, and the wildlife that inhabits them.
        </Text>
        <Button rightIcon={<FaWater />} colorScheme="blue" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;