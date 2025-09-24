import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="mb-8 md:mb-0">
                        <h3 style={{color: `var(--primary-color)`}} className="text-3xl font-bold mb-2">VentureForge</h3>
                        <p style={{color: `var(--text-slate-400)`}}>AI Startup & Technology</p>
                        <p style={{color: `var(--text-slate-500)`}} className="mt-6 text-sm">Step into the forefront of innovation with our AI Startup & Technology solutions.</p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 style={{color: `var(--text-color)`}} className="font-bold mb-4">Product</h4>
                        <ul style={{color: `var(--text-slate-400)`}} className="space-y-3">
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Autocapture</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Data Governance</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Virtual Events</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Virtual Users</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Behavioral Analytics</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Connect</a></li>
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 style={{color: `var(--text-color)`}} className="font-bold mb-4">Explore</h4>
                        <ul style={{color: `var(--text-slate-400)`}} className="space-y-3">
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Resources</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[var(--text-color)] transition-colors">Documents</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{color: `var(--text-color)`}} className="font-bold mb-4">OFFICE LOCATION</h4>
                        <p style={{color: `var(--text-slate-400)`}} className="mb-8">Address Line Lorem Ipsum Dolore Sit Amet</p>
                        <h4 style={{color: `var(--text-color)`}} className="font-bold mb-4">News letter</h4>
                        <form>
                            <div className="relative">
                                <input 
                                    style={{color: `var(--text-color)`, borderColor: `var(--border-slate-700)`}}
                                    className="bg-transparent w-full py-2 px-3 leading-tight focus:outline-none border-b-2 focus:border-[var(--primary-color)] transition-colors"
                                    type="email" 
                                    placeholder="Enter your email address" 
                                />
                                <button style={{color: `var(--primary-color)`}} className="absolute right-0 top-0 mt-2" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{borderColor: `var(--border-slate-700)`, color: `var(--text-slate-500)`}} className="mt-16 pt-8 border-t text-center text-sm">
                    <p>© By VentureForge Design. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};