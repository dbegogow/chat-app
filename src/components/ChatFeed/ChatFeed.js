import styles from './ChatFeed.module.css';
import MessageForm from "../MessageForm";
import MyMessage from "../MyMessage";
import TheirMessage from "../TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0
                ? null
                : keys[index - 1];
            const isMyMessage = userName === messages.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className={styles.messageBlock}>
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div
                        className={styles.readReceipts}
                        style={
                            {
                                marginRight: isMyMessage ? '18px' : '0px',
                                marginLeft: isMyMessage ? '0px' : '68px'
                            }
                        }
                    >
                        read receipts
                    </div>
                </div>
            );
        });
    };

    if (!chat) {
        return 'Loading...';
    }

    return (
        <div className={styles.chatFeed}>
            <div className={styles.chatTitleContainer}>
                <div className={styles.chatTitle}>
                    {chat?.title}
                </div>
                <div className={styles.chatSubtitle}>
                    {chat.people
                        .map(person => ` ${person.person.username}`)
                    }
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className={styles.messageFormContainer}>
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
};

export default ChatFeed;