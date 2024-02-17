import { TileForm } from '../../components/tile/tile';
import { back_port, max_email_length, max_name_length, max_password_length, server_ip } from '../../../../data';
import styles from './Welcome.module.css';


export const Login = () => {
    return (
        JSON.parse(localStorage.getItem('self-user'))? window.location.href='/app' :
        <div className={styles.Login}>
            <TileForm>
                <div style={{ fontSize: '2em' }}>LOGIN</div>

                <TileForm>
                    <input id="email-input" type="email" placeholder='email' maxLength={max_email_length} />
                    <input id="password-input" type="password" placeholder='password' maxLength={max_password_length} />
                </TileForm>
                <button onClick={() => {
                    let email = document.getElementById('email-input').value;
                    let password = document.getElementById('password-input').value;


                    fetch('http://192.168.0.103:3000/user/verify', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: email, 
                            password: password
                        })

                    }).then(res => {
                        res.json().then(json => {
                            res.ok ? (localStorage.setItem('self-user', JSON.stringify(json)), window.location.href='/app') : alert('failure')
                        })
                    })
                }}>login</button>

                <a href="/register">
                    <button>register</button>
                </a>

            </TileForm>
        </div>
    )
}
export const Register = () => {
    return (
        <div className={styles.Register}>
            <TileForm>
                <div style={{ fontSize: '2em' }}>REGISTER</div>

                <TileForm>
                    <input id="username-input" type="text" placeholder='username' maxLength={max_name_length} />
                    <input id="email-input" type="email" placeholder='email' maxLength={max_email_length} />
                    <input id="password-input" type="password" placeholder='password' maxLength={max_password_length} />
                </TileForm>
                <button onClick={() => {
                    let username = document.getElementById('username-input').value;
                    let password = document.getElementById('password-input').value;
                    let email = document.getElementById('email-input').value;

                    
                    fetch('http://192.168.0.103:3000/user', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: username, email: email, password: password
                        })
                    }).then(res => {
                        res.json().then(json =>{
                            console.log(json);
                            res.ok ? (localStorage.setItem('self-user', JSON.stringify(json)), window.location.href='/app') : alert('error')
                        })
                    })

                }}>Register</button>

                <a href="/">
                    <button>Login</button>
                </a>

            </TileForm>
        </div>
    )
}
