import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const circleStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'green',
    };

    const plusStyle = {
        position: 'absolute',
        color: 'white',
        fontSize: '60px',
    };

    const redCircleStyle = {
        ...circleStyle,
        backgroundColor: 'red',
    };

    const minusStyle = {
        position: 'absolute',
        color: 'white',
        fontSize: '40px',
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
                <div style={circleStyle} onClick={(event) => increaseAllocation(props.name)}>
                    <span style={plusStyle}>+</span>
                </div>
            </td>
            <td>
                <div style={redCircleStyle} onClick={(event) => decreaseAllocation(props.name)}>
                    <span style={minusStyle}>-</span>
                </div>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
