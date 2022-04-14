import { useState, useEffect } from 'react';
import Card from './Common/Card';
import { PlusSmIcon } from '@heroicons/react/solid';
import Modal from './Modal';
import {
    TodoListWrapper,
    AddButton,
    DeletedTodo,
    TodoSectionWrapper,
} from './TodoList.styles';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [modal, setModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateDescription, setUpdateDescription] = useState('');

    const modalHandler = () => {
        setModal(!modal);
        setUpdate(false);
    };

    const updateHandler = (editID) => {
        setUpdate(!update);
        setModal(!modal);
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === editID) {
                setUpdateTitle(todos[i].title);
                setUpdateDescription(todos[i].description);
                break;
            }
        }
        setUpdateId(editID);
    };

    useEffect(() => {
        const localTodos =
            localStorage.getItem('todos') &&
            JSON.parse(localStorage.getItem('todos'));
        if (localTodos?.length > 0) {
            setTodos(localTodos);
        } else {
            setTodos([
                {
                    id: 1,
                    title: 'Learn React',
                    description: 'Learn React',
                    deleted: false,
                },
                {
                    id: 2,
                    title: 'Learn Redux',
                    description: 'Learn Redux',
                    deleted: false,
                },
            ]);
        }
    }, []);

    //Counts the number of todos which are not deleted
    const countDeleted = () => {
        let count = 0;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].deleted) {
                count++;
            }
        }
        return count;
    };

    return (
        <TodoSectionWrapper align="flex-start" columnGap="20px">
            <TodoListWrapper
                wrap="wrap"
                rowGap="20px"
                columnGap="20px"
                justify="center"
                align="center"
            >
                <AddButton>
                    <PlusSmIcon onClick={modalHandler} />
                </AddButton>
                {todos.map(
                    (todo, index) =>
                        !todo.deleted && (
                            <Card
                                key={index}
                                title={todo.title}
                                description={todo.description}
                                id={todo.id}
                                setTodos={setTodos}
                                updateHandler={updateHandler}
                            />
                        )
                )}
            </TodoListWrapper>
            {countDeleted() !== 0 && (
                <DeletedTodo
                    wrap="wrap"
                    rowGap="20px"
                    columnGap="20px"
                    align="flex-start"
                    justify="center"
                    column
                >
                    <h3>Recycle Todos</h3>
                    {todos.map(
                        (todo, index) =>
                            todo.deleted && (
                                <Card
                                    key={index}
                                    title={todo.title}
                                    description={todo.description}
                                    id={todo.id}
                                    setTodos={setTodos}
                                    updateHandler={updateHandler}
                                    deleted={todo.deleted}
                                />
                            )
                    )}
                </DeletedTodo>
            )}
            {modal && update ? (
                <Modal
                    modalHandler={modalHandler}
                    setTodos={setTodos}
                    todos={todos}
                    Update={update}
                    updateTitle={updateTitle}
                    updateDescription={updateDescription}
                    setUpdateTitle={setUpdateTitle}
                    setUpdateDescription={setUpdateDescription}
                    updateId={updateId}
                />
            ) : (
                modal && (
                    <Modal
                        modalHandler={modalHandler}
                        setTodos={setTodos}
                        todos={todos}
                        Add={true}
                    />
                )
            )}
        </TodoSectionWrapper>
    );
}

export default TodoList;
