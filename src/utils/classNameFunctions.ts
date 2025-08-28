export const mergeClassNames = (styles: string, classNames: string[]) => {
  return [...styles.split(' '), ...classNames].join(' ');
};
