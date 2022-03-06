// 树的最大距离
function getMaxDistance(tree) {
  if (tree === null) {
    return 0;
  }

  let [dis, height] = process(tree);
}

function process(tree) {
  if (tree === null) {
    return [0, 0];
  }

  let resL = process(tree.left);
  let resR = process(tree.right);

  return [
    Math.max(resL[0], resR[0], resL[1] + 1 + 1 + resR[1]),
    Math.max(resL[1] + resR[1]) + 1,
  ];
}
