import React from 'react';
import { useAppSelector } from '../lib/hooks/reduxHooks';
import { Navigate } from 'react-router-dom';

type TProps = {
    children: JSX.Element;
};

export default function LoginNavigatePage({ children }: TProps) {
    const isUser = useAppSelector(state => state.user.isUser);

    return (
        <>
            {isUser ? (
                // 중첩 중괄호 사용
                children
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}
