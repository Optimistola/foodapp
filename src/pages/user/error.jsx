import React from 'react';
function Error(props){
let {errortext}=props;
    return <div className="bg-red-600 px-5 py-3 mt-20 text-white hidden" id='error'>{errortext}</div>;
}
export default Error;