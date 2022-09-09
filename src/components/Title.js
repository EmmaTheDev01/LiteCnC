import React, { Component } from 'react';

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="">
                <h1 className="">
                    {name} {title}
                </h1>
            </div>
        </div>
    );
}
