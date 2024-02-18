import classNames from 'classnames';
import styles from './profile-view.module.scss';
import { TileForm } from '../tile/tile';
import { limits, store_user, user } from '../../components-main/app/App';
import { useState } from 'react';
import React from 'react';

export interface ProfileViewProps {
    className?: string;
}


export const ProfileView = ({ className }: ProfileViewProps) => {
    const [flag, set_flag] = useState(false)
    function update(){ set_flag(!flag)}
    return <div className={classNames(styles.ProfileView, className)}>
        <TileForm>
            <div>edit name</div>
            <div className='spacer-default'></div>
            <input value={user.name} maxLength={limits.maxNameLength} onChange={(e)=>{
                user.name = e.target.value
                store_user(user)
                update();
            }}/>
            <div className='spacer-default'></div>
            <button onClick={()=>{
                let user = JSON.parse(localStorage.getItem('self-user') || '{}') 
                console.log(user);
                fetch('http://192.168.0.103:3000/user', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                }).then(res=>{
                    res.ok? (
                        localStorage.removeItem('self-user'),
                        window.location.href = '/'
                    ) : alert('fail')
                })
            }}>log out</button>
        </TileForm>
    </div>;
};