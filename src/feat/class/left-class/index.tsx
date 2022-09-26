import React from "react";
import { Box, List, ListItem, Card, Divider } from "@mui/material";

interface IProps {
  data: { [key: string]: any }[];
}

const LeftClass = (props: IProps) => {
  const { data } = props;

  return (
    <Card>
      <List>
        {data.map((item, index) => (
          <Box>
            <ListItem key={index}>{item.title}</ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Card>
  );
};

export default LeftClass;
