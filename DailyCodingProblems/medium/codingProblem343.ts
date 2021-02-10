class NodeClass {
  value: number;
  left?: any;
  right?: any;
  numsRight: number[];
  numsLeft: number[];

  constructor(value: number, left?: number, right?: number) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.numsRight = [];
    this.numsLeft = [];
  }

  addRight = (val: any) => {
    this.numsRight.push(val);
  };

  addLeft = (val: any) => {
    this.numsLeft.push(val);
  };
}

const mainFunc = (nodeList: number[], a: number, b: number) => {
  let sum: number = 0;

  for (let i = 0; i < nodeList.length; ++i) {
    if (nodeList[i] >= a && nodeList[i] < b) {
      sum += nodeList[i];
    }
  }
  return sum;
};

// Binary Tree Initialization
const a = new NodeClass(5);
const b = new NodeClass(3);
const c = new NodeClass(8);
const d = new NodeClass(2);
const e = new NodeClass(4);
const f = new NodeClass(6);
const g = new NodeClass(10);

a.addLeft(b.value);
a.addRight(c.value);
b.addLeft(d.value);
b.addRight(e.value);
c.addLeft(f.value);
c.addRight(g.value);

// test
let everyNode: number[] = [];
everyNode.push(a.value, b.value, c.value, d.value, e.value, f.value, g.value);
let res: number = mainFunc(everyNode, 4, 10);
