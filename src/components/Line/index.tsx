import React from 'react';

import { OneLine } from './styles';

interface LineProps {
  width: number;
  positionX: number;
  positionY: number;
  angle: number;
}

const Line: React.FC<LineProps> = ({ width, positionX, positionY, angle }) => {
  return (
    <OneLine width={width} positionX={positionX} positionY={positionY} angle={angle} />
  )
}

export default Line;