class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let i = 1;
    if (!this.head) {
      console.log("size = 0");
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        i++;
      }

      console.log("size is " + i);
    }
  }

  printHead() {
    if (this.head) {
      console.log("Head Value:", this.head.value);
    } else {
      console.log("The list has no head!");
    }
  }

  printTail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    console.log(currentNode.value);
  }

  printNodeAt(index) {
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }
    console.log(currentNode);
  }

  popLastElement() {
    let currentNode = this.head;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return i;
      }

      currentNode = currentNode.nextNode;
      i++;
    }
  }

  toString() {
    let currentNode = this.head;
    let listString = "";

    while (currentNode) {
      listString += `( ${currentNode.value} ) ->`;
      currentNode = currentNode.nextNode;
    }

    listString += "null";
    return listString;
  }

  displayList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value + " -> ");
      currentNode = currentNode.nextNode;
    }
    console.log("null");
  }
}

const testList = new LinkedList();
testList.append(1);
testList.append(2);
testList.append(3);
testList.append(16);
testList.append(11);
testList.prepend(7);

testList.displayList();
testList.size();

const testList2 = new LinkedList();

testList2.displayList();
testList2.size();

testList.printHead();
testList.printTail();

testList.printNodeAt(2);
testList.popLastElement();
testList.displayList();
