/**
 * Created by priyaholikatti on 3/8/17.
 */
/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var node = new ListNode(0);
    var current = node;
    var carry= 0;
    var a, b, c, sum;
    while (l1 !== null || l2 !== null){
        a = (l1 === null)? 0:l2.head.val;
        b = (l2 === null)? 0:l1.val;
        c = a+b+carry;
        sum = c%10;
        carry = Math.floor(c/10);
        // carry = (c>=10)?1:0;
        current.next = new ListNode(sum);
        current = current.next;
        // Move to next values of l1 and l2
        if (l1 !== null)
            l1= l1.next;
        if (l2 !== null)
            l2=l2.next;
        }

    if(carry !== 0){
        current.next = new ListNode(carry);
    }
    return node.next;
};

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
function SinglyList() {
    //this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(val) {
    var node = new ListNode(val),
        currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        //this._length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    //this._length++;

    return node;
};

var ll1 = new SinglyList();
ll1.add(2);
ll1.add(3);
console.log(ll1);
var ll2 = new SinglyList();
ll2.add(4);
ll2.add(5);
console.log(ll2);
console.log(addTwoNumbers(ll1,ll2));