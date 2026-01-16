import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1} height="100vh">
        <TopNav title={title} onOpen={onOpen} />
        <Container
          display="flex"
          justifyContent="center"
          overflowX="hidden"
          overflowY="auto"
          height="calc(100vh - 72px)"
          mt="4"
          maxW={{ base: "90vw", lg: "72vw" }}
          p="0">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
