
export function showInsideOutsideFrame(controlName, stateInside, stateOutside){
    if( controlName === 'IM'){
        stateInside(true)
        stateOutside(false)
    }
    else if(controlName === 'OM'){
        stateInside(false)
        stateOutside(true)
    }
    else {
        stateInside(false)
        stateOutside(false)
    }
}