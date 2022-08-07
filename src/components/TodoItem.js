import React from 'react';

//Props로 text,checked,id 받아오기.
const TodoItem = () => {

    return (
        <div className="toDoItem">

            <h2>해야할 노동</h2>
            <div className="buttonContainer">
                <div className="buttonEtc">
                    <button type="button" id="checkButton" className="tooltip"><span className="tooltiptext">노동 -완-</span></button>
                    <button type="button" id="modifyButton" className="tooltip"><span className="tooltiptext">노동수정..</span></button>
                    <button type="button" id="deleteButton" className="tooltip"><span className="tooltiptext">노동취소!!</span></button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem;