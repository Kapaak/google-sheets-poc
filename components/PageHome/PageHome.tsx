import { Box, Container } from "@mui/material";
import Courses from "./Courses/Courses";

const PageHome = () => {
  return (
    <Container maxWidth="lg">
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        sx={{ height: { md: "100vh" } }}
      >
        <Courses />
      </Box>
    </Container>
  );
};
export default PageHome;
