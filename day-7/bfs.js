var isCousins = function (root, x, y) {
  let queue = [root];
  if (root === null) return false;

  while (queue.length > 0) {
    let size = queue.length;
    let foundX = false;
    let foundY = false;
    let isSibling = false;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left !== null) {
        if (node.left.val === x) foundX = true;
        if (node.left.val === y) foundY = true;
      }

      if (node.right !== null) {
        if (node.right.val === x) foundX = true;
        if (node.right.val === y) foundY = true;
      }

      if (node.left !== null && node.right !== null) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        ) {
          isSibling = true;
        }
      }

      if (foundX && foundY && !isSibling) return true;

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return false;
};
