// * https://leetcode.com/problems/validate-binary-search-tree/

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

function isValidBST(root: TreeNode | null): boolean {
  let isValid = true;
  let prevNode: TreeNode;

  const traverseBT = (node: TreeNode | null) => {
    if (!node || !isValid) return;

    traverseBT(node.left);

    if (prevNode?.val >= node.val) {
      isValid = false;
    }

    prevNode = node;
    traverseBT(node.right);
  };
  traverseBT(root);

  return isValid;
}
