import React from 'react';

export function ValHolder({ handleClick, value }) {
    return (
            <div className="forVal">                
                <h1>{value}</h1>
                <form>
                    <input type="text" onChange={handleClick} value={value} data-testid="forInput" autoFocus />
                </form>
           </div>
    );
}
