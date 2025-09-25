import React from 'react';
import { useScrollAndHighlight } from '../../contexts/ScrollAndHighlightContext'; // Import the hook

const Card = ({ title, description, className }: { title: string, description: string, className?: string }) => {
    const { scrollToTopAndHighlight } = useScrollAndHighlight(); // Get the function from context
    return (
        <div style={{backgroundColor: `var(--bg-slate-800)`}} className={`p-8 rounded-2xl shadow-lg backdrop-blur-xl flex flex-col justify-between h-full ${className}`}>
            <div>
                <h3 style={{color: `var(--primary-color)`}} className="text-3xl font-bold mb-4">{title}</h3>
                <p style={{color: `var(--text-slate-400)`}}>{description}</p>
            </div>
            <button onClick={scrollToTopAndHighlight} style={{backgroundColor: `var(--primary-color)`}} className="mt-8 text-white w-12 h-12 rounded-full flex items-center justify-center self-end text-2xl"> {/* Add onClick */}
                →
            </button>
        </div>
    );
};

export const GrowthSection: React.FC = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <Card title="Comprehensive Business Plans" description="Generate detailed business plans, financial projections, and strategic roadmaps with AI assistance." />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <Card title="In-depth Market Research" description="Access AI-driven market analysis, competitor insights, and target audience identification." />
                            <Card title="Compelling Pitch Decks" description="Create professional and persuasive pitch decks to attract investors and partners." />
                        </div>
                    </div>
                    <div className="text-left lg:text-right">
                        <h2 className="text-5xl font-bold leading-tight">Accelerate Your Startup's Journey from Concept to Market.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};