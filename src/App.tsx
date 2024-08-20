import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// ChatUI
import ChatUI from './chat_components/ChatUI';
import { adaptChatUIMessages } from './utils';

// ChatScope
import ChatScope from './chat_components/ChatScope';
import { adaptChatScopeMessages } from './utils';

// ChatElements
import ChatElements from './chat_components/ChatElements';
import { adaptChatElementsMessages } from './utils';

import { TCurrentUser, TMessage } from './types';

const socket = io('http://localhost:8080');

function App() {
	const [currentUser, setCurrentUser] = useState<TCurrentUser>(null);
	const [messages, setMessages] = useState<TMessage[] | null>(null);

	socket.on('messages', (messages) => {
		setMessages(messages);
	});

	useEffect(() => {
		const userName = window.prompt('Cuál es tu nombre?');

		if (userName) {
			setCurrentUser({
				id: userName.slice(0, 3),
				name: userName,
			});
		}
	}, []);

	const addMessage = (message: string) => {
		socket.emit('new-message', {
			user: currentUser,
			text: message,
		});
	};

	if (!currentUser?.id || !messages) return;

	const CHAT_RENDERS = [
		{
			disabled: false,
			title: 'MinChat',
			render: (
				<ChatUI messages={adaptChatUIMessages(messages)} currentUser={currentUser} handleSendMessage={addMessage} />
			),
		},
		{
			disabled: false,
			title: 'ChatScope',
			render: (
				<ChatScope
					messages={adaptChatScopeMessages(messages, currentUser)}
					currentUser={currentUser}
					handleSendMessage={addMessage}
				/>
			),
		},
		{
			disabled: false,
			title: 'React Chat Elements',
			render: (
				<ChatElements
					messages={adaptChatElementsMessages(messages, currentUser)}
					currentUser={currentUser}
					handleSendMessage={addMessage}
				/>
			),
		},
	];

	return (
		<div style={{ padding: '1rem', backgroundColor: '#dedede' }}>
			{CHAT_RENDERS.map((chat) =>
				chat.disabled ? null : (
					<div>
						<h1>{chat.title}</h1>
						<div style={{ padding: '3rem' }}>{chat.render}</div>
					</div>
				),
			)}
		</div>
	);
}

export default App;
