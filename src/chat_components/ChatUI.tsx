import {
	MinChatUiProvider,
	MainContainer,
	MessageInput,
	MessageContainer,
	MessageList,
	MessageHeader,
	TypingIndicator,
	Sidebar,
} from '@minchat/react-chat-ui';
import MessageType from '@minchat/react-chat-ui/dist/types/MessageType';
import { FC } from 'react';
import { TUser } from '../types';
import CustomButton from '../components/CustomButton';
import UserCard from '../components/UserCard';

interface IChatUI {
	messages?: MessageType[];
	typingUsers?: { id: string; name: string }[] | null;
	currentUser: { id: string; name: string };
	handleSendMessage: (message: string) => void;
	addTypingUser: (user: TUser) => void;
	removeTypingUser: (user: TUser) => void;
}

const ChatUI: FC<IChatUI> = ({
	messages,
	typingUsers,
	addTypingUser,
	removeTypingUser,
	currentUser,
	handleSendMessage,
}) => {
	return (
		<MinChatUiProvider theme="#00aa55">
			<MainContainer>
				<MessageContainer>
					<MessageHeader showBack={false}>
						<div
							style={{
								padding: '2rem',
								display: 'flex',
								gap: '1rem',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1>GROUP NAME</h1>

							<div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'end' }}>
								<CustomButton>Finish</CustomButton>
								<CustomButton>Share</CustomButton>
							</div>
						</div>
					</MessageHeader>
					<div style={{ display: 'flex', maxHeight: '500px' }}>
						<div style={{ minWidth: '60%' }}>
							<MessageList
								currentUserId={currentUser.id}
								messages={messages}
								showTypingIndicator={!!typingUsers?.length}
								customTypingIndicatorComponent={
									typingUsers?.length ? (
										<TypingIndicator themeColor="#00aaaa" content={`${typingUsers[0]?.name} is typing...`} />
									) : null
								}
							/>
							<MessageInput
								showAttachButton={false}
								onStartTyping={() => addTypingUser(currentUser)}
								onEndTyping={() => removeTypingUser(currentUser)}
								showSendButton
								placeholder="Type message here"
								onSendMessage={handleSendMessage}
							/>
						</div>

						<Sidebar>
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
					</div>
				</MessageContainer>
			</MainContainer>
		</MinChatUiProvider>
	);
};

export default ChatUI;
