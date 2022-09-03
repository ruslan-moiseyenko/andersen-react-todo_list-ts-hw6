import { useAppDispatch } from '../hook';
import { toggleStatus, deleteTodo } from '../store/todoSlice';

interface TodoItemProps {
  id: string;
  text: string;
  isComplited: boolean;
  isFavourite: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  isComplited,
  isFavourite
}) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={isComplited}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
