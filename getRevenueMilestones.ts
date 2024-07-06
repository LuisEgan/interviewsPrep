/*
Revenue Milestones

We keep track of the revenue Facebook makes every day,
and we want to know on what days Facebook hits certain revenue milestones.
Given an array of the revenue on each day, and an array of
milestones Facebook wants to reach, return an array containing the days
on which Facebook reached every milestone.

Signature
int[] getMilestoneDays(int[] revenues, int[] milestones)

Input
revenues is a length-N array representing how much revenue FB made on
each day (from day 1 to day N). milestones is a length-K array of total
revenue milestones.

Output

Return a length-K array where K_i is the day on which FB first had
milestones[i] total revenue. If the milestone is never met, return -1.

Example
revenues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
milestones = [100, 200, 500]
output = [4, 6, 10]

Explanation
On days 4, 5, and 6, FB has total revenue of $100, $150, and $210 respectively. Day 6 is the first time that FB has >= $200 of total revenue.

*/

// * Binary search
const getReachedMilestoneDay = (arr: number[], elem: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let midIndex: number;

  while (leftIndex <= rightIndex) {
    midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    if (elem === arr[midIndex]) return midIndex + 1;

    if (elem < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return leftIndex < arr.length ? leftIndex + 1 : -1;
};

function getMilestoneDays(revenues: number[], milestones: number[]) {
  const totalRevenueByDay: number[] = [];
  for (let i = 0; i < revenues.length; i++) {
    totalRevenueByDay[i] = revenues[i] + (totalRevenueByDay[i - 1] || 0);
  }

  const milestonesDays: number[] = [];
  for (let i = 0; i < milestones.length; i++) {
    milestonesDays.push(
      getReachedMilestoneDay(totalRevenueByDay, milestones[i])
    );
  }

  return milestonesDays;
}
