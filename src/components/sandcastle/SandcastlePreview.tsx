import Background from './svg/Background';
import CastleBase from './svg/CastleBase';
import Glasses from './svg/Glasses';
import Hat from './svg/Hat';
import SvgDefs from './svg/SvgDefs';
import { backgroundColors, castleMetricsByBase } from './svg/metrics';
import type { SandcastleSelection } from './sandcastleOptions';

type SandcastlePreviewProps = {
  selection: SandcastleSelection;
};

function SandcastlePreview({ selection }: SandcastlePreviewProps) {
  const metrics = castleMetricsByBase[selection.base];
  const colors = backgroundColors[selection.background];

  return (
    <svg
      className="sandcastle-svg"
      viewBox="0 0 800 600"
      role="img"
      aria-label="Customized sandcastle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SvgDefs />
      <Background colors={colors} />
      <CastleBase metrics={metrics} />
      <Hat variant={selection.hat} metrics={metrics} />
      <Glasses variant={selection.glasses} metrics={metrics} />
    </svg>
  );
}

export default SandcastlePreview;
