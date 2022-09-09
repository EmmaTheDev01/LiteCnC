import React from 'react';

export default function CartColumn() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-slide">
                    <h1 className='empty'>You have no selected products</h1>
                </div>
            </div>
        </div>
    );
}