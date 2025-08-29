import { Children } from 'react';
import styles from './flow.module.scss';
import clsx from 'clsx';
import { mergeClassNames } from '../../utils/classNameFunctions';

interface IProps {
  id?: string;
  children?: React.ReactNode | React.ReactNode[];
  direction?: 'horizontal' | 'vertical';
  gap?: 'none' | 'small' | 'medium' | 'large';
  wrap?: boolean;
  className?: string;
}

const Flow = ({
  id,
  children,
  direction = 'horizontal',
  gap = 'medium',
  wrap = false,
  ...props
}: IProps) => {
  const passedClassNames = props.className ? props.className.split(' ') : [];
  const classNames = ['Flow', ...passedClassNames];

  const align = direction === 'horizontal' ? 'left' : 'fill';

  const style = clsx(styles.Flow, {
    [styles[`direction-${direction}`]]: direction,
    [styles[`align-${align}`]]: align,
    [styles[`gap-${gap}`]]: gap,
    [styles['wrap']]: wrap,
  });

  const childrenArray = Children.toArray(children);
  let newChildren = null as React.ReactNode | React.ReactNode[];
  if (childrenArray.length > 0) {
    newChildren = Children.map(childrenArray, (child, index) => {
      return (
        <div key={index} className="row" role="none">
          {child}
        </div>
      );
    });
  } else {
    newChildren = <div className="row">{newChildren}</div>;
  }

  return (
    <div id={id} className={mergeClassNames(style, classNames)}>
      {newChildren}
    </div>
  );
};

export default Flow;
