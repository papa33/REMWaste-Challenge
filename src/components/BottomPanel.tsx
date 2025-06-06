import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Paper,
  Button, Grid,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ISkip } from "../types/skip";

interface BottomPanelProps {
  open: boolean;
  onClose: () => void;
  skip: ISkip;
}

export const BottomPanel: React.FC<BottomPanelProps> = ({
  open,
  onClose,
  skip
}) => {
  const { 
    size, 
    hire_period_days, 
    transport_cost, 
    per_tonne_cost, 
    price_before_vat, 
    vat,
    postcode,
    area,
    allowed_on_road,
    allows_heavy_waste
  } = skip;
  
  const totalPrice = price_before_vat + vat;
    return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      variant="persistent"
      PaperProps={{
        sx: { 
          height: "45vh",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
          overflow: "hidden"
        }
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box 
          sx={{ 
            width: 50, 
            height: 4, 
            backgroundColor: "#e0e0e0", 
            borderRadius: 2,
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)"
          }} 
        />
        
        <IconButton 
          onClick={onClose}
          sx={{ 
            position: "absolute", 
            top: 8, 
            right: 8 
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ p: 2, pt: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {size} Yard Skip
        </Typography>
        
        <Divider sx={{ my: 1 }} />
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Paper elevation={0} sx={{ p: 1, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TimelapseOutlinedIcon color="primary" fontSize="small" />
                  <Typography variant="body2">
                    {hire_period_days} days hire period
                  </Typography>
                </Stack>
              </Paper>
              
              <Paper elevation={0} sx={{ p: 1, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalShippingIcon color="primary" fontSize="small" />
                  <Typography variant="body2">
                    Transport cost: £{transport_cost || 0}
                  </Typography>
                </Stack>
              </Paper>
              
              <Paper elevation={0} sx={{ p: 1, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon color="primary" fontSize="small" />
                  <Typography variant="body2">
                    Location: {area} ({postcode})
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Paper elevation={0} sx={{ p: 1, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  {allowed_on_road ? 
                    <CheckCircleIcon color="success" fontSize="small" /> : 
                    <CancelIcon color="error" fontSize="small" />
                  }
                  <Typography variant="body2">
                    {allowed_on_road ? "Allowed on road" : "Not allowed on road"}
                  </Typography>
                </Stack>
              </Paper>
              
              <Paper elevation={0} sx={{ p: 1, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  {allows_heavy_waste ? 
                    <CheckCircleIcon color="success" fontSize="small" /> : 
                    <CancelIcon color="error" fontSize="small" />
                  }
                  <Typography variant="body2">
                    {allows_heavy_waste ? "Allows heavy waste" : "No heavy waste"}
                  </Typography>
                </Stack>
              </Paper>
              
              <Paper elevation={0} sx={{ p: 1, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PriceCheckIcon color="primary" fontSize="small" />
                  <Typography variant="body2">
                    Per tonne cost: £{per_tonne_cost || 'N/A'}
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
        
        <Paper 
          elevation={0} 
          sx={{ 
            p: 2, 
            mt: 2, 
            backgroundColor: "#f0f9ff", 
            borderRadius: 2, 
            border: "1px solid #cbe7ff" 
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" color="text.secondary">
                  Before VAT: £{price_before_vat}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • VAT: £{vat}
                </Typography>
              </Stack>
              <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                Total: £{totalPrice}
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              size="medium" 
              sx={{ 
                borderRadius: 2, 
                px: 3,
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                textTransform: 'none'
              }}
            >
              Confirm
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Drawer>
  );
};
