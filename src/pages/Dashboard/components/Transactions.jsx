import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { BsCurrencyBitcoin, BsCurrencyRupee } from "react-icons/bs"
import { Fragment } from "react"
import { Link } from "react-router-dom"

const Transactions = () => {
    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ 81,123.10",
            timestamp: "2025-08-09 7:06PM"
        },
        {
            id: "2",
            icon: BsCurrencyBitcoin,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2025-07-29 12:36PM"
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+81,123.10",
            timestamp: "2025-08-09 7:06PM"
        }
    ]
    return (
        <CustomCard>
            <Text mb="6" fontSize="sm" color="black.80">Recent Transactions</Text>
            <Stack spacing={2}>
                {transactions.map((transaction,i) => (
                    <Fragment key={transaction.id}>
                        {i != 0 && <Divider/>}
                        <Flex gap="4">
                            <Grid
                                placeItems="center"
                                bg="black.5" boxSize={10}
                                borderRadius="full">
                                <Icon as={transaction.icon}></Icon>
                            </Grid>
                            <Flex justify="space-between" w="full">
                                <Stack spacing={0}>
                                    <Text textStyle="h6">{transaction.text}</Text>
                                    <Text textStyle="h6">{transaction.timestamp}</Text>
                                </Stack>
                                <Stack>
                                    <Text textStyle="h6">{transaction.amount}</Text>
                                </Stack>
                            </Flex>
                        </Flex>
                    </Fragment>
                ))}
            </Stack>
            <Link to="/transactions"><Button mt="4" w="full" colorScheme="gray">View All</Button></Link>
        </CustomCard>
    )
}

export default Transactions