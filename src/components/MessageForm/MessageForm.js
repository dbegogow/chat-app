import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import styles from './MessageForm.module.css';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
        }

        setValue('');
    };

    const handleChange = (e) => {
        setValue(e.target.value);

        isTyping(props, chatId);
    };

    const handleUpload = (e) => {
        sendMessage(creds, chatId, { files: e.target.files, text: '' })
    };

    return (
        <form className={styles.messageForm} onSubmit={handleSubmit}>
            <input
                className={styles.messageInput}
                placeholder="Send a message ..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="uploadButton">
                <span className={styles.imageButton}>
                    <PictureOutlined className={styles.pictureIcon} />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="uploadButton"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit" className={styles.sendButton}>
                <SendOutlined className={styles.sendIcon} />
            </button>
        </form>
    )
};

export default MessageForm;