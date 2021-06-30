import styles from './MyMessage.module.css';

const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="Message attachment"
                className={styles.messageImage}
                style={{ float: 'right' }}
            />
        );
    }

    return (
        <div
            className={styles.message}
            style={
                {
                    float: 'right',
                    marginRight: '18px',
                    color: '#FFF',
                    background: '#14A5F0'
                }
            }>
            {message.text}
        </div>
    )
};

export default MyMessage;