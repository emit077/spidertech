'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PageLoaderContextType {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

const PageLoaderContext = createContext<PageLoaderContextType | undefined>(undefined);

export const usePageLoader = () => {
    const context = useContext(PageLoaderContext);
    if (context === undefined) {
        throw new Error('usePageLoader must be used within a PageLoaderProvider');
    }
    return context;
};

interface PageLoaderProviderProps {
    children: ReactNode;
}

export const PageLoaderProvider: React.FC<PageLoaderProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <PageLoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </PageLoaderContext.Provider>
    );
};
