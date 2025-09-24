import React, { useState, useEffect } from 'react';

interface LoadingIndicatorProps {
    idea: string;
}

const loadingSteps = [
    "Analyzing startup idea...",
    "Generating business plan...",
    "Conducting market research...",
    "Designing website prototype...",
    "Writing pitch deck script...",
    "Calculating startup score...",
    "Finalizing assets..."
];

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ idea }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStepIndex(prevIndex => (prevIndex + 1) % loadingSteps.length);
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
            <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full animate-spin"></div>
                <div className="absolute inset-1.5 bg-slate-900 rounded-full flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sky-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.188.398a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Forging Your Venture</h2>
            <p className="text-slate-400 max-w-xl mb-8">"{idea}"</p>
            <div className="w-full max-w-md">
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-sky-500 animate-pulse" style={{ width: `${((currentStepIndex + 1) / loadingSteps.length) * 100}%`, transition: 'width 1s ease-in-out' }}></div>
                </div>
                <p className="text-lg text-sky-300 font-medium h-8 transition-opacity duration-500">{loadingSteps[currentStepIndex]}</p>
            </div>
        </div>
    );
};