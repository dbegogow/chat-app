import { useState } from "react";
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "fabeb167-7f4d-4654-b495-98515ccc2a4b",
            'User-Name': username,
            'User-Secret': password
        };

        try {
            await fetch('https://api.chatengine.io/chats',
                { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {

        }
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Chat App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className={styles.input}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={styles.input}
                    placeholder="Password"
                    required
                />
                <div align="center">
                    <button type="submit" className={styles.button}>
                        <span>Start Chatting</span>
                    </button>
                </div>
            </form>
        </div >
    );
};

export default LoginForm;