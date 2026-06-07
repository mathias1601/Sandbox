import type { BackgroundColors } from './metrics';

type BackgroundProps = {
  colors: BackgroundColors;
};

function Background({ colors }: BackgroundProps) {
  return (
    <g>
      <rect width="800" height="282" fill={colors.sky} />
      <rect y="230" width="800" height="90" fill={colors.horizon} opacity="0.52" />
      <circle cx="684" cy="82" r="48" fill={colors.sun} />
      <circle cx="684" cy="82" r="70" fill={colors.sun} opacity="0.24" />
      <path d="M0 278 C120 250 234 312 356 284 C472 258 560 282 800 260 L800 354 L0 354 Z" fill={colors.water} />
      <path
        d="M40 304 C132 282 194 326 280 310 M386 298 C476 276 548 318 646 300"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeWidth="10"
        opacity="0.58"
      />
      <rect y="342" width="800" height="258" fill={colors.sand} />
      <path d="M0 390 C160 362 306 402 446 374 C574 348 686 364 800 346 L800 600 L0 600 Z" fill={colors.sand} />
    </g>
  );
}

export default Background;
