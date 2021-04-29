const { removeFirstItem, removeLastItem, objToCsv, exportCsv } = require("./utils.js");
const Queue = require("./classes/Queue");
const Stack = require("./classes/Stack");

let output = [];
let maxNumber = 10000;
let dataStructere = {};
let types = [
    'queue',
    'stack',
];

for (let i = 1; i < 12; i++) {
    dataStructere['queue'] = new Queue();
    dataStructere['stack'] = new Stack();

    for (let j = 1; j < i ** 5; j++) {
        let value = Math.floor(Math.random() * maxNumber);
        dataStructere['queue'].insert(value);
        dataStructere['stack'].insert(value);
    }

    for (let type of types) {
        timeStart = Date.now();
        removeFirstItem(dataStructere[type], type);
        timeEnd = Date.now();
    
        output.push({
            dataStructere: type,
            size: dataStructere[type].size(),
            duration: timeEnd - timeStart,
            action: 'remove first item',
        });
    
        timeStart = Date.now();
        removeLastItem(dataStructere[type], type);
        timeEnd = Date.now();
    
        output.push({
            dataStructere: type,
            size: dataStructere[type].size(),
            duration: timeEnd - timeStart,
            action: 'remove last item',
        });
    }
}

csv = objToCsv(output);
exportCsv(csv);
