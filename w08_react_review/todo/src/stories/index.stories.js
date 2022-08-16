import React from 'react';
import { storiesOf } from '@storybook/react';

import Todo from '../components/Todo';
import TodoList from '../components/TodoList';

storiesOf('Funky Todo',module).add('Todo', () => <Todo />);
storiesOf('Funky Todo',module).add('TodoList', () => <TodoList />);
