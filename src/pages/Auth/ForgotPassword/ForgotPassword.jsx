import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { sendForgotMail } from "../../../api/query/userQuery";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const forgotValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
    onSuccess: (data) => {
      navigate(`/forgot-password-sent/${email}`);
      setLoading(false);
    },
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
      setLoading(false);
    },
  });

  return (
    <Center minH="100vh" minW="100vw">
      <Card>
        <Link to="/signin">
          <Icon as={AiOutlineArrowLeft} boxSize="6" mb="4" />
        </Link>
        <Text fontWeight="medium" textStyle="h1">
          Forgot Password
        </Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your email address for which account you want to reset your
          password.
        </Text>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            setEmail((prev) => (prev = values.email));
            mutate({ email: values.email });
            setLoading(true);
          }}
          validationSchema={forgotValidationSchema}>
          {() => (
            <Form>
              <Stack spacing={6} mt="8">
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button isLoading={loading} type="submit" w="full">
                  Reset Password
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Center>
  );
};

export default ForgotPassword;
