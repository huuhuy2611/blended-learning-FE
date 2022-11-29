import { useClassroomsByUser } from "@/common/hooks/use-classrooms";
import useLocalStorage from "@/common/hooks/use-local-storage";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [userId] = useLocalStorage("userId", "");

  const { data } = useClassroomsByUser(userId);

  return (
    <Box>
      <Grid container spacing={2} alignItems="stretch">
        {data?.map((item, index) => (
          <Grid
            key={index}
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
            sx={{ height: "100%" }}
          >
            <Card
              sx={{ cursor: "pointer", height: "100%" }}
              onClick={() => router.push(`/classroom/${item.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/background-login.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    [Description (update later)]
                  </Typography> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
