module.exports = function createDreamTeam(members) {
  if (typeof members !== "object" || members == null) {
    return false;
  }
  if (members.length === undefined) {
    return false;
  }
  members = members.filter(function (a) { return typeof a == 'string' });
  members = members.map(a => a.trim());
  let resultArray = members.map((a) => a[0].toLocaleUpperCase());
  let result = resultArray.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  return result;
}; 