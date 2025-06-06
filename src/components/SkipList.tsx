import React from 'react';
import { Grid } from '@mui/material';
import SkipCard from './SkipCard';
import { ISkip } from '../types/skip';

interface SkipListProps {
  skips: ISkip[];
  selectedSkip: ISkip | null;
  onSelectSkip: (skip: ISkip) => void;
}

export const SkipList: React.FC<SkipListProps> = ({ 
  skips, 
  selectedSkip, 
  onSelectSkip 
}) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 2 }}
      justifyContent="center"
    >
      {skips.map((skip) => (
        <Grid
          key={skip.id}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onClick={() => onSelectSkip(skip)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkipList;