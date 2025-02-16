type Media = {
  /**
   * 480
   */
  xs: string;
  /**
   * 620
   */
  sm: string;
  /**
   * 990
   */
  md: string;
  /**
   * 1280
   */
  lg: string;
  /**
   * 1440
   */
  xl: string;
};

export type Breakpoint = keyof Media;

// desktop-first, i.e. breakpoints are max-width
export const breakpoints = {
  xs: 480,
  sm: 620,
  md: 990,
  lg: 1280,
  xl: 1440,
} as const satisfies Record<Breakpoint, number>;

export const media = Object.entries(breakpoints).reduce<Media>(
  (acc, [key, value]) => {
    acc[key as Breakpoint] = `@media screen and (max-width: ${value}px)`;
    return acc;
  },
  {} as Media,
);
