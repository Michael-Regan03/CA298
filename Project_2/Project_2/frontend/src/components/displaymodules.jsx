import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import IterateThroughDeliveredTo from "./iteratethroughdeliveredto.jsx";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const  DisplayModules = (modules) => {
    return modules.map((elem) => (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Link to={`/showindividualmodule?module=${elem.code}`} >
                {elem.code}
            </Link>
        </Typography>
        <Typography variant="h5" component="div">
            {elem.full_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {elem.ca_split}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Cohorts that deliver this module: <ul>{ IterateThroughDeliveredTo(elem.delivered_to) }</ul>
        </Typography>
      </CardContent>
    </Card>
    
    ));
  };

export default DisplayModules;