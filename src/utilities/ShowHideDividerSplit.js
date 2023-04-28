export function  showHideDividerSplit(controlName, stateSplit){
    if( controlName === 'Split'){
        stateSplit(true)
    }
    else {
        stateSplit(false)
    }
}