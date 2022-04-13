import { useRef } from 'react';
import styled from 'styled-components';
import { FlexBox } from './FlexBox';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const CardWrapper = styled(FlexBox)`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    width: 25%;
    border-radius: 8px;
    padding: 20px;
    border-top: 4px solid #ffc107;
`;

const TitleChip = styled(FlexBox)`
    background-color: RGBA(139, 195, 74, 0.4);
    padding: 5px 10px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    width: fit-content;
    word-break: break-word;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: ${(props) => (props.edit ? '#e8f4fd' : '#fcd9d6')};
    border: none;
    border-radius: 10px;

    * {
        width: 100%;
        height: 100%;
    }

    .edit {
        color: #2196f3;
    }

    .trash {
        color: #f44336;
    }
`;

function Card({ title, description, id, setTodos, updateHandler }) {
    const cardId = useRef();

    const deleteHandler = () => {
        const deleteElementId = parseInt(cardId.current.id);
        setTodos((prevTodos) => {
            let UpdateTodos = [...prevTodos];
            for (let i = 0; i < UpdateTodos.length; i++) {
                if (UpdateTodos[i].id === deleteElementId) {
                    UpdateTodos[i].deleted = true;
                    break;
                }
            }
            localStorage.setItem('todos', JSON.stringify(UpdateTodos));
            return UpdateTodos;
        });
    };

    const editHandler = () => {
        const editElementId = parseInt(cardId.current.id);
        updateHandler(editElementId);
    };

    return (
        <CardWrapper rowGap="20px" column id={id} ref={cardId}>
            <TitleChip justify="center" align="center">
                {title}
            </TitleChip>
            <p>{description}</p>
            <FlexBox align="center" justify="flex-end" columnGap="10px">
                <Button edit>
                    <PencilAltIcon className="edit" onClick={editHandler} />
                </Button>
                <Button trash onClick={deleteHandler}>
                    <TrashIcon className="trash" />
                </Button>
            </FlexBox>
        </CardWrapper>
    );
}

export default Card;
