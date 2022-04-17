import { useState, useEffect, useMemo } from 'react';
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

    const dummyData = useMemo(() => {
        return [
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
            {
                id: 3,
                title: 'Learn Hooks',
                description: 'Learn Hooks',
                deleted: false,
            },
            {
                id: 4,
                title: 'Learn Context API',
                description: 'Learn Context API',
                deleted: false,
            },
            {
                id: 5,
                title: 'Learn React Router',
                description: 'Learn React Router',
                deleted: false,
            },
            {
                id: 6,
                title: 'Learn Styled Components',
                description: 'Learn Styled Components',
                deleted: false,
            },
            {
                id: 7,
                title: 'Learn HTML',
                description: 'Learn HTML',
                deleted: true,
            },
            {
                id: 8,
                title: 'Learn CSS',
                description: 'Learn CSS',
                deleted: true,
            },
            {
                id: 9,
                title: 'Learn Javascript',
                description: 'Learn Javascript',
                deleted: true,
            },
        ].reverse();
    }, []);

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
            setTodos(dummyData);
        }
    }, [dummyData]);

    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : 'auto';
    }, [modal]);

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
                {todos
                    .reverse()
                    .map(
                        (todo, index) =>
                            !todo.deleted && (
                                <Card
                                    key={index}
                                    title={todo.title}
                                    description={todo.description}
                                    id={todo.id}
                                    setTodos={setTodos}
                                    updateHandler={updateHandler}
                                    createDate={
                                        todo.createDate
                                            ? todo.createDate
                                            : 'Initial'
                                    }
                                    editTodoDate={
                                        todo.editTodoDate
                                            ? todo.editTodoDate
                                            : false
                                    }
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
                    {todos
                        .reverse()
                        .map(
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
                                        createDate={
                                            todo.createDate
                                                ? todo.createDate
                                                : 'Initial'
                                        }
                                        editTodoDate={
                                            todo.editTodoDate
                                                ? todo.editTodoDate
                                                : false
                                        }
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
