import React from 'react';

const Header = () => {
    return (
        <header>

            <h1 id="title">노예의 노동일지</h1>
            <div className="buttonContainer">
                <div className="buttonBlue">
                    <button type="button" id="listButton" className="tooltip"><span className="tooltiptext">자린고비뷰</span></button>
                    <button type="button" id="gridButton" className="tooltip"><span className="tooltiptext">쌀가마뷰</span></button>
                    <button type="button" id="addButton" className="tooltip"><span className="tooltiptext">노동추가</span></button>


                </div>

            </div>

            {/* 깔끔하게 list 위에 넣는게 나은거같음 
             <div class="filter">
                <select name="selectFilter">
                    <option value="viewAll" selected="selected">필터선택</option>
                    <option value="">완료</option>
                    <option value="">미완료</option>
                    <option value="">생성날짜(오름차순)</option>
                </select>
            </div>
             */}

        </header>
    )
}

export default Header;