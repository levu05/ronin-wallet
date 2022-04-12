import { ReactElement } from 'react';
import cx from 'classnames';

interface IProps {
  text?: string,
  children?: ReactElement,
  onClick?: () => void,
  type?: 'primary' | 'secondary',
  gradient?: boolean,
  className?: string,
  [key: string]: number | boolean | string | Function | ReactElement
};

const Button = ({ text, children, onClick, type = 'secondary', className: classes, gradient = false, ...rest }: IProps): ReactElement => {

  return (
    <button
      className={cx('c-button', `c-button--${type}`, classes, { 'is-gradient': gradient })}
      onClick={onClick}
      {...rest}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
