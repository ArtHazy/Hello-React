import classNames from 'classnames';
import { user } from '../../App';
import { Tile, TileForm } from '../tile/tile';
import styles from './join-view.module.scss';
import { useState } from 'react';

export interface JoinViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JoinView = ({ className }: JoinViewProps) => {

    const [flag, set_flag] = useState(false)
    function update(){set_flag(!flag);}

    return (
        <div className={classNames(styles.root, className, ['vstack'])}>
            <div className={styles['tile-form-container']}>
                <TileForm>
                    <h3>recent activity</h3>
                    <div className={classNames('hstack', styles['recent-activity-view'])}>
                    </div>
                </TileForm>

                <div className="spacer-default" />

                <TileForm>
                    <div>Name</div>
                    <div className="spacer-default" />
                    <input value={user.name} onChange={(e)=>{
                        user.name = e.target.value;
                        update()
                    }}></input>
                    <div className="spacer-default" />
                    <div>Room</div>
                    <div className="spacer-default" />
                    <input placeholder="room key"></input>
                    <div className="spacer-default" />
                    <button>Join</button>
                </TileForm>
            </div>
        </div>
    );
};
