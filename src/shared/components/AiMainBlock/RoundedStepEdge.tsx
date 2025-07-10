import { EdgeProps } from 'reactflow';

const OFFSET_X = 50;
const OFFSET_Y = 50;
const RADIUS = 10;

export default function RoundedStepEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd }: EdgeProps) {
  // const marker = getMarkerEnd(markerEnd, 'target');

  const isRightward = targetX > sourceX;
  const isDownward = targetY > sourceY;

  const midX1 = isRightward ? sourceX + OFFSET_X : sourceX - OFFSET_X;
  const midY1 = sourceY;

  const midX2 = midX1;
  const midY2 = isDownward ? midY1 + OFFSET_Y : midY1 - OFFSET_Y;

  const cornerBeforeFinal = isRightward ? targetX - RADIUS : targetX + RADIUS;
  const verticalOffset = isDownward ? RADIUS : -RADIUS;

  const path = [
    // 1. Start
    `M ${sourceX},${sourceY}`,

    // 2. Horizontal to just before 1st corner
    `L ${midX1 - (isRightward ? RADIUS : -RADIUS)},${midY1}`,

    // 3. Rounded corner (start: horizontal → vertical)
    `Q ${midX1},${midY1} ${midX1},${midY1 + (isDownward ? RADIUS : -RADIUS)}`,

    // 4. Vertical to just before 2nd corner
    `L ${midX2},${midY2 - (isDownward ? RADIUS : -RADIUS)}`,

    // 5. Rounded corner (vertical → horizontal)
    `Q ${midX2},${midY2} ${midX2 + (isRightward ? RADIUS : -RADIUS)},${midY2}`,

    // 6. Horizontal to just before target corner
    `L ${cornerBeforeFinal},${midY2}`,

    // 7. Rounded corner (horizontal → final vertical)
    `Q ${targetX},${midY2} ${targetX},${midY2 + verticalOffset}`,

    // 8. Final vertical to targetY
    `L ${targetX},${targetY}`,
  ].join(' ');

  return (
    <g>
      <path
        id={id}
        className="react-flow__edge-path"
        d={path}
        fill="none"
        stroke="#222"
        strokeWidth={2}
        markerEnd={markerEnd}
      />
    </g>
  );
}
