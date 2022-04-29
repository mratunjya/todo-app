import { useState } from "react";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { FlexBox } from "./Common/FlexBox";
import { PlusSmIcon } from "@heroicons/react/solid";
import {
    Backdrop,
    MainModalWrapper,
    MainModal,
    CrossButton,
    Heading,
    TaskForm,
    TitleChip,
    TaskDescription,
    SubmitButton,
} from "./Modal.styles";

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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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
        const date = new Date();
        const dateInHumanUnderstandableFormat = date
            .toLocaleDateString()
            .split("/");
        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        hours = hours < 10 ? `0${hours}` : hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        let seconds = date.getSeconds();
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        let amOrpm = date.getHours() >= 12 ? "p.m." : "a.m.";
        const time = `${hours}:${minutes}:${seconds} ${amOrpm}`;
        if (Update) {
            setTodos((prevTodos) => {
                const updatedTodos = [...prevTodos];
                for (let i = 0; i < updatedTodos.length; i++) {
                    if (updatedTodos[i].id === updateId) {
                        updatedTodos[i].title = updateTitle.trim();
                        updatedTodos[i].description = updateDescription.trim();
                        updatedTodos[
                            i
                        ].editTodoDate = `${dateInHumanUnderstandableFormat[1]}-${dateInHumanUnderstandableFormat[0]}-${dateInHumanUnderstandableFormat[2]}`;
                        updatedTodos[i].editTodoTime = time;
                    }
                }
                localStorage.setItem("todos", JSON.stringify(updatedTodos));
                return updatedTodos;
            });
        } else {
            let id;
            setTodos((prevTodos) => {
                if (prevTodos.length === 0) {
                    id = 0;
                } else {
                    let maxId = 0;
                    prevTodos.forEach((prevTodo) => {
                        if (prevTodo.id > maxId) maxId = prevTodo.id;
                    });
                    id = maxId + 1;
                }
                const updateTodos = [
                    ...prevTodos,
                    {
                        title: title.trim(),
                        description: description.trim(),
                        id: id,
                        deleted: false,
                        createDate: `${dateInHumanUnderstandableFormat[1]}-${dateInHumanUnderstandableFormat[0]}-${dateInHumanUnderstandableFormat[2]}`,
                        createTime: time,
                    },
                ];
                localStorage.setItem("todos", JSON.stringify(updateTodos));
                console.table(updateTodos);
                return updateTodos;
            });
        }
        modalHandler();
    };

    //Check If Tilt and Description are empty
    const isEmpty = () => {
        if (updateTitle) {
            if (updateTitle.trim() === "") {
                return true;
            } else {
                return false;
            }
        } else {
            if (title.trim() === "") {
                return true;
            } else {
                return false;
            }
        }
    };

    return (
        <Backdrop onClick={modalHandler}>
            <MainModalWrapper justify="center" align="center">
                <MainModal onClick={stopPropagation} column rowGap="40px">
                    <CrossButton onClick={modalHandler}>
                        <XIcon />
                    </CrossButton>
                    <Heading>{Add ? "Add New" : Update && "Update"} Task</Heading>
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
                                value={updateDescription ? updateDescription : description}
                            />
                        </FlexBox>
                        <SubmitButton
                            type="submit"
                            Update={Update}
                            Add={Add}
                            disabled={isEmpty()}
                        >
                            {Update ? <PencilIcon /> : Add && <PlusSmIcon />}
                            <p>{Update ? "Update" : Add && "Add"}</p>
                        </SubmitButton>
                    </TaskForm>
                </MainModal>
            </MainModalWrapper>
        </Backdrop>
    );
}

export default Modal;
