import classNames from 'classnames';
import styles from './tile.module.scss';
import React from 'react';

export interface TileProps {
    className?: string;
    children?: any
    onClick?: () => void;
}


export const Tile = ({ className, onClick, children }: TileProps) => {
    return (
        <button onClick={onClick} className={classNames(styles.Tile, className)}>{children}</button>
    );
};

export const TileForm = (params: any) => {
    return <div className={classNames(styles.Tile, params.className, styles['tile-form'])}>
        {params.children}
    </div>;
};
