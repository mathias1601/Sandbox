import type { SandcastleGlassesId } from '../sandcastleOptions';
import type { CastleMetrics } from './metrics';

type GlassesProps = {
  variant: SandcastleGlassesId;
  metrics: CastleMetrics;
};

function Glasses({ variant, metrics }: GlassesProps) {
  if (variant === 'none') {
    return null;
  }

  const centerX = metrics.bodyX + metrics.bodyWidth / 2;
  const centerY = metrics.bodyY - 28;
  const lensPath =
    variant === 'round'
      ? 'M-30 0 A30 30 0 1 0 30 0 A30 30 0 1 0 -30 0'
      : 'M-34 -18 C-14 -30 24 -26 36 -12 C32 20 14 34 -12 30 C-34 26 -44 0 -34 -18';

  return (
    <g transform={`translate(${centerX} ${centerY})`} fill="#20262d" fillOpacity="0.9" stroke="#221f1f" strokeWidth="7">
      <path d={lensPath} transform="translate(-44 0)" />
      <path d={lensPath} transform="translate(44 0)" />
      <path d="M-16 -2 C-8 -8 8 -8 16 -2" fill="none" strokeLinecap="round" />
    </g>
  );
}

export default Glasses;
