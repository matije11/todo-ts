import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/TodosContext';

function App() {
  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}

export default App;
