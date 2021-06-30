import styles from './MyMessage.module.css';

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
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
                    background: '#A29422'
                }
            }>
            {message.text}
        </div>
    )
};

export default MyMessage;