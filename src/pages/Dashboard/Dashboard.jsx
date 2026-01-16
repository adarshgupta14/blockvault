import { Grid, GridItem, useQuery } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
import { fetchExample } from "../../api/query/exampleQuery";

const Dashboard = () => {
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  })
  if (exampleQuery.isLoading) return <div>Loading...</div>

  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
        gap="4">
        <GridItem
          colSpan={{ base: 1, xl: 2 }}
          maxW={{ base: "90vw", lg: "75vw" }}>
          <PortfolioSection />
        </GridItem>
        <GridItem
          colSpan={1}
          maxW={{
            base: "90vw",
            lg: "75vw",
          }}>
          <PriceSection />
        </GridItem>
        <GridItem
          colSpan={1}
          maxW={{
            base: "90vw",
            lg: "75vw",
          }}>
          <Transactions />
        </GridItem>
        <GridItem
          colSpan={1}
          maxW={{
            base: "90vw",
            lg: "75vw",
          }}>
          <InfoCard
            imgUrl="./dot_bg.svg"
            text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem
          colSpan={1}
          maxW={{
            base: "90vw",
            lg: "75vw",
          }}>
          <InfoCard
            bg="p.purple"
            imgUrl="./grid_bg.svg"
            text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
