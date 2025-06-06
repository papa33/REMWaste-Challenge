import { ISkip } from "../types/skip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import { Chip, Box, Checkbox } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useEffect, useState } from "react";


interface SkipCardProps {
  skip: ISkip;
  isSelected?: boolean;
  onClick?: (skip: ISkip) => void;
}

export default function SkipCard({ skip, isSelected, onClick }: SkipCardProps) {
  const { size, hire_period_days, price_before_vat } = skip;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isSelected) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isSelected]);

  return (
    <div className={`${animate ? "animate-shake" : ""}`}>
      <Card
        sx={{
          maxWidth: 345,
          position: "relative",
          border: isSelected ? "2px solid green" : "1px solid transparent",
          cursor: onClick ? "pointer" : "default",
          transition: "all 0.3s ease",
          "&:hover": {
            border: isSelected ? "2px solid green" : "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }
        }}
        onClick={onClick ? () => onClick(skip) : undefined}
      >
        {isSelected && (
          <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}>
            <Checkbox
              checked={true}
              icon={<CheckCircleOutlineIcon />}
              checkedIcon={<CheckCircleIcon />}
              sx={{
                color: "primary.main"
              }}
              disableRipple
            />
          </Box>
        )}
        <CardMedia
          sx={{ height: 140 }}
          image="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
          title="green iguana"
        ></CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {size} Yard Skip
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: isSelected ? "primary.main" : "background.default",
            color: isSelected ? "primary.contrastText" : "text.primary",
            transition: "background-color 0.3s ease"
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            <TimelapseOutlinedIcon fontSize="small" />
            {hire_period_days} day hire period
          </Typography>
          <Chip
            label={`£${price_before_vat}`}
            color="error"
            variant="filled"
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick(skip);
            }}
          />
        </CardActions>
      </Card>
    </div>
  );
}
