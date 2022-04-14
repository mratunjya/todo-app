import { FlexBox } from './Common/FlexBox';
import styled from 'styled-components';

export const TodoSectionWrapper = styled(FlexBox)`
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TodoListWrapper = styled(FlexBox)`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh - 121px);
    position: sticky;
    top: 101px;
    left: 0;

    &::-webkit-scrollbar {
        width: 0.5em;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        max-height: unset;
        top: unset;
        left: unset;
        margin-top: 20px;
    }
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    padding: 5px;
    background-color: #dbefdc;
    border: none;
    border-radius: 15px;

    * {
        color: #4caf50;
    }
`;

export const DeletedTodo = styled(FlexBox)`
    background-color: #f2f2f2;
    border-radius: 10px 0 10px 10px;
    padding: 10px;
    width: 25%;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 95%;
        border-radius: 10px 10px 0 0;
        margin: 20px auto;
        background-image: linear-gradient(to bottom, #e5e5e5, #ffffff);
        overflow-y: auto;
        margin-bottom: 20px;
    }

    @media only screen and (min-width: 768px) {
        h3 {
            position: sticky;
            top: 61px;
            left: -10px;
            z-index: 1;
            display: block;
            background-color: #fcfcfc;
            width: 100%;
            text-align: center;
            line-height: calc(100% + 20px);
            width: calc(100% + 20px);
            margin-left: -10px;
            margin-top: -10px;
        }
    }
`;
