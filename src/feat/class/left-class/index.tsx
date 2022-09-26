import React from "react";
import { Box, List, ListItem, Card, Divider } from "@mui/material";

interface IProps {
  data: { [key: string]: any }[];
  onClick: (id: number) => void;
}

const LeftClass = (props: IProps) => {
  const { data, onClick } = props;

  return (
    <Card sx={{ height: "100%" }}>
      <Box sx={{ height: "100%", overflow: "auto" }}>
        <List>
          {data.map((item, index) => (
            <Box>
              <ListItem key={index} onClick={() => onClick(item.id)}>
                {item.title}
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default LeftClass;
