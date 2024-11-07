import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { getAsyncTodos } from "../Features/Todo/todoSlice";

const TodoList = () => {
  const { loading, todos, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  if (loading) return <p>Data Loading ...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>TodoList</h2>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
