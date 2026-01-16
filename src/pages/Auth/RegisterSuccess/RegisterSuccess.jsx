import {
  Box,
  Button,
  Center,
  Icon,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { verifyEmailAddressSignup } from "../../../api/query/userQuery";

const RegisterSuccess = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();
  const { isSuccess, isLoading } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailAddressSignup({ token }),
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: error,
      });
      navigate("/signup");
    },
  });

  if (isLoading)
    return (
      <Center h="100vh" w="100vw">
        <Spinner />
      </Center>
    );

  return (
    <Center minH="100vh" minW="100vw">
      {isSuccess && (
        <Card>
          <VStack spacing={4}>
            <Icon as={BsPatchCheckFill} color="green" boxSize="48px" />
            <Text fontWeight="medium" textStyle="h4" color="p.black">
              Successfully Registered
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Hurray! You have successfully created your account. Enter the app
              to explore all it's features.
            </Text>
            <Box w="full">
              <Link to="/signin">
                <Button w="full">Sign in</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      )}
    </Center>
  );
};

export default RegisterSuccess;
