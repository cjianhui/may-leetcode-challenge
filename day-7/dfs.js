var isCousins = function (root, x, y) {
  return (
    findDepth(root, x, 1) === findDepth(root, y, 1) && !isSibling(root, x, y)
  );
};

const isSibling = (node, x, y) => {
  if (!node) return false;

  let check = false;
  if (node.left !== null && node.right !== null) {
    check =
      (node.left.val === x && node.right.val === y) ||
      (node.left.val === y && node.right.val === x);
  }

  return check || isSibling(node.left, x, y) || isSibling(node.right, x, y);
};

const findDepth = (node, value, depth) => {
  if (!node) return 0;
  if (node.val === value) return depth;

  return (
    findDepth(node.left, value, depth + 1) ||
    findDepth(node.right, value, depth + 1)
  );
};
