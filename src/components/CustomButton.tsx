import { FC } from 'react';

interface ICustomButton {
	children: React.ReactNode;
}

const CustomButton: FC<ICustomButton> = ({ children }) => {
	return (
		<button
			style={{
				padding: '1rem 2rem',
				borderRadius: '2.5px',
				border: '1px solid #ddd',
				fontSize: '1rem',
				textTransform: 'uppercase',
			}}
		>
			{children}
		</button>
	);
};

export default CustomButton;
