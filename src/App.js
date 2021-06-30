import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm />
    }

    return (
        <ChatEngine
            height='100vh'
            projectID='fabeb167-7f4d-4654-b495-98515ccc2a4b'
            userName='dbegogow'
            userSecret='dzhulio1'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;