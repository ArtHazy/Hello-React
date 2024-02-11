import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
    children?: any;
}

export const Header = (params:HeaderProps) => {
    return <div className={classNames(params.className, styles.header)}>
        {params.children}
    </div>;
};
