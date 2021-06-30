import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
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