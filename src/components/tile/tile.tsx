import classNames from 'classnames';
import styles from './tile.module.scss';

export interface TileProps {
    className?: string;
    children?: any
    onClick?: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Tile = ({ className, onClick, children }: TileProps) => {
    return (
        <button onClick={onClick} className={classNames(styles.root, className)}>{children}</button>
    );
};

export const TileForm = (params: any) => {
    return <div className={classNames(styles.root, params.className, styles['tile-form'])}>
        {params.children}
    </div>;
};
