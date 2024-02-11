import classNames from 'classnames';
import styles from './profile-view.module.scss';
import { TileForm } from '../tile/tile';
import { user } from '../../App';
import { useState } from 'react';

export interface ProfileViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProfileView = ({ className }: ProfileViewProps) => {
    const [flag, set_flag] = useState(false)
    function update(){ set_flag(!flag)}
    return <div className={classNames(styles.root, className)}>
        <TileForm>
            <div>edit name</div>
            <input value={user.name} onChange={(e)=>{
                user.name = e.target.value
                update();
            }}/>
        </TileForm>
    </div>;
};