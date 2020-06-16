import styled from 'styled-components';

interface LineProps {
  width: number;
  positionX: number;
  positionY: number;
  angle: number;
}

export const OneLine = styled.div<LineProps>`
  background: #fff;
  border-style: none;
  height: 3px;

  position: absolute;

  width: ${props => props.width}px;
  left: ${props => props.positionX}px;
  top: ${props => props.positionY}px;
  transform: rotate(${props => props.angle}deg);
  transform-origin: top left;
`;
