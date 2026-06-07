import type { SandcastleBackgroundId, SandcastleBaseId } from '../sandcastleOptions';

export type CastleMetrics = {
  bodyX: number;
  bodyY: number;
  bodyWidth: number;
  bodyHeight: number;
  sideTowerWidth: number;
  sideTowerHeight: number;
  centerTowerWidth: number;
  centerTowerHeight: number;
};

export type BackgroundColors = {
  sky: string;
  horizon: string;
  water: string;
  sand: string;
  sun: string;
};

export const castleMetricsByBase: Record<SandcastleBaseId, CastleMetrics> = {
  classic: {
    bodyX: 190,
    bodyY: 324,
    bodyWidth: 420,
    bodyHeight: 212,
    sideTowerWidth: 104,
    sideTowerHeight: 170,
    centerTowerWidth: 136,
    centerTowerHeight: 220,
  },
  fortress: {
    bodyX: 136,
    bodyY: 336,
    bodyWidth: 528,
    bodyHeight: 202,
    sideTowerWidth: 128,
    sideTowerHeight: 154,
    centerTowerWidth: 150,
    centerTowerHeight: 196,
  },
  tower: {
    bodyX: 236,
    bodyY: 296,
    bodyWidth: 328,
    bodyHeight: 246,
    sideTowerWidth: 86,
    sideTowerHeight: 188,
    centerTowerWidth: 142,
    centerTowerHeight: 264,
  },
};

export const backgroundColors: Record<SandcastleBackgroundId, BackgroundColors> = {
  shore: {
    sky: '#91d8f7',
    horizon: '#b8ecff',
    water: '#4fb2d4',
    sand: '#f0ce86',
    sun: '#ffd761',
  },
  sunset: {
    sky: '#f59b71',
    horizon: '#f8c186',
    water: '#77bfcc',
    sand: '#d9b06f',
    sun: '#ffe08a',
  },
  lagoon: {
    sky: '#9eddd4',
    horizon: '#cef3e7',
    water: '#2daaa0',
    sand: '#efd287',
    sun: '#ffe172',
  },
};

export const optionIconCastleMetrics: Record<
  SandcastleBaseId,
  { x: number; y: number; width: number; height: number; towerHeight: number }
> = {
  classic: { x: 19, y: 42, width: 42, height: 24, towerHeight: 22 },
  fortress: { x: 13, y: 43, width: 54, height: 22, towerHeight: 18 },
  tower: { x: 24, y: 38, width: 32, height: 30, towerHeight: 30 },
};
