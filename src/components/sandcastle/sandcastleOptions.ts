export type SandcastleBaseId = 'classic' | 'fortress' | 'tower';
export type SandcastleHatId = 'none' | 'sunhat' | 'crown' | 'bucket';
export type SandcastleBackgroundId = 'shore' | 'sunset' | 'lagoon';
export type SandcastleGlassesId = 'none' | 'round' | 'aviator';

export type SandcastleSelection = {
  base: SandcastleBaseId;
  hat: SandcastleHatId;
  background: SandcastleBackgroundId;
  glasses: SandcastleGlassesId;
};

export type SandcastleOption<T extends string> = {
  id: T;
  label: string;
};

export const baseOptions: SandcastleOption<SandcastleBaseId>[] = [
  { id: 'classic', label: 'Classic' },
  { id: 'fortress', label: 'Fortress' },
  { id: 'tower', label: 'Tower' },
];

export const hatOptions: SandcastleOption<SandcastleHatId>[] = [
  { id: 'none', label: 'None' },
  { id: 'sunhat', label: 'Sun hat' },
  { id: 'crown', label: 'Crown' },
  { id: 'bucket', label: 'Bucket' },
];

export const backgroundOptions: SandcastleOption<SandcastleBackgroundId>[] = [
  { id: 'shore', label: 'Shore' },
  { id: 'sunset', label: 'Sunset' },
  { id: 'lagoon', label: 'Lagoon' },
];

export const glassesOptions: SandcastleOption<SandcastleGlassesId>[] = [
  { id: 'none', label: 'None' },
  { id: 'round', label: 'Round' },
  { id: 'aviator', label: 'Aviator' },
];

export const defaultSandcastleSelection: SandcastleSelection = {
  base: 'classic',
  hat: 'none',
  background: 'shore',
  glasses: 'none',
};
