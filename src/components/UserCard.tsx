import { FC } from 'react';
import { TUser } from '../types';

interface IUserCard {
	user: TUser;
}

const UserCard: FC<IUserCard> = ({ user }) => {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#eee', borderRadius: '5px' }}
		>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'center',
					padding: '1rem',
				}}
			>
				<img
					src="avatar.jpg"
					style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #fff' }}
				/>
				<h3>{user?.name}</h3>
			</div>
		</div>
	);
};

export default UserCard;
