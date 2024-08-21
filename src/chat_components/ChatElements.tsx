import 'react-chat-elements/dist/main.css';
import { Button, Input, MessageList, Navbar, type MessageType } from 'react-chat-elements';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { TUser } from '../types';
import CustomButton from '../components/CustomButton';
import UserCard from '../components/UserCard';

interface IChatElements {
	messages: MessageType[];
	typingUsers?: { id: string; name: string }[] | null;
	currentUser: { id: string; name: string };
	handleSendMessage: (message: string) => void;
	addTypingUser: (user: TUser) => void;
	removeTypingUser: (user: TUser) => void;
}
const ChatElements: FC<IChatElements> = ({
	messages,
	// typingUsers,
	addTypingUser,
	removeTypingUser,
	currentUser,
	handleSendMessage,
}) => {
	const messageListReferance = useRef();
	const inputReferance = useRef<HTMLInputElement>();

	const [inputText, setInputText] = useState('');

	useEffect(() => {
		if (inputText.length > 0) {
			addTypingUser(currentUser);
		} else {
			removeTypingUser(currentUser);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputText]);

	return (
		<div style={{ maxHeight: '500px', display: 'flex', width: '100%', gap: '0.5rem' }}>
			<div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', width: '85%' }}>
				<Navbar
					left={<h1>GROUP NAME</h1>}
					right={
						<div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'end' }}>
							<CustomButton>Finish</CustomButton>
							<CustomButton>Share</CustomButton>
						</div>
					}
				/>

				<div style={{ height: '100%', overflow: 'auto', padding: '1rem', backgroundColor: '#ddd' }}>
					<MessageList dataSource={messages} referance={messageListReferance} lockable />
				</div>

				<Input
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						setInputText(event.target.value);
					}}
					maxHeight={50}
					autofocus
					referance={inputReferance}
					placeholder="Type here..."
					multiline={true}
					inputStyle={{ padding: '0.5rem 1rem' }}
					rightButtons={
						<Button
							text={'Send'}
							onClick={() => {
								if (inputReferance.current?.value) {
									handleSendMessage(inputReferance.current?.value);
									inputReferance.current.value = '';
								}
							}}
						/>
					}
				/>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
					backgroundColor: '#fff',
					padding: '1rem',
					width: '25%',
				}}
			>
				<UserCard user={currentUser} />
				<UserCard user={currentUser} />
				<UserCard user={currentUser} />
				<UserCard user={currentUser} />
				<UserCard user={currentUser} />
			</div>
		</div>
	);
};

export default ChatElements;
