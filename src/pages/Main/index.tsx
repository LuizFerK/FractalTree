import React from 'react';
import { Container } from './styles';

import Line from '../../components/Line';

const initialX = 700;
const initialY = 700;
const initialWidth = 250;
const initialAngle = -90;

const App: React.FC = () => {
  let lines = []
  let angleRight = 70;
  let angleLeft = 105;
  let widthScale = 0.5;
  let positionY = initialY - initialWidth;
  let positionXRight = initialX;
  let positionXLeft = initialX;
  for(let i = 1; i <= 10; i ++){
    let width = initialWidth * widthScale;

    lines.push(
      <>
        <Line
          width={width}
          positionX={positionXRight}
          positionY={positionY}
          angle={-angleRight}
        />
        <Line
          width={width}
          positionX={positionXLeft}
          positionY={positionY}
          angle={-angleLeft}
        />
      </>
    )

    widthScale = widthScale * 0.5;
    positionY = positionY - (width * Math.sin((Math.PI/180) * angleRight));
    positionXRight = positionXRight + (width * Math.cos((Math.PI/180) * angleRight));
    positionXLeft = positionXLeft + (width * Math.cos((Math.PI/180) * angleLeft));
    angleRight = angleRight - 20;
    angleLeft = angleLeft + 20;
  }

  return (
    <Container>
      <Line
        width={initialWidth}
        positionX={initialX}
        positionY={initialY}
        angle={initialAngle}
      />
      {lines}
    </Container>
  )
}

export default App;
