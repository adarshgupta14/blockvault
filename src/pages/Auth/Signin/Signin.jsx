import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Field, Formik } from "formik";
import { data, Link } from "react-router-dom";
import { object, string } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "@tanstack/react-query";
import { signinUser } from "../../../api/query/userQuery";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const signinValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be of at least 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  const toast = useToast();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false)
  const { mutate } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      const { token } = data;
      if (token) {
        login(token);
        setLoading(false)
      }
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container p="0">
      <Center minH="100vh" minW="100vw">
        <Card>
          <Text fontWeight="medium" textStyle="h1">
            Welcome Back
          </Text>
          <Text textStyle="p2" color="black.60" mt="2">
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              mutate(values);
              setLoading(true)
            }}
            validationSchema={signinValidationSchema}>
            {() => (
              <Form>
                <Stack spacing={2} mt="6">
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
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
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
                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>
                    <Link to="/forgot-password">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forgot Password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button isLoading={loading} type="submit" w="full">
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button mt="3" w="full" variant="outline">
                        Create an Account
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
