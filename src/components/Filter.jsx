import React from 'react';

const Filter = () => {

    return (
        
          <select className="filter">
            <option value="viewAll" defaultValue="selected">탈곡기</option>
            <option value="">다했다!</option>
            <option value="">해야한다..</option>
            <option value="">언제시켰냐?</option>
          </select>
        
    )
}
export default Filter;