import type { SandcastleHatId } from '../sandcastleOptions';
import type { CastleMetrics } from './metrics';

type HatProps = {
  variant: SandcastleHatId;
  metrics: CastleMetrics;
};

function Hat({ variant, metrics }: HatProps) {
  if (variant === 'none') {
    return null;
  }

  const centerX = metrics.bodyX + metrics.bodyWidth / 2;
  const topY = metrics.bodyY - metrics.centerTowerHeight + 12;

  if (variant === 'sunhat') {
    return (
      <g transform={`translate(${centerX} ${topY - 40})`}>
        <ellipse cx="0" cy="20" rx="92" ry="28" fill="#f5d66b" stroke="#b98332" strokeWidth="7" />
        <path d="M-40 16 C-30 -42 34 -42 44 16 Z" fill="#f0bc43" stroke="#b98332" strokeWidth="7" />
      </g>
    );
  }

  if (variant === 'crown') {
    return (
      <g transform={`translate(${centerX - 76} ${topY - 78})`}>
        <path
          d="M0 82 L0 26 L26 50 L44 0 L76 48 L108 0 L126 50 L152 26 L152 82 Z"
          fill="#f4bd35"
          stroke="#a87119"
          strokeLinejoin="round"
          strokeWidth="7"
        />
      </g>
    );
  }

  return (
    <g transform={`translate(${centerX - 62} ${topY - 82}) rotate(-8 62 48)`}>
      <path d="M18 0 H106 L94 94 H30 Z" fill="#4aa5d1" stroke="#1d5e7c" strokeLinejoin="round" strokeWidth="7" />
      <path d="M28 20 H96" stroke="#9bd7ef" strokeLinecap="round" strokeWidth="8" />
    </g>
  );
}

export default Hat;
