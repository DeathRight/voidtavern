import { MantineColor, Progress, ProgressProps } from '@mantine/core';
import { useMemo } from 'react';

export type PercentColor = {
  color: MantineColor;
  label?: string;
};

export interface DynamicProgressProps extends Omit<ProgressProps, 'sections'> {
  /**
   * Equally splits sections and uses `color` and `label` from the closest section the current `value` is >= to
   */
  sections?: PercentColor[];
}
/* ------------------------------------ * ----------------------------------- */
const getSection = (value: number, sections?: PercentColor[]) => {
  if (!sections) return undefined;

  const a = new Array(...sections);
  const p = (value / 100) * (a.length - 1);

  return a?.reverse().find((_, i) => p >= a.length - 1 - i);
};
/* ------------------------------------ * ----------------------------------- */
/**
 * Mantines `Progress` component, but `sections` is replaced with an optional array of
 * `{color: MantineColor, label?: string}`
 * that can determine the current color and label of the bar.
 *
 * i.e.:
 *
 * ```jsx
 * <DynamicProgress
 *  value={...}
 *  sections={[
 *      {color: 'red'}, {color: 'yellow'}, {color: 'teal'}
 *  ]}
 * />
 *
 * // 0% - 49%: {color: 'red'}
 * // 50% - 99%: {color: 'yellow'}
 * // 100%: {color: 'teal'}
 * ```
 */
const DynamicProgress = (props: DynamicProgressProps) => {
  const { value = 0, color, label, sections, ...spread } = props;

  const section = useMemo(
    () => getSection(value, sections) ?? { color, label },
    [value, sections, label]
  );

  return (
    <Progress value={value} color={section.color} label={section.label ?? label} {...spread} />
  );
};

export default DynamicProgress;
