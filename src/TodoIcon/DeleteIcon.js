import React from "react";
import {TodoIcon} from './index';

function DeletIcon({onDelete}){
    return(
        <TodoIcon
            type="delete"
            onClick={onDelete}
        />
    )
}

export {DeletIcon}