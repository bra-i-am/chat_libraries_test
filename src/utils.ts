import { MessageModel } from '@chatscope/chat-ui-kit-react';
import { TCurrentUser, TMessage } from './types';
import { MessageType as ChatElementsMessageType } from 'react-chat-elements';
import MessageType from '@minchat/react-chat-ui/dist/types/MessageType';

export const adaptChatUIMessages = (messages: TMessage[]): MessageType[] => {
	return messages.map((message) => {
		return {
			text: message.text,
			user: message.user,
			createdAt: new Date(),
		};
	});
};

export const adaptChatScopeMessages = (messages: TMessage[], currentUser: TCurrentUser): MessageModel[] => {
	return messages.map((message) => {
		return {
			message: message.text,
			sender: message.user.name,
			position: 'normal',
			direction: currentUser?.id === message.user.id ? 'outgoing' : 'incoming',
		};
	});
};

export const adaptChatElementsMessages = (
	messages: TMessage[],
	currentUser: TCurrentUser,
): ChatElementsMessageType[] => {
	return messages.map((message) => {
		return {
			text: message.text,
			sender: message.user.name,
			position: currentUser?.id === message.user.id ? 'right' : 'left',
			type: 'text',
			id: Math.floor(Math.random() * 100),
			title: message.user.name,
			date: Date.now(),
			focus: false,
			titleColor: '#00CCAA',
			forwarded: false,
			replyButton: false,
			removeButton: false,
			status: 'read',
			notch: true,
			retracted: false,
		};
	});
};
