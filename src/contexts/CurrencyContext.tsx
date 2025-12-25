import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'MAD' | 'USD' | 'CNY';

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    convert: (amount: number, from: Currency, to: Currency) => number;
    format: (amount: number, currency?: Currency) => string;
    rates: Record<Currency, number>;
}

const rates: Record<Currency, number> = {
    CNY: 1,
    MAD: 1.35, // 1 CNY = 1.35 MAD
    USD: 0.14, // 1 CNY = 0.14 USD
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrency] = useState<Currency>('MAD');

    useEffect(() => {
        const saved = localStorage.getItem('currency') as Currency;
        if (saved && ['MAD', 'USD', 'CNY'].includes(saved)) {
            setCurrency(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('currency', currency);
    }, [currency]);

    const convert = (amount: number, from: Currency, to: Currency) => {
        if (from === to) return amount;
        // Convert to CNY first then to target
        const cnyAmount = amount / rates[from];
        return cnyAmount * rates[to];
    };

    const format = (amount: number, targetCurrency: Currency = currency) => {
        const symbols: Record<Currency, string> = {
            MAD: 'MAD',
            USD: '$',
            CNY: '¥',
        };

        const formatted = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);

        if (targetCurrency === 'MAD') return `${formatted} MAD`;
        if (targetCurrency === 'USD') return `$${formatted}`;
        return `¥${formatted}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convert, format, rates }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};
