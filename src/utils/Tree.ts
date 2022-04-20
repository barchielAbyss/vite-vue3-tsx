export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// addTreeNode(root: TreeNode | null, val: number): TreeNode | null {}
// export function addTreeNode(root: TreeNode | null, val: number): TreeNode | null {}

// deleteTreeNode(root: TreeNode | null, val: number): TreeNode | null {}
// preorderTraversal(root: TreeNode | null): number[] {}
// inorderTraversal(root: TreeNode | null): number[] {}
// postorderTraversal(root: TreeNode | null): number[] {}
// levelOrder(root: TreeNode | null): number[][] {}
// maxDepth(root: TreeNode | null): number {}
// isSymmetric(root: TreeNode | null): boolean {}
// hasPathSum(root: TreeNode | null, sum: number): boolean {}
// lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {}
// serialize(root: TreeNode | null): string {}
