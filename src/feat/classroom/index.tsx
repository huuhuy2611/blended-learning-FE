import { useEffect, useMemo, useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import LeftClassroom from "./left-classroom";
import PostDetails from "./right-classroom/post-details";
import { useRouter } from "next/router";
import { usePostsByClassroom } from "@/common/hooks/use-post";
import { PostItem } from "@/common/types/post.type";
import useDebounce, {
  SEARCH_DEBOUNCE_TIMEOUT,
} from "@/common/hooks/use-debounce";
import CustomSnackbar from "@/common/components/snackbar";
import { OrderApi } from "@/common/types/order.type";
import BasicTabs, { TabItem } from "@/common/components/tabs";
import Syllabus from "./syllabus";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";

const TAB_TYPE = ["LIST_POSTS", "SYLLABUS"] as const;
type TabType = typeof TAB_TYPE[number];

interface TabItemClassroom extends TabItem {
  type: TabType;
}

const Classroom = () => {
  const router = useRouter();
  const classroomId = router.query.id as string;

  if (!classroomId) {
    return <pre>Loading...</pre>;
  }

  const [keySearch, setKeySearch] = useState("");
  const debounceKeySearch = useDebounce(keySearch, SEARCH_DEBOUNCE_TIMEOUT);
  const [orderPosts, setOrderPosts] = useState<OrderApi>("DESC");

  const { data: dataPosts, refetch } = usePostsByClassroom({
    classroomId: classroomId,
    keySearch: debounceKeySearch,
    order: orderPosts,
  });

  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();
  const [tabIndex, setTabIndex] = useState(0);

  const [postSelected, setPostSelected] = useState<PostItem | null>(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);

  const handleShowPostDetails = (id: string) => {
    const tempPostSelected = dataPosts.find((item: PostItem) => item.id === id);
    const indexPost = dataPosts.findIndex((item: PostItem) => item.id === id);
    setSelectedPostIndex(indexPost);
    setPostSelected(tempPostSelected);
  };

  const tabItems = useMemo<TabItemClassroom[]>(() => {
    return [
      {
        type: "LIST_POSTS",
        label: (
          <Typography variant="subtitle1" sx={{ p: 2 }}>
            List posts
          </Typography>
        ),
        render: <></>,
      },
      {
        type: "SYLLABUS",
        label: (
          <Typography variant="subtitle1" sx={{ p: 2 }}>
            Syllabus
          </Typography>
        ),
        render: <></>,
      },
    ];
  }, []);

  const renderTabItem = () => {
    const typeCurrentTab = tabItems[tabIndex].type;

    if (typeCurrentTab === "LIST_POSTS") {
      return (
        <>
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
        </>
      );
    }

    if (typeCurrentTab === "SYLLABUS") {
      return <Syllabus />;
    }

    return null;
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

  return (
    <>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}

      <Card sx={{ height: "100%", p: 3 }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <BasicTabs
                tabs={tabItems}
                tab={tabIndex}
                onChange={(index) => setTabIndex(index)}
                TabsProps={{ variant: "fullWidth" }}
              />
            </Box>
          </Grid>
          {renderTabItem()}
        </Grid>
      </Card>
    </>
  );
};

export default Classroom;
