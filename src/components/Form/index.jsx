import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getParasAsync } from "../../redux/paras";
import './style.scss'

function Form() {
  const [number, setNumber] = useState('4');
  const [type, setType] = useState('text');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleChange = async () => {
      await dispatch(getParasAsync({ paras: number, format: type }));
    };

    handleChange();
  }, [number, type, dispatch]);

  return (
    <form>
      <div className='form-group'>
        <label>Paragraphs</label>
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>Include HTML</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value='html'>yes</option>
          <option value='text'>No</option>
        </select>
      </div>
    </form>
  )
}

export default Form;
