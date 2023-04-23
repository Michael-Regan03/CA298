import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const DisplayCohorts = (cohorts) => {
    return cohorts.map((elem) => (<div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        <Link to={`/showindividualcohort?cohort=${elem.id}`} >
        {elem.id}
        </Link>

        </Typography>
        <Typography variant="h5" component="div">
          Year: {elem.year}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {elem.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Link to={`/showmodulesdeliveredtoacohort?delivered_to=${elem.id}`} >
          View modules in {elem.id}
        </Link>
        </Typography>
      </CardContent>
    </Card>
      </div>
    ));
  };

export default DisplayCohorts;