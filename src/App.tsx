/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { UserWarning } from './UserWarning';
import { GlobalProvider } from './components/TodoContext';
import { USER_ID } from './utils/userId';
import { TodoHeader } from './components/TodoHeader';
import { TodoFooter } from './components/TodoFooter';
import { TodoList } from './components/TodoList';
import { ErrorNotification } from './components/ErrorNotification';
import './App.scss';

export const App: React.FC = () => {
  if (!USER_ID) {
    return <UserWarning />;
  }

  return (
    <GlobalProvider>
      <div className="todoapp">
        <h1 className="todoapp__title">todos</h1>
        <div className="todoapp__content">
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
        <ErrorNotification />
      </div>
    </GlobalProvider>
  );
};
