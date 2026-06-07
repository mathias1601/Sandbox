import type {
  SandcastleBackgroundId,
  SandcastleBaseId,
  SandcastleGlassesId,
  SandcastleHatId,
} from '../sandcastleOptions';
import { backgroundColors, optionIconCastleMetrics } from './metrics';

export type SandcastleOptionIconProps =
  | { type: 'base'; value: SandcastleBaseId }
  | { type: 'hat'; value: SandcastleHatId }
  | { type: 'background'; value: SandcastleBackgroundId }
  | { type: 'glasses'; value: SandcastleGlassesId };

function OptionIcon(props: SandcastleOptionIconProps) {
  return (
    <svg className="sandcastle-option-icon" viewBox="0 0 80 80" aria-hidden="true">
      {props.type === 'background' ? (
        <BackgroundIcon value={props.value} />
      ) : (
        <>
          <BackgroundIcon value="shore" muted />
          <MiniCastle base={props.type === 'base' ? props.value : 'classic'} />
          {props.type === 'hat' && <HatIcon value={props.value} />}
          {props.type === 'glasses' && <GlassesIcon value={props.value} />}
        </>
      )}
    </svg>
  );
}

type BackgroundIconProps = {
  value: SandcastleBackgroundId;
  muted?: boolean;
};

function BackgroundIcon({ value, muted = false }: BackgroundIconProps) {
  const colors = backgroundColors[value];
  const opacity = muted ? 0.52 : 1;

  return (
    <g opacity={opacity}>
      <rect width="80" height="36" fill={colors.sky} />
      <circle cx="65" cy="13" r="7" fill={colors.sun} />
      <path d="M0 35 C12 30 25 40 39 35 C52 30 62 36 80 31 L80 48 L0 48 Z" fill={colors.water} />
      <rect y="46" width="80" height="34" fill={colors.sand} />
      <path d="M6 42 C18 38 28 47 40 42 M48 39 C58 35 65 44 75 39" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" opacity="0.64" />
    </g>
  );
}

type MiniCastleProps = {
  base: SandcastleBaseId;
};

function MiniCastle({ base }: MiniCastleProps) {
  const castle = optionIconCastleMetrics[base];
  const sideTowerWidth = castle.width * 0.24;
  const centerTowerWidth = castle.width * 0.3;
  const centerX = castle.x + castle.width / 2;

  return (
    <g>
      <rect x={castle.x + 4} y={castle.y - castle.towerHeight + 5} width={sideTowerWidth} height={castle.towerHeight} rx="2" fill="#e2ad50" stroke="#9f6d31" strokeWidth="2" />
      <rect x={castle.x + castle.width - sideTowerWidth - 4} y={castle.y - castle.towerHeight + 5} width={sideTowerWidth} height={castle.towerHeight} rx="2" fill="#e2ad50" stroke="#9f6d31" strokeWidth="2" />
      <rect x={centerX - centerTowerWidth / 2} y={castle.y - castle.towerHeight - 4} width={centerTowerWidth} height={castle.towerHeight + 9} rx="2" fill="#efc66f" stroke="#9f6d31" strokeWidth="2" />
      <rect x={castle.x} y={castle.y} width={castle.width} height={castle.height} rx="3" fill="#d9a94f" stroke="#9f6d31" strokeWidth="2.5" />
      <path d={`M${centerX - 6} ${castle.y + castle.height} C${centerX - 6} ${castle.y + castle.height - 12} ${centerX + 6} ${castle.y + castle.height - 12} ${centerX + 6} ${castle.y + castle.height} Z`} fill="#6e4b2d" />
    </g>
  );
}

type HatIconProps = {
  value: SandcastleHatId;
};

function HatIcon({ value }: HatIconProps) {
  if (value === 'none') {
    return <NoneMark />;
  }

  if (value === 'sunhat') {
    return (
      <g>
        <ellipse cx="40" cy="22" rx="20" ry="7" fill="#f5d66b" stroke="#9f6d31" strokeWidth="2.5" />
        <path d="M31 22 C34 8 47 8 50 22 Z" fill="#f0bc43" stroke="#9f6d31" strokeWidth="2.5" />
      </g>
    );
  }

  if (value === 'crown') {
    return <path d="M24 26 L24 14 L32 20 L37 8 L40 19 L48 8 L52 20 L60 14 L60 26 Z" fill="#f4bd35" stroke="#9f6d31" strokeLinejoin="round" strokeWidth="2.5" />;
  }

  return <path d="M30 8 H52 L49 30 H33 Z" fill="#4aa5d1" stroke="#1d5e7c" strokeLinejoin="round" strokeWidth="2.5" />;
}

type GlassesIconProps = {
  value: SandcastleGlassesId;
};

function GlassesIcon({ value }: GlassesIconProps) {
  if (value === 'none') {
    return <NoneMark />;
  }

  if (value === 'round') {
    return (
      <g fill="#20262d" fillOpacity="0.9" stroke="#221f1f" strokeWidth="2.5">
        <circle cx="33" cy="36" r="7" />
        <circle cx="49" cy="36" r="7" />
        <path d="M40 35 H42" fill="none" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g fill="#20262d" fillOpacity="0.9" stroke="#221f1f" strokeWidth="2.5">
      <path d="M25 32 C30 28 38 29 40 34 C39 42 31 45 26 39 C24 37 23 34 25 32 Z" />
      <path d="M43 34 C45 29 53 28 58 32 C60 34 59 37 57 39 C52 45 44 42 43 34 Z" />
      <path d="M39 35 H44" fill="none" strokeLinecap="round" />
    </g>
  );
}

function NoneMark() {
  return (
    <g>
      <circle cx="40" cy="28" r="13" fill="#fffdf6" stroke="#2d261f" strokeWidth="2.5" />
      <path d="M31 37 L49 19" stroke="#d8564b" strokeLinecap="round" strokeWidth="4" />
    </g>
  );
}

export default OptionIcon;
