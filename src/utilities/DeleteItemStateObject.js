export function deleteItemStateObject(id, objs, stateObject, ShowHideTable, DisableSaveButton){
    stateObject(objs => {
        if(objs.length == 1 && id == 0){
            objs = []
            ShowHideTable(objs)
            DisableSaveButton(objs)
            return objs;
        }
        return objs.filter(o => o.id !== id)
    })
}

export function deleteOrderStateObject(id, objs, stateObject){
    stateObject(objs => {
        if(objs.length == 1 && id == 0){
            objs = []
            return objs;
        }
        return objs.filter(o => o.id !== id)
    })
}