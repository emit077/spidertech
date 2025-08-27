'use client';

import React, { useEffect, useState } from 'react';
import { usePageLoader } from '@/contexts/PageLoaderContext';
import PageLoader from './PageLoader';

interface PageLoaderWrapperProps {
    children: React.ReactNode;
}

const PageLoaderWrapper: React.FC<PageLoaderWrapperProps> = ({ children }) => {
    const { isLoading, hideLoader } = usePageLoader();
    const [isPageReady, setIsPageReady] = useState(false);

    useEffect(() => {
        // Handle initial page load
        const startTime = Date.now();
        const minimumLoadTime = 2500; // 2.5 seconds minimum

        const handleInitialLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

            setTimeout(() => {
                hideLoader();
                setIsPageReady(true);
            }, remainingTime);
        };

        // Check if page is already loaded
        if (document.readyState === 'complete') {
            handleInitialLoad();
        } else {
            // Wait for page to load
            window.addEventListener('load', handleInitialLoad);
        }

        return () => {
            window.removeEventListener('load', handleInitialLoad);
        };
    }, [hideLoader]);

    const handleLoaderComplete = () => {
        hideLoader();
        setIsPageReady(true);
    };

    return (
        <>
            <PageLoader
                isLoading={isLoading}
                onComplete={handleLoaderComplete}
            />
            <div className={isPageReady ? 'opacity-100' : 'opacity-0'}>
                {children}
            </div>
        </>
    );
};

export default PageLoaderWrapper;
