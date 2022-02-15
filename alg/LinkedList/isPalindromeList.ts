// 是否回文列表

import { generateRandomNum } from "../utils"

interface LinkedNode{
  value:any,
  next:LinkedNode
}

class LinkedNode{
  constructor(val:any,next?:LinkedNode){
    this.value=val==undefined?null:val
    this.next=next===undefined?null:next
  }
}

function isPalindrome1(head:LinkedNode){
  let arr:Array<any>=[]
  let head1:LinkedNode=head
let res:boolean=true

  while(head1!==null){
    arr.push(head1.value)
    head1=head1.next
  }

  while(head!==null){
    if(head.value!==arr.pop())
    {
      res=false
      break
    }
    head=head.next
  }

  return res
}

function main(){
 let testTimes:number=50
 let maxSize:number=10
 let maxValue:number=10
 let succeed:Boolean=true

//  for(let i:number=0;i<testTimes;i++){
   
//  }

let head:LinkedNode=new LinkedNode(1)
head.next=new LinkedNode(2)
head.next.next=new LinkedNode(3)

if(!isPalindrome1(head)){
  succeed=false
}


 console.log(`------${succeed?'Nice!':'No'}-----`)
}

main()
