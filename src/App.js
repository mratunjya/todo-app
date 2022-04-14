import Header from './Components/Header';
import TodoList from './Components/TodoList';
import { FlexBox } from './Components/Common/FlexBox';

function App() {
    return (
        <FlexBox justify="center" align="center" column>
            <Header />
            <TodoList />
        </FlexBox>
    );
}

export default App;
