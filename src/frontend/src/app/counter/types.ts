export const DEVIATION_VALUES = [1, 3, 5] as const;

export type DeviationValue = (typeof DEVIATION_VALUES)[number];
