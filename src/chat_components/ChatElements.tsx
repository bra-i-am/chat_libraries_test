import 'react-chat-elements/dist/main.css';
import { Button, Input, MessageList, type MessageType } from 'react-chat-elements';
import { FC, useRef } from 'react';

interface IChatElements {
	messages: MessageType[];
	currentUser: { id: string; name: string };
	handleSendMessage: (message: string) => void;
}
const ChatElements: FC<IChatElements> = ({ messages, handleSendMessage }) => {
	const messageListReferance = useRef();
	const inputReferance = useRef<HTMLInputElement>();

	console.log(messages);

	return (
		<>
			<MessageList toBottomHeight={'100%'} dataSource={messages} referance={messageListReferance} lockable />
			<Input
				// onChange={(event: ChangeEvent<HTMLInputElement>) => {
				// 	console.log(event.target.value);
				// }}
				maxHeight={50}
				autofocus
				referance={inputReferance}
				placeholder="Type here..."
				multiline={true}
			/>
			<Button
				text={'Send'}
				onClick={() => {
					if (inputReferance.current?.value) {
						handleSendMessage(inputReferance.current?.value);
						inputReferance.current.value = '';
					}
				}}
				title="Send"
			/>
		</>
	);
};

export default ChatElements;
