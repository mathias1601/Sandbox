import type { CastleMetrics } from './metrics';

type CastleBaseProps = {
  metrics: CastleMetrics;
};

function CastleBase({ metrics }: CastleBaseProps) {
  const leftTowerX = metrics.bodyX + 22;
  const rightTowerX = metrics.bodyX + metrics.bodyWidth - metrics.sideTowerWidth - 22;
  const centerTowerX = metrics.bodyX + metrics.bodyWidth / 2 - metrics.centerTowerWidth / 2;
  const sideTowerY = metrics.bodyY - metrics.sideTowerHeight + 16;
  const centerTowerY = metrics.bodyY - metrics.centerTowerHeight + 16;

  return (
    <g className="sandcastle-svg-castle">
      <Tower x={leftTowerX} y={sideTowerY} width={metrics.sideTowerWidth} height={metrics.sideTowerHeight} />
      <Tower x={rightTowerX} y={sideTowerY} width={metrics.sideTowerWidth} height={metrics.sideTowerHeight} />
      <Tower x={centerTowerX} y={centerTowerY} width={metrics.centerTowerWidth} height={metrics.centerTowerHeight} hasWindow />

      <rect
        x={metrics.bodyX}
        y={metrics.bodyY}
        width={metrics.bodyWidth}
        height={metrics.bodyHeight}
        rx="18"
        fill="url(#sandcastle-sand-gradient)"
        stroke="#b98233"
        strokeWidth="8"
      />
      <rect x={metrics.bodyX + 4} y={metrics.bodyY + 4} width={metrics.bodyWidth - 8} height={metrics.bodyHeight - 8} rx="14" fill="url(#sandcastle-grain)" />
      <path
        d={`M${metrics.bodyX + metrics.bodyWidth / 2 - 48} ${metrics.bodyY + metrics.bodyHeight}
          L${metrics.bodyX + metrics.bodyWidth / 2 - 48} ${metrics.bodyY + metrics.bodyHeight - 70}
          C${metrics.bodyX + metrics.bodyWidth / 2 - 48} ${metrics.bodyY + metrics.bodyHeight - 132}
          ${metrics.bodyX + metrics.bodyWidth / 2 + 48} ${metrics.bodyY + metrics.bodyHeight - 132}
          ${metrics.bodyX + metrics.bodyWidth / 2 + 48} ${metrics.bodyY + metrics.bodyHeight - 70}
          L${metrics.bodyX + metrics.bodyWidth / 2 + 48} ${metrics.bodyY + metrics.bodyHeight} Z`}
        fill="url(#sandcastle-door-gradient)"
        stroke="#76512b"
        strokeWidth="7"
      />
      <Shell cx={metrics.bodyX + metrics.bodyWidth * 0.24} cy={metrics.bodyY + 68} rotate={-14} />
      <Shell cx={metrics.bodyX + metrics.bodyWidth * 0.75} cy={metrics.bodyY + 86} rotate={12} />
      <Shell cx={metrics.bodyX + metrics.bodyWidth * 0.34} cy={metrics.bodyY + metrics.bodyHeight - 44} rotate={8} />
    </g>
  );
}

type TowerProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  hasWindow?: boolean;
};

function Tower({ x, y, width, height, hasWindow = false }: TowerProps) {
  return (
    <g>
      <Crenels x={x + 8} y={y - 28} width={width - 16} />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="14"
        fill="url(#sandcastle-sand-gradient)"
        stroke="#b98233"
        strokeWidth="8"
      />
      <rect x={x + 4} y={y + 4} width={width - 8} height={height - 8} rx="10" fill="url(#sandcastle-grain)" />
      {hasWindow && (
        <path
          d={`M${x + width / 2 - 22} ${y + 78}
            C${x + width / 2 - 22} ${y + 45} ${x + width / 2 + 22} ${y + 45} ${x + width / 2 + 22} ${y + 78}
            L${x + width / 2 + 22} ${y + 112}
            L${x + width / 2 - 22} ${y + 112} Z`}
          fill="#6e4b2d"
        />
      )}
    </g>
  );
}

type CrenelsProps = {
  x: number;
  y: number;
  width: number;
};

function Crenels({ x, y, width }: CrenelsProps) {
  const blockWidth = width / 4.8;

  return (
    <g fill="#efc66f" stroke="#b98233" strokeWidth="6">
      <rect x={x} y={y} width={blockWidth} height="34" rx="4" />
      <rect x={x + blockWidth * 1.9} y={y} width={blockWidth} height="34" rx="4" />
      <rect x={x + blockWidth * 3.8} y={y} width={blockWidth} height="34" rx="4" />
    </g>
  );
}

type ShellProps = {
  cx: number;
  cy: number;
  rotate: number;
};

function Shell({ cx, cy, rotate }: ShellProps) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      <path d="M-18 10 C-18 -14 18 -14 18 10 Z" fill="#f8ece2" stroke="#ce9d88" strokeWidth="5" />
      <path d="M-8 8 L-3 -8 M0 9 L0 -10 M8 8 L3 -8" stroke="#ce9d88" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

export default CastleBase;
