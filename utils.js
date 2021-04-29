const fs = require("fs");
const Queue = require("./classes/Queue");
const Stack = require("./classes/Stack");

function queueReverse(queue) {
  let stack = new Stack();

  while (queue.isFilled()) {
      stack.insert(queue.front());
      queue.remove();
  }

  while (stack.isFilled()) {
      queue.insert(stack.top());
      stack.remove();
  }
}

function stackReverse(stack) {
  let queue = new Queue();

  while (stack.isFilled()) {
      queue.insert(stack.top());
      stack.remove();
  }

  while (queue.isFilled()) {
      stack.insert(queue.front());
      queue.remove();
  }
}

function removeFirstItem(dataStructere, type) {
  if (type == 'stack') {
    stackReverse(dataStructere);
    dataStructere.remove();
    stackReverse(dataStructere);
  } else if (type == 'queue') {
    dataStructere.remove();
  }
}

function removeLastItem(dataStructere, type) {
  if (type == 'queue') {
    queueReverse(dataStructere);
    dataStructere.remove();
    queueReverse(dataStructere);
  } else if (type == 'stack') {
    dataStructere.remove();
  }
}

const objToCsv = (obj) => {
  if (obj == null || obj == undefined || !obj.length) {
    return;
  }

  const fields = Object.keys(obj[0]);

  const replacer = (key, value) => (value === null ? "" : value);

  let csv = obj.map((row) => {
    return fields
      .map((fieldName) => {
        return JSON.stringify(row[fieldName], replacer);
      })
      .join(",");
  });

  csv.unshift(fields.join(","));

  csv = csv.join("\r\n");

  return csv;
};

const exportCsv = (csv) => {
  fs.writeFile("./exports/output.csv", csv, (x) => x);
};

module.exports = {
  removeFirstItem,
  removeLastItem,
  objToCsv,
  exportCsv,
};
