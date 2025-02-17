type Media = {
  /**
   * 1440
   */
  xl: string;
  /**
   * 1280
   */
  lg: string;
  /**
   * 990
   */
  md: string;
  /**
   * 620
   */
  sm: string;
  /**
   * 480
   */
  xs: string;
};

export type Breakpoint = keyof Media;

// desktop-first, i.e. breakpoints are max-width
export const breakpoints = {
  xl: 1440,
  lg: 1280,
  md: 990,
  sm: 620,
  xs: 480,
} as const satisfies Record<Breakpoint, number>;

export const media = Object.entries(breakpoints).reduce<Media>(
  (acc, [key, value]) => {
    acc[key as Breakpoint] = `@media screen and (max-width: ${value}px)`;
    return acc;
  },
  {} as Media,
);
