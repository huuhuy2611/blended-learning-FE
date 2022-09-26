// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function Page404() {
  return (
    <Box>
      <Typography variant="h3" paragraph>
        Sorry, page not found!
      </Typography>
      <NextLink href="/" passHref>
        <Button size="large" variant="contained">
          Go to Home
        </Button>
      </NextLink>
    </Box>
  );
}
