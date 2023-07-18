import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props: any) => {
  const { dispatch, remaining }: any = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const submitEvent = () => {
    if (cost > remaining) {
      alert('The value cannot exceed remaining funds  £' + remaining);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            defaultValue={0}
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option>Choose...</option>
            <option value="Marketing"> Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Admin">Admin</option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            defaultValue={0}
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option value="Add">Add</option>
            <option value="Reduce">Reduce</option>
          </select>

          <input
            required
            type="number"
            id="cost"
            value={cost}
            style={{ marginLeft: '2rem', fontSize: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>

          <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;

