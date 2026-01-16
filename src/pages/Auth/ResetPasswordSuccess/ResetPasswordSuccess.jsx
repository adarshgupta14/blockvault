import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResetPasswordSuccess = () => {
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
            Password Reset Done
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            Now you can access your account.<br/>Enjoy the features.
          </Text>
          <Box w="full">
            <Link to="/signin">
              <Button w="full">Signin</Button>
            </Link>
          </Box>
        </VStack>
      </Card>
    </Center>
  );
};

export default ResetPasswordSuccess;
