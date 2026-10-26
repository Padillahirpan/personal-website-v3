export const formatDayMonth = (date: Date) =>
	date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

export const formatDate = (date: Date) =>
	date.toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
