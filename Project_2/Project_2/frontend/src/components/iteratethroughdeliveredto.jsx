import React from 'react';
import { Link } from 'react-router-dom';
import Trim  from './trim.js';

const IterateThroughDeliveredTo = ( delivered_to ) => {
  if (Array.isArray(delivered_to)) {
    return delivered_to.map((elem) => {
      const trimmedElem = Trim(elem);
      return (
        <li key={trimmedElem}>
          <Link to={`/showindividualcohort?cohort=${trimmedElem}`}>
            {trimmedElem}
          </Link>
        </li>
      );
    });
  }
  return <li></li>
};

export default IterateThroughDeliveredTo;
