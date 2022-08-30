import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from './redux/categories/categories';

function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);

  return (
    <div className="category">
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
      <p>{categories}</p>
    </div>
  );
}

export default Category;
