// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps.
// In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// your function would return:

//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

/*
 * {param} Array<Object> start times and end times
 * {returns} Array<Object> times when everyone is available:
 */

const mergeRanges = (meetings) => {
	const meetingsCopy = JSON.parse(JSON.stringify(meetings));
	const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
	const mergedMeetings = [sortedMeetings[0]];
	for (let i = 1; i < sortedMeetings.length; i++) {
		const currentMeeting = sortedMeetings[i];
		const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

		if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
			lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
		} else {
			mergedMeetings.push(currentMeeting);
		}
	}
	return mergedMeetings;
};
// const mergeRanges = (ranges) => {
// 	let sortedStart = ranges.sort((a, b) => a['startTime'] - b['startTime']);
// 	const res = [];
// 	let temp = { startTime: 0, endTime: 0 };

// 	for (let i = 0; i < sortedStart.length; i++) {
// 		if (!sortedStart[i + 1]) {
// 			// no temp
// 			if (temp === { startTime: 0, endTime: 0 }) {
// 				res.push({ startTime: sortedStart[i]['startTime'], endTime: sortedStart[i]['endTime'] });
// 				return res;
// 			}
// 			// merge them
// 			if (temp['endTime'] >= sortedStart[i]['startTime']) {
// 				temp.startTime = temp.startTime === 0 ? sortedStart[i]['startTime'] : Math.min(temp.startTime, sortedStart[i]['startTime']);
// 				temp.endTime = Math.max(temp.endTime, sortedStart[i]['endTime']);
// 				res.push({ ...temp });
// 				return res;
// 			}
// 			// don't merge, add both;
// 			else {
// 				res.push({ ...temp });
// 				res.push({ startTime: sortedStart[i]['startTime'], endTime: sortedStart[i]['endTime'] });
// 				return res;
// 			}
// 		}
// 		if (!sortedStart[i + 1] && temp === { startTime: 0, endTime: 0 }) {
// 			continue;
// 		} else if (!sortedStart[i + 1]) {
// 			res.push({ startTime: Math.min(temp['startTime'], sortedStart[i]['startTime']), endTime: Math.max(temp['endTime'], sortedStart[i]['endTime']) });

// 			continue;
// 		} else if (temp['endTime'] >= sortedStart[i]['startTime']) {
// 			temp.startTime = temp.startTime === 0 ? sortedStart[i]['startTime'] : Math.min(temp.startTime, sortedStart[i]['startTime']);
// 			temp.endTime = Math.max(temp.endTime, sortedStart[i]['endTime']);
// 			continue;
// 		} else if (temp.startTime !== 0 || temp.endTime !== 0) {
// 			res.push({ ...temp });
// 		}
// 		temp = { startTime: sortedStart[i]['startTime'], endTime: sortedStart[i]['endTime'] };
// 	}
// 	return res;
// };

console.log(
	mergeRanges([
		{ startTime: 1, endTime: 3 },
		{ startTime: 4, endTime: 8 },
	])
);

console.log(
	mergeRanges([
		{ startTime: 1, endTime: 10 },
		{ startTime: 2, endTime: 6 },
		{ startTime: 3, endTime: 5 },
		{ startTime: 7, endTime: 9 },
	])
);

console.log(
	mergeRanges([
		{ startTime: 0, endTime: 1 },
		{ startTime: 3, endTime: 5 },
		{ startTime: 4, endTime: 8 },
		{ startTime: 10, endTime: 12 },
		{ startTime: 9, endTime: 10 },
	])
);
// [1-3],
//
