import { useEffect, useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import LeftClassroom from "./left-classroom";
import PostDetails from "./right-classroom/post-details";
import { useRouter } from "next/router";
import { usePortsByClassroom } from "@/common/hooks/use-post";
import { PostItem } from "@/common/types/post.type";
import useDebounce, {
  SEARCH_DEBOUNCE_TIMEOUT,
} from "@/common/hooks/use-debounce";
import CustomSnackbar from "@/common/components/snackbar";
import { OrderApi } from "@/common/types/order.type";

const Classroom = () => {
  const router = useRouter();
  const classroomId = router.query.id as string;

  if (!classroomId) {
    return <pre>Loading...</pre>;
  }

  const [keySearch, setKeySearch] = useState("");
  const debounceKeySearch = useDebounce(keySearch, SEARCH_DEBOUNCE_TIMEOUT);
  const [orderPosts, setOrderPosts] = useState<OrderApi>("DESC");

  const { data: dataPosts, refetch } = usePortsByClassroom({
    classroomId: classroomId,
    keySearch: debounceKeySearch,
    order: orderPosts,
  });

  const [postSelected, setPostSelected] = useState<PostItem | null>(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const [labelSnackbar, setLabelSnackbar] = useState("");

  const handleShowPostDetails = (id: string) => {
    const tempPostSelected = dataPosts.find((item: PostItem) => item.id === id);
    const indexPost = dataPosts.findIndex((item: PostItem) => item.id === id);
    setSelectedPostIndex(indexPost);
    setPostSelected(tempPostSelected);
  };

  useEffect(() => {
    if (!dataPosts) return;

    const indexPost = dataPosts.findIndex(
      (item: PostItem) => item.id === postSelected?.id
    );

    if (indexPost >= 0) {
      setSelectedPostIndex(indexPost);
    }

    setPostSelected(dataPosts[indexPost >= 0 ? indexPost : selectedPostIndex]);
  }, [dataPosts]);

  useEffect(() => {
    if (!labelSnackbar) return;

    const funcInterval = setInterval(() => {
      setLabelSnackbar("");
    }, 2000);
    return () => {
      clearInterval(funcInterval);
    };
  }, [labelSnackbar]);

  return (
    <>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}

      <Card sx={{ height: "100%", p: 3 }}>
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{ height: "fit-content" }}>
            <Box sx={{ width: "100%", background: "orange" }}>[Header]</Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                height: "calc(100vh - 96px)",
              }}
            >
              <LeftClassroom
                selectedPostIndex={selectedPostIndex}
                keySearch={keySearch}
                onSearch={(value) => setKeySearch(value)}
                data={dataPosts}
                onClick={handleShowPostDetails}
                refetchData={() => refetch()}
                order={orderPosts}
                setOrder={setOrderPosts}
              />
            </Box>
          </Grid>

          {postSelected && (
            <Grid item xs={8}>
              <Box sx={{ height: "calc(100vh - 96px)", overflowY: "auto" }}>
                <PostDetails
                  data={postSelected || {}}
                  refetchData={(label: string) => {
                    if (label) {
                      setLabelSnackbar(label);
                    }
                    refetch();
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Card>
    </>
  );
};

export default Classroom;
