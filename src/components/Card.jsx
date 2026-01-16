import { Card as ChakraCard } from "@chakra-ui/react";

const Card = ({ children, ...props }) => {
  return (
    <ChakraCard
      bg="white"
      p={{
        base: "4",
        md: "6",
      }}
      borderRadius="1rem"
      m="1rem"
      w={{ base: "full", md: "456px" }}
      boxShadow={{
        base: "none",
        md: "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
      {...props}>
        {children}
      </ChakraCard>
  );
};

export default Card;
