arr=[8,5,13,1,25,16,9,20,6]
odd=[]
even=[]

var loop =arr.filter((val)=>{
    if (val%2==0) {
        even.push(val)
    }else{
        odd.push(val)
    }
})

for(i=0;i<even.length;i++){
    for(j=0;j<even.length;j++){
        if(even[j]<even[j+1]){
            temp=even[j+1]
            even[j+1]=even[j]
            even[j]=temp
        }
    }
}
for(i=0;i<odd.length;i++){
    for(j=0;j<odd.length;j++){
        if(odd[j]>odd[j+1]){
             temp=odd[j+1]
             odd[j+1]=odd[j]
             odd[j]=temp
        }
    }
}

for(i=0;i<odd.length;i++){
    even.push(odd[i])
}

console.log(even);