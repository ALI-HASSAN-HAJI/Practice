import React, { createElement } from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Mohamed Jaamac:</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Mohamed Jaamac:'));
}
export default Hello;