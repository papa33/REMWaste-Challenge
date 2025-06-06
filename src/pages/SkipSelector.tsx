
import React, { useState } from 'react';
import { skipMockData } from '../data/mock_data';
import { RightPanel } from '../components/RightPanel';
import SkipList from '../components/SkipList';
import { ISkip } from '../types/skip';
import { Grid, Typography } from '@mui/material';
import { AppStepper } from '../components/Stepper';

export const SkipSelector: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<ISkip | null>(null);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  const handleSelectSkip = (skip: ISkip) => {
    if (selectedSkip && selectedSkip.id === skip.id) {
      setSelectedSkip(null);
      setRightPanelOpen(false);
    } else {
      setSelectedSkip(skip);
      setRightPanelOpen(true);
    }
  };

  const handleCloseRightPanel = () => {
    setRightPanelOpen(false);
  };

  return (
    <React.Fragment>
      <Grid
        container
      >
        <Grid
          item
          xs={12}
          sm={selectedSkip && rightPanelOpen ? 2 : 12}
          md={selectedSkip && rightPanelOpen ? 3 : 12}
        >
          {selectedSkip && rightPanelOpen && (
            <RightPanel
              open={rightPanelOpen}
              onClose={handleCloseRightPanel}
              skip={selectedSkip}
              width={400}
            />
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={selectedSkip && rightPanelOpen ? 10 : 12}
          md={selectedSkip && rightPanelOpen ? 9 : 12}>
          <AppStepper />
          <Typography
            variant="h5"
            component="h1"
            align="center"
            sx={{ marginTop: 4, marginBottom: 1 }}
          >
            Choose Your Skip Size
          </Typography>
          <span className="text-center text-gray-600 mb-2">
            Select the skip size that best suits your needs
          </span>
          <SkipList
            skips={skipMockData}
            selectedSkip={selectedSkip}
            onSelectSkip={handleSelectSkip}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}