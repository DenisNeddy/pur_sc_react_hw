export default function parseDuration(duration: string): number {
	const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?$/;
	const matches = duration.match(regex);
	if (!matches) {
		throw new Error('Invalid duration format');
	}
	const hours = matches[1] ? parseInt(matches[1], 10) : 0;
	const minutes = matches[2] ? parseInt(matches[2], 10) : 0;

	return hours * 60 + minutes;
}