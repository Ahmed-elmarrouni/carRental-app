import { Box, Heading, Text } from "@chakra-ui/react";

const WelcomeSection = () => {
  return (
    <Box
      padding="20px"
      backgroundColor="gray.900"
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading size="3xl" color="white" marginBottom="20px">
        <span style={{ color: "#FFD700" }}>Discover Car Rentals</span> at
        Exceptional Rates
      </Heading>
      <Text marginRight="15%" fontSize="lg" color="gray.300">
        Explore our extensive range of modern vehicles. Enjoy competitive prices
        and exceptional service every day.
      </Text>
    </Box>
  );
};

export default WelcomeSection;
