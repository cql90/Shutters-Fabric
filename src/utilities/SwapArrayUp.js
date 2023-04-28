export function swapArrayUp(index, obj, stateObject){
    stateObject(() => {
        let data = [...obj];
        let temp = data[index];
        if(data[index-1] !== undefined){
          data[index] = data[index-1];
          data[index-1] = temp;
        }
        console.log(data);
        return data ;
    })
}