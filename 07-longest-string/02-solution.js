function longestString(strings) {
  if (strings.length === 0) return false;
  let longest = strings[0];

  for (let i = 0; i < strings.length; i++) {
    if (typeof strings[i] !== "string") continue;
    if (strings[i].length > longest.length) longest = strings[i];
  }

  return longest;
}
