import { FC, useEffect, useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	MessageModel,
	Avatar,
	Sidebar,
	ConversationHeader,
	TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { TUser } from '../types';
import UserCard from '../components/UserCard';
import CustomButton from '../components/CustomButton';

interface IChatScope {
	messages: MessageModel[];
	typingUsers?: { id: string; name: string }[] | null;
	currentUser: { id: string; name: string };
	handleSendMessage: (message: string) => void;
	addTypingUser: (user: TUser) => void;
	removeTypingUser: (user: TUser) => void;
}
const ChatScope: FC<IChatScope> = ({
	messages,
	typingUsers,
	addTypingUser,
	removeTypingUser,
	currentUser,
	handleSendMessage,
}) => {
	const [inputText, setInputText] = useState('');

	useEffect(() => {
		console.log(inputText);
		if (inputText.length > 0) {
			addTypingUser(currentUser);
		} else {
			removeTypingUser(currentUser);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputText]);

	return (
		<div style={{ position: 'relative', height: '500px' }}>
			<MainContainer>
				<ChatContainer>
					<ConversationHeader>
						<ConversationHeader.Content userName="GROUP NAME" />
						<ConversationHeader.Actions>
							<div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'end' }}>
								<CustomButton>Finish</CustomButton>
								<CustomButton>Share</CustomButton>
							</div>
						</ConversationHeader.Actions>
					</ConversationHeader>

					<MessageList
						typingIndicator={
							typingUsers?.length ? <TypingIndicator content={`${typingUsers[0]?.name} is typing...`} /> : null
						}
					>
						{messages.map((message) => (
							<Message
								avatarPosition={message.direction === 'incoming' ? 'center-left' : 'center-right'}
								model={message}
							>
								<Avatar name={message.sender} size="sm" src="avatar.jpg" />
								<Message.Header>{message.sender}</Message.Header>
							</Message>
						))}
					</MessageList>
					<MessageInput
						attachButton={false}
						onChange={(text: string) => {
							setInputText(text);
							return text;
						}}
						placeholder="Type message here"
						onSend={(message) => handleSendMessage(message)}
					/>
				</ChatContainer>

				<Sidebar position="right">
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
							backgroundColor: '#fff',
							padding: '1rem',
						}}
					>
						<UserCard user={currentUser} />
						<UserCard user={currentUser} />
						<UserCard user={currentUser} />
						<UserCard user={currentUser} />
						<UserCard user={currentUser} />
					</div>
				</Sidebar>
			</MainContainer>
		</div>
	);
};

export default ChatScope;
