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

import { TUser, TMessage } from './types';

const socket = io('http://localhost:8080');

function App() {
	const [currentUser, seTUser] = useState<TUser>(null);
	const [messages, setMessages] = useState<TMessage[] | null>(null);
	const [typingUsers, setTypingUsers] = useState<{ id: string; name: string }[] | null>(null);

	socket.on('messages', (messages) => {
		setMessages(messages);
	});

	socket.on('users-typing', (users) => {
		setTypingUsers(users);
	});

	useEffect(() => {
		const userName = window.prompt('Cuál es tu nombre?');

		if (userName) {
			seTUser({
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

	const addTypingUser = (user: TUser) => {
		socket.emit('start-typing', user);
	};

	const removeTypingUser = (user: TUser) => {
		socket.emit('stop-typing', user);
	};

	if (!currentUser?.id || !messages) return;

	const CHAT_RENDERS = [
		{
			disabled: false,
			title: 'MinChat',
			render: (
				<ChatUI
					typingUsers={typingUsers?.filter((user) => user.id !== currentUser.id)}
					addTypingUser={addTypingUser}
					removeTypingUser={removeTypingUser}
					messages={adaptChatUIMessages(messages)}
					currentUser={currentUser}
					handleSendMessage={addMessage}
				/>
			),
		},
		{
			disabled: false,
			title: 'ChatScope',
			render: (
				<ChatScope
					typingUsers={typingUsers?.filter((user) => user.id !== currentUser.id)}
					addTypingUser={addTypingUser}
					removeTypingUser={removeTypingUser}
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
					typingUsers={typingUsers?.filter((user) => user.id !== currentUser.id)}
					addTypingUser={addTypingUser}
					removeTypingUser={removeTypingUser}
					messages={adaptChatElementsMessages(messages, currentUser)}
					currentUser={currentUser}
					handleSendMessage={addMessage}
				/>
			),
		},
	];

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: '#dedede' }}>
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
