module.exports = function(list) {
  if (list.length === 0) {
    return 1;
  }

  const maxId = Math.max(...list.map(t => t.id));
  return maxId + 1;
};