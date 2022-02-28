
/*

              1
            /   \  
           2     3  
          / \
         4   5  
*/


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.rigth = null;
    }
}



function printLevelOrder(root){
  
    if(root == null){
        return ;
    }

    let q = [];

    q.push(root);

    while(true){

        let nodeCount = q.length;

        if(nodeCount == 0) {
            break;
        }

        while(nodeCount > 0) {
            
            let node = q[0];
            
            document.write(node.data + " ");
            q.shift()

            if(node.left != null){
                q.push(node.left);
            }

            if(node.rigth != null){
                q.push(node.rigth);
            }

            nodeCount--;
        }
        
    }
}

let root = new Node(1);
root.left = new Node(2);
root.rigth = new Node(3);
root.left.left = new Node(4);
root.left.rigth = new Node(5);
root.rigth.rigth = new Node(6);

