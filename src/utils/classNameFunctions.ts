export const mergeClassNames = (styles: string, classNames: string[]) => {
  return [...styles.split(' '), ...classNames].join(' ');
};

export const classNameMaker = (
  classes: (string | boolean | undefined)[]
): string => {
  return classes
    .filter((cls): cls is string => Boolean(cls) && typeof cls === 'string')
    .join(' ');
};
