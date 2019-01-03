import React from 'react';
import useName from './hooks';

export default function() {
    const name = useName()
    return (
        <div>
            Bienvenido prro {name.value}
        </div>
    );
}