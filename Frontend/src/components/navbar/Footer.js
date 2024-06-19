import React from "react";
import {
  Box,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const bgColor = useColorModeValue("gray.900", "gray.900");
  const textColor = useColorModeValue("gray.100", "gray.100");
  const linkColor = useColorModeValue("blue.300", "blue.300");

  return (
    <Box
      bg={bgColor}
      width="100%"
      mt={4}
      p={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      maxW="1720px"
      mx="auto"
    >
      <Text color={textColor}>© 2024. All rights reserved.</Text>
      <ChakraLink as={Link} to="/dashboard" color={linkColor} fontSize="14px">
        Admin Panel
      </ChakraLink>
    </Box>
  );
};

export default Footer;
