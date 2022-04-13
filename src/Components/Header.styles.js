import styled from 'styled-components';
import { FlexBox } from './Common/FlexBox';

export const Head = styled(FlexBox)`
    background-color: #f5f5f5;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
    font-size: 25px;
    font-weight: bold;
    color: #333;
    letter-spacing: 0.5px;
    line-height: 60px;
`;
