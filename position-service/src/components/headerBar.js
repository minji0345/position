import React from 'react';


function headerBar() {
    return (
        <div className="header">
            <div>
                <button>All</button>
                <button>Public</button>
                <button>Private</button>
            </div>
            <div>
                <button>logout</button>
            </div>
        </div>
    );
{/* 위 버튼 등을 컴포넌트로 넘겨 줘야 겠지? */}
}


export default headerBar;