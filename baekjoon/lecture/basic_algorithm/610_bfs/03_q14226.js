const fs = require('fs');
const s = +fs.readFileSync('../input.txt').toString().trim();

console.log(getMinTime(s));

function getMinTime(emoticons) {
  const visited = Array.from(
    Array(emoticons + 1),
    () => new Array(emoticons + 1)
  );
  visited[1][0] = 1;
  const queue = [[1, 0]]; // screen, clipboard
  let head = 0;

  while (queue.length > head) {
    const [screen, clipboard] = queue[head++];

    // copy, paste, delete
    for (let [screenNext, clipboardNext] of [
      [screen, screen],
      [screen + clipboard, clipboard],
      [screen - 1, clipboard],
    ]) {
      if (isAvailable(screenNext, clipboardNext)) {
        if (screenNext === emoticons) return visited[screen][clipboard];

        visited[screenNext][clipboardNext] = visited[screen][clipboard] + 1;
        queue.push([screenNext, clipboardNext]);
      }
    }
  }

  function isAvailable(screen, clipboard) {
    return screen >= 0 && screen <= emoticons && !visited[screen][clipboard];
  }
}
