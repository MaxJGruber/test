import { Typography, Container } from "@mui/material";
import SampleLayout from "layouts/SampleLayout";
import SampleDrawer from "drawers/SampleDrawer";
import SampleToggleDrawerButton from "components/SampleToggleDrawerButton";

const Index = () => (
  <Container>
    {/* SDGs inside this container */}
    <Typography variant="h2" component="h1">
      Hello World!
    </Typography>
    <SampleToggleDrawerButton />
  </Container>
);

export async function getStaticProps() {
  // Write API calls inside this getStaticProps...
  return {
    props: { test: "toto" },
  };
}

Index.Layout = SampleLayout;
Index.layoutProps = () => ({ Drawer: <SampleDrawer /> });

export default Index;
