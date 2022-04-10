import { ReactElement } from 'react';
import cx from 'classnames';

type IExtraProps = {
  [key: string]: number | boolean | string
}

interface IProps {
  text?: string,
  onClick?: () => void,
  type?: 'primary' | 'secondary',
  gradient?: boolean,
  className?: string,
  [key: string]: number | boolean | string | Function
};

const Button = ({ text, onClick, type = 'secondary', className: classes, gradient = false, ...rest }: IProps): ReactElement => {

  return (
    <button
      className={cx('c-button', `c-button--${type}`, classes, { 'is-gradient': gradient })}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
