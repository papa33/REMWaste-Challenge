import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ISkip } from "../types/skip";

interface RightPanelProps {
  open: boolean;
  onClose: () => void;
  skip: ISkip;
  width?: number | string;
}

export const RightPanel: React.FC<RightPanelProps> = ({
  open,
  onClose,
  skip,
  width = 400
}) => {
    const {id} =skip
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="persistent"
      PaperProps={{
        sx: { width }
      }}
    >
      <Box
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography variant="h6">{`Skip ID: ${id}`}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};
