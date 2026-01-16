import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu"

const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="4" align={{base: "flex-start", xl: "center"}} flexDir={{base: "column", xl: "row"}} spacing={{base: 4, xl: 0}}>

        <HStack spacing={{base: 0, xl: 16}} align={{base: "flex-start", xl: "center"}} flexDir={{base: "column", xl: "row"}}>
            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">Total Portfolio Value</Text>
                    <Icon as={AiOutlineInfoCircle}></Icon>
                </HStack>
                <Text textStyle="h4" fontWeight="medium">₹ 112,312.24</Text>
            </Stack>

            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">Wallet Balance</Text>
                </HStack>
                <HStack  align={{base: "flex-start", xl: "center"}} flexDir={{base: "column", md: "row"}}>
                    <HStack>
                        <Text textStyle="h4" fontWeight="medium">22.39401000</Text><Tag colorScheme="gray">BTC</Tag>
                    </HStack>
                    <HStack>
                        <Text textStyle="h4" fontWeight="medium">₹ 1300.00</Text><Tag colorScheme="gray">INR</Tag>
                    </HStack>
                </HStack>
            </Stack>
        </HStack>

        <HStack>
            <Button leftIcon={<Icon as={LuArrowDownToLine}/>}>Deposit</Button>
            <Button leftIcon={<Icon as={LuArrowUpToLine}/>}>Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default PortfolioSection