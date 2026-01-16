import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

const PriceSection = () => {
  const timestampsH = ["9:15 AM", "9:30 AM", "9:45 AM", "10:00 AM", "10:15 AM"];
  const timestampsD = ["9:15 AM", "11:00 AM", "12:30 AM", "2:00 PM", "3:30 PM"];
  const datestampsW = ["22 Jul", "24 Jul", "26 Jul", "28 Jul", "30 Jul"];
  const datestampsM = ["1 Jul", "8 Jul", "16 Jul", "23 Jul", "30 Jul"];
  return (
    <CustomCard>
      <Flex
        justify="space-between"
        align="start"
        flexDir={{ base: "column", sm: "row" }}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack spacing={2}>
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green.500">
                <Icon fontSize="sm" as={BsArrowUpRight}></Icon>
                <Text fontSize="sm">22%</Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack py={{base: "4", md: "0"}}>
          <Button leftIcon={<Icon as={HiPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={HiMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="2px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                _focus={{ outline: "none" }}
                _hover={{ outline: "none", borderColor: "transparent" }}
                key={tab}
                fontSize="sm"
                p="4px"
                borderRadius="4">
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image width="100%" src="./graph.svg" mt="1rem"></Image>
            <HStack justify="space-between">
              {timestampsH.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image width="100%" src="./graph.svg" mt="1rem"></Image>
            <HStack justify="space-between">
              {timestampsD.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image width="100%" src="./graph.svg" mt="1rem"></Image>
            <HStack justify="space-between">
              {datestampsW.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image width="100%" src="./graph.svg" mt="1rem"></Image>
            <HStack justify="space-between">
              {datestampsM.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
