import {
  useClassrooms,
  useClassroomsByUser,
} from "@/common/hooks/use-classrooms";
import useLocalStorage from "@/common/hooks/use-local-storage";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";

const AdminReports = () => {
  const router = useRouter();
  const [userRole] = useLocalStorage("userRole", "");
  const [userId] = useLocalStorage("userId", "");

  const { data: dataClassrooms } = useClassrooms();
  const { data: dataClassroomsByUser } = useClassroomsByUser(userId);

  const filteredClassrooms = useMemo(() => {
    if (userRole === "TEACHER") {
      return dataClassroomsByUser;
    }

    return dataClassrooms;
  }, [userRole, dataClassrooms, dataClassroomsByUser]);

  return (
    <>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Report Page
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {filteredClassrooms?.map((item, index) => (
          <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
            <Card
              sx={{ cursor: "pointer", height: "100%" }}
              onClick={() => router.push(`/admin/reports/${item.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/634.jpg"
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
    </>
  );
};

export default AdminReports;
