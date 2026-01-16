import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Stack minW="full" overflowX="hidden">
        <Flex justify="end" mb="2">
          <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
        </Flex>
        <Card borderRadius="1rem">
          <Tabs variant="line" colorScheme="purple" position="relative">
            <Box position="relative">
              <TabList
                py="1"
                px={{base: "0.5", lg: "2"}}
                display="flex"
                justifyContent="space-between"
                w="full">
                <HStack>
                  {tabs.map((tab) => (
                    <Tab key={tab.name} px={{base: "1", md: "4"}} display="flex" gap="2">
                      {tab.name}{" "}
                      <Tag colorScheme="gray" borderRadius="full">
                        {tab.count}
                      </Tag>
                    </Tab>
                  ))}
                </HStack>
                <InputGroup maxW="200px" opacity={{base: "0", lg: "1"}} pr="6">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={BsSearch} />
                  </InputLeftElement>
                  <Input type="tel" placeholder="Search..." />
                </InputGroup>
              </TabList>
              <TabIndicator
                mt="-1px"
                height="2px"
                bg="purple.500"
                position="absolute"
                bottom="0"
              />
            </Box>
            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Stack>
    </DashboardLayout>
  );
};

export default Transaction;
