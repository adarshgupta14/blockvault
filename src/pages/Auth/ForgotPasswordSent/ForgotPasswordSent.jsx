import { Box, Center, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const ForgotPasswordSent = () => {
  const { email } = useParams();
  return (
    <Center minH="100vh" minW="100vw">
      <Card
        p={{
          base: "4",
          md: "10",
        }}>
        <VStack spacing={4}>
          <Icon as={BsPatchCheckFill} color="green" boxSize="48px" />
          <Text fontWeight="medium" textStyle="h4" color="p.black">
            Successfully Sent
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            We have sent instructions on how to reset your password on{" "}
            <Box as="b" color="p.black">
              {email}
            </Box>
            . Please follow the instructions from the email.
          </Text>
        </VStack>
      </Card>
    </Center>
  );
};

export default ForgotPasswordSent;
