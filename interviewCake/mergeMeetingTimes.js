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

// TC: O(n log n)
// SC: O(n)
const mergeRanges = (meetings) => {
	const meetingsCopy = JSON.parse(JSON.stringify(meetings));
	const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
	const mergedMeetings = [sortedMeetings[0]];
	let currentMeeting;
	for (let i = 1; i < sortedMeetings.length; i++) {
		currentMeeting = sortedMeetings[i];
		if (mergedMeetings[mergedMeetings.length - 1].endTime >= currentMeeting.startTime) {
			mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(currentMeeting.endTime, mergedMeetings[mergedMeetings.length - 1].endTime);
		} else {
			mergedMeetings.push(currentMeeting);
		}
	}
	return mergedMeetings;
};

// console.log(
// 	mergeRanges([
// 		{ startTime: 1, endTime: 3 },
// 		{ startTime: 4, endTime: 8 },
// 	])
// );

// console.log(
// 	mergeRanges([
// 		{ startTime: 1, endTime: 10 },
// 		{ startTime: 2, endTime: 6 },
// 		{ startTime: 3, endTime: 5 },
// 		{ startTime: 7, endTime: 9 },
// 	])
// );

// console.log(
// 	mergeRanges([
// 		{ startTime: 0, endTime: 1 },
// 		{ startTime: 3, endTime: 5 },
// 		{ startTime: 4, endTime: 8 },
// 		{ startTime: 10, endTime: 12 },
// 		{ startTime: 9, endTime: 10 },
// 	])
// );
