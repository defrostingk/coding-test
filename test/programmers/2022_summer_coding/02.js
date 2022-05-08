const rooms = ['[101]Azad,Guard', '[202]Guard', '[303]Guard,Dzaz'];
const target = 202;

console.log(solution(rooms, target));

function solution(rooms, target) {
  const employee = {};
  const except = [];

  rooms.forEach((room) => {
    const roomNumber = +room.split(']')[0].slice(1);
    const owner = room.split(']')[1].split(',');
    if (roomNumber === target) {
      owner.forEach((name) => {
        except.push(name);
      });
    }
  });

  rooms.forEach((room) => {
    const roomNumber = +room.split(']')[0].slice(1);
    const owner = room.split(']')[1].split(',');
    if (roomNumber !== target) {
      owner.forEach((name) => {
        if (!except.includes(name)) {
          const diff = Math.abs(roomNumber - target);
          if (!employee[name]) employee[name] = [diff];
          else employee[name].push(diff);
        }
      });
    }
  });

  const sorting = [];

  for (let key in employee) {
    const owner = { name: key, diff: employee[key] };
    sorting.push(owner);
  }

  sorting.sort((a, b) => {
    if (a.diff.length === b.diff.length) {
      if (Math.min(...a.diff) === Math.min(...b.diff)) {
        if (a.name < b.name) return -1;
        else return 1;
      } else {
        return Math.min(...a.diff) - Math.min(...b.diff);
      }
    } else return a.diff.length - b.diff.length;
  });

  const answer = [];
  for (let i = 0; i < sorting.length; i++) {
    answer.push(sorting[i].name);
  }

  return answer;
}
