import React from 'react';
function Error(props){
let {errortext}=props;
    return <div className="px-5 py-3 mt-20 text-red-600 text-bold " id='error'>{errortext}</div>;
}
export default Error;