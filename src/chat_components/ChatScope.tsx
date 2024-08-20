import { FC } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	MessageModel,
	Avatar,
} from '@chatscope/chat-ui-kit-react';

interface IChatScope {
	messages: MessageModel[];
	currentUser: { id: string; name: string };
	handleSendMessage: (message: string) => void;
}
const ChatScope: FC<IChatScope> = ({ messages, handleSendMessage }) => {
	console.log(messages);
	return (
		<div style={{ position: 'relative', height: '500px' }}>
			<MainContainer>
				<ChatContainer>
					<MessageList>
						{messages.map((message) => (
							<Message
								avatarSpacer
								avatarPosition={message.direction === 'incoming' ? 'center-left' : 'center-right'}
								model={message}
							>
								<Avatar name={message.sender} size="sm" src="avatar.jpg" />
								<Message.Header>{message.sender}</Message.Header>
							</Message>
						))}
					</MessageList>
					<MessageInput placeholder="Type message here" onSend={(message) => handleSendMessage(message)} />
				</ChatContainer>
			</MainContainer>
		</div>
	);
};

export default ChatScope;
