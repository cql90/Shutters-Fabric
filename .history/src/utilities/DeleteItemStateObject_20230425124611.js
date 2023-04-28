export function deleteItemStateObject(id, objs, stateObject, ShowHideTable, DisableSaveButton){
    stateObject(objs => {
        if(objs.length == 1 && id == 0){
            objs = []
            ShowHideTable(objs)
            return objs;
        }
        return objs.filter(o => o.id !== id)
    })
}