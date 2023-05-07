export function  showHideDividerSplit(controlName, stateSplit){
    if( controlName !== 'None'){
        stateSplit(true)
    }
    else {
        stateSplit(false)
    }
}