import { useRef } from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { FlexBox } from './FlexBox';
import { CardWrapper, TitleChip, Button } from './Card.styles';

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
