import { ReactElement, ReactNode } from 'react';
import cx from 'classnames';

interface IProps {
  className?: string,
  children: ReactNode
};

const Layout = (props: IProps): ReactElement => {
  const { children, className } = props;

  return (
    <div id='main' className={cx('c-layout', className)}>
      <div className='ce-layout-content'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
