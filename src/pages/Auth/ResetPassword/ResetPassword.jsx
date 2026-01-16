import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { verifyForgotToken } from "../../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";

const resetValidationSchema = object({
  password: string()
    .min(6, "Password must be of at least 6 characters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPassword = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutationFn: verifyForgotToken,
    enabled: !!token,
    onSettled: () => {
      navigate("/reset-success");
    },
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
      <Card>
        <Text fontWeight="medium" textStyle="h1">
          Reset Password
        </Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your new password.
        </Text>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            mutate({ token, password: values.password });
          }}
          validationSchema={resetValidationSchema}>
          {() => (
            <Form>
              <Stack spacing={4} mt="8">
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">New Password</FormLabel>
                      <Input
                        {...field}
                        name="password"
                        type="password"
                        placeholder="Enter your password..."
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="confirmPassword">
                        Confirm Password
                      </FormLabel>
                      <Input
                        {...field}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password..."
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button type="submit" w="full">
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

export default ResetPassword;
