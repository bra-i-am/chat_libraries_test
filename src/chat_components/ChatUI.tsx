import {
	MinChatUiProvider,
	MainContainer,
	MessageInput,
	MessageContainer,
	MessageList,
	MessageHeader,
} from '@minchat/react-chat-ui';
import MessageType from '@minchat/react-chat-ui/dist/types/MessageType';
import { FC } from 'react';

interface IChatUI {
	messages?: MessageType[];
	currentUser: { id: string; name: string };
	handleSendMessage: (message: string) => void;
}

const ChatUI: FC<IChatUI> = ({ messages, currentUser, handleSendMessage }) => {
	return (
		<MinChatUiProvider theme="#00aa55">
			<MainContainer>
				<MessageContainer>
					<MessageHeader />
					<MessageList currentUserId={currentUser.id} messages={messages} />
					<MessageInput showSendButton placeholder="Type message here" onSendMessage={handleSendMessage} />
				</MessageContainer>
			</MainContainer>
		</MinChatUiProvider>
	);
};

export default ChatUI;
