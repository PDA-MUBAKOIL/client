import React, { useEffect } from 'react';
import { useAppSelector } from '../lib/hooks/reduxHooks';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

type TProps = {
    children: JSX.Element;
};

export default function NonLoginNavigatePage({ children }: TProps) {
    const isUser = useAppSelector((state: RootState) => state.user.isUser);
    console.log('isUser', isUser)

    return (
        <>
            {!isUser ? (
                // 중첩 중괄호 사용
                children
            ) : (
                <Navigate to="/map" />
            )}
        </>
    );
}