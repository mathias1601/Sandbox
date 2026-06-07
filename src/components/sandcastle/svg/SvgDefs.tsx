function SvgDefs() {
  return (
    <defs>
      <linearGradient id="sandcastle-sand-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#f4cf79" />
        <stop offset="100%" stopColor="#d39b43" />
      </linearGradient>
      <linearGradient id="sandcastle-door-gradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#8d6034" />
        <stop offset="100%" stopColor="#5b3d27" />
      </linearGradient>
      <pattern id="sandcastle-grain" width="48" height="48" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="14" r="2.4" fill="#ffffff" opacity="0.24" />
        <circle cx="34" cy="31" r="2.2" fill="#704b1b" opacity="0.2" />
        <circle cx="21" cy="40" r="1.8" fill="#ffffff" opacity="0.2" />
      </pattern>
    </defs>
  );
}

export default SvgDefs;
