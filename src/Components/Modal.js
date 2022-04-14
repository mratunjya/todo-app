import { useState } from 'react';
import { PencilIcon, XIcon } from '@heroicons/react/solid';
import { FlexBox } from './Common/FlexBox';
import { PlusSmIcon } from '@heroicons/react/solid';
import {
    Backdrop,
    MainModal,
    CrossButton,
    Heading,
    TaskForm,
    TitleChip,
    TaskDescription,
    SubmitButton,
} from './Modal.styles';

function Modal({
    modalHandler,
    setTodos,
    Add,
    Update,
    updateTitle,
    updateDescription,
    setUpdateTitle,
    setUpdateDescription,
    updateId,
}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const stopPropagation = (e) => e.stopPropagation();

    const titleHandler = (e) => {
        updateTitle ? setUpdateTitle(e.target.value) : setTitle(e.target.value);
    };

    const descriptionHandler = (e) => {
        updateDescription
            ? setUpdateDescription(e.target.value)
            : setDescription(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (Update) {
            setTodos((prevTodos) => {
                const updatedTodos = [...prevTodos];
                for (let i = 0; i < updatedTodos.length; i++) {
                    if (updatedTodos[i].id === updateId) {
                        updatedTodos[i].title = updateTitle.trim();
                        updatedTodos[i].description = updateDescription.trim();
                    }
                }
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
                return updatedTodos;
            });
        } else {
            let id;
            setTodos((prevTodos) => {
                if (prevTodos.length === 0) {
                    id = 0;
                } else {
                    id = prevTodos[prevTodos.length - 1].id + 1;
                }
                const updateTodos = [
                    ...prevTodos,
                    {
                        title: title.trim(),
                        description: description.trim(),
                        id: id,
                        deleted: false,
                    },
                ].reverse();
                localStorage.setItem('todos', JSON.stringify(updateTodos));
                return updateTodos;
            });
        }
        modalHandler();
    };

    //Check If Tilt and Description are empty
    const isEmpty = () => {
        if (updateTitle) {
            if (updateTitle.trim() === '') {
                return true;
            } else {
                return false;
            }
        } else {
            if (title.trim() === '') {
                return true;
            } else {
                return false;
            }
        }
    };

    return (
        <Backdrop onClick={modalHandler}>
            <MainModal onClick={stopPropagation} column rowGap="40px">
                <CrossButton onClick={modalHandler}>
                    <XIcon />
                </CrossButton>
                <Heading>{Add ? 'Add New' : Update && 'Update'} Task</Heading>
                <TaskForm onSubmit={submitHandler}>
                    <FlexBox column rowGap="20px">
                        <TitleChip
                            type="text"
                            placeholder="Title"
                            onChange={titleHandler}
                            value={updateTitle ? updateTitle : title}
                        />
                        <TaskDescription
                            placeholder="Description"
                            onChange={descriptionHandler}
                            value={
                                updateDescription
                                    ? updateDescription
                                    : description
                            }
                        />
                    </FlexBox>
                    <SubmitButton
                        type="submit"
                        Update={Update}
                        Add={Add}
                        disabled={isEmpty()}
                    >
                        {Update ? <PencilIcon /> : Add && <PlusSmIcon />}
                        <p>{Update ? 'Update' : Add && 'Add'}</p>
                    </SubmitButton>
                </TaskForm>
            </MainModal>
        </Backdrop>
    );
}

export default Modal;
