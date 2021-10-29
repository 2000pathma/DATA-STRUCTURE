//javascript program for sorting an array using bubblesort algorithm
const num=[12,30,2,67,25,32,0];
console.log("Before Sorting:",num);

const sortedArray=bblsort(num);
console.log("After Sorting:",num);

function bblsort(no){
    var n=no.length;
    for (i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if (no[j]>no[j+1]){
                var temp=no[j];
                no[j]=no[j+1];
                no[j+1]=temp;
            }
        }
    }
    return no;
}