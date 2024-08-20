export type TMessage = {
	user: {
		id: string;
		name: string;
	};
	text: string;
};

export type TCurrentUser = {
	id: string;
	name: string;
} | null;