# jsTools
> 1、LinkedList.js双向链表，实现了增删改查等（add,remove,set,get...）
``` bash
let linkedList=new LinkedList([1,2,3]);
linkedList.add(4);
linkedList.remove(1);
linkedList.get(1);
...
```
> 2、AccuracyCalculate.js修复如：0.1+0.2，0.58*100等精度问题，toFixed bug
``` bash
0.1.add(0.2);
0.58.multiply(100);
0.605.$toFixed(2);
...
```
> 3、BinarySearchTree.js二叉搜索树，实现了增删查，
> 查包括：单项、最大/最小值、最接近值、大于/小于指定key的集合、指定key的中序集合
``` bash
let bst=new BinarySearchTree([10,20,30,35,40,50,55,60]);
bst.getMin();
bst.getFloor(11);
bst.inOrderTraversal(40);
...
```
> 4、EventListener.js事件监听器（事件订阅、触发）
``` bash
let eventListener=new EventListener();
eventListener.on("event",e=>{});
eventListener.once("event",e=>{});
eventListener.emit("event");
...
```
> 5、WsWrapper.js websocket包装器
> 封装了心跳检测、断线重连、事件发布订阅等
``` bash
let ws=new WsWrapper({url:"",params:{}});
ws.on("funcCode",e=>{});
ws.sendMessage({funcCode:"funcCode",content:"msg"});
...
```
> 其他功能陆续添加中
