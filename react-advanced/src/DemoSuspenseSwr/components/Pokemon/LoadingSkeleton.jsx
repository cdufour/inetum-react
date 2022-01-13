import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div>
      <Skeleton height={200} width={200} />
    </div>
  );
};

export default LoadingSkeleton;