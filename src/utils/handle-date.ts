export const formatDate = (item: string) => {
	const [date, time] = item.split("T");
	return `${date} - ${time}`;
};
