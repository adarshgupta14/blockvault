import {
  Box,
  Button,
  Center,
  Icon,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { IoMdMail } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { sendVerificationMail } from "../../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const RegisterEmailVerify = () => {
  const toast = useToast();
  const location = useLocation();
  const [loading, setLoading] = useState(false)
  const email = location.state?.email ?? "";

  console.log(location);
  if (email == "") {
    return (
      <Center minH="100vh" minW="100vw">
        <Card textAlign="center">Invalid Email</Card>
      </Center>
    );
  }

  const { mutate } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,
    onSuccess: (data) => {
      console.log(data);
      setLoading(false)
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

  return (
    <Center minH="100vh" minW="100vw">
      <Card>
        <VStack spacing={4}>
          <Icon as={IoMdMail} color="p.purple" boxSize="48px" />
          <Text fontWeight="medium" textStyle="h4" color="p.black">
            Email Verification
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            Wee have sent you an email verification to{" "}
            <Box as="b" color="p.black">
              {email}
            </Box>
            . If you didn't recieve it, click the button below.
          </Text>
          <Button
            w="full"
            variant="outline"
            onClick={() => {
              mutate(email);
              setLoading(true)
            }}
            isLoading={loading}>
            Resend
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default RegisterEmailVerify;
