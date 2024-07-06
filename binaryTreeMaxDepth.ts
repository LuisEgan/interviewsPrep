// * https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0;

  const traverse = (node: TreeNode | null, level: number) => {
    if (!node) return;

    traverse(node.left, level + 1);
    maxDepth = level > maxDepth ? level : maxDepth;

    traverse(node.right, level + 1);
    maxDepth = level > maxDepth ? level : maxDepth;
  };
  traverse(root, 1);

  return maxDepth;
}
