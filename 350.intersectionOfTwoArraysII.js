// Given two arrays, write a function to compute their intersection.

//     Each element in the result should appear as many times as it shows in both arrays.
//     The result can be in any order.

// Follow up:

//     What if the given array is already sorted? How would you optimize your algorithm?
//     What if nums1's size is small compared to nums2's size? Which algorithm is better?
//     What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
	const res = [];
	const hashMap = {};

	for (let i = 0; i < nums1.length; i++) {
		if (hashMap[nums1[i]]) {
			hashMap[nums1[i]] += 1;
		} else {
			hashMap[nums1[i]] = 1;
		}
	}
	for (let i = 0; i < nums2.length; i++) {
		if (hashMap[nums2[i]] > 0) {
			res.push(nums2[i]);
			hashMap[nums2[i]] -= 1;
		}
	}
	return res;
};

// console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
// console.log(intersect([2, 1], [1, 1])); // [1]
