import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
      <Stack spacing={2}>
        <HStack flexDir={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input mt="-4" placeholder="John" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input mt="-4" placeholder="Doe" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input mt="-4" type="email" placeholder="johndoe@gmail.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea mt="-2" placeholder="Your Message" rows={2} resize="none"/>
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
        <Text color="p.purple" fontSize="lg" fontWeight="medium" mb="-4" mt="1">
          You will recieve response within 24 hourrs of time of submit.
        </Text>
      </Stack>
    </Card>
  );
};

export default ContactCard;
