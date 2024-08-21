export type TMessage = {
	user: {
		id: string;
		name: string;
	};
	text: string;
};

export type TUser = {
	id: string;
	name: string;
} | null;
