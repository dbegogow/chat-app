import styles from './TheirMessage.module.css';

const TheirMessage = ({
    lastMessage,
    message
}) => {
    const isFirstMessageByUser = !lastMessage
        || lastMessage.sender.username !== message.sender.username;

    return (
        <div className={styles.messageRow}>
            {isFirstMessageByUser && (
                <div
                    className={styles.messageAvatar}
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {
                message.attachments && message.attachments.length > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="Message Attachment"
                            className={styles.messageImage}
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                    )
                    : (
                        <div>
                            <div
                                className={styles.message}
                                style={
                                    {
                                        float: 'left',
                                        background: '#F4F2B0',
                                        marginLeft: isFirstMessageByUser ? '4px' : '48px'
                                    }
                                }>
                                {message.text}
                            </div>
                        </div>
                    )
            }
        </div >
    )
};

export default TheirMessage;