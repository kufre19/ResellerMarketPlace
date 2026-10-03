import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome({ appName, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome to ResellerMarketPlace" />
            <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center p-6">
                <div className="max-w-2xl w-full bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-xl">
                            RM
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-100">{appName || 'ResellerMarketPlace'}</h1>
                            <p className="text-sm text-slate-400">Laravel + Inertia.js + React Setup Verified</p>
                        </div>
                    </div>

                    <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50 mb-6 space-y-2 text-sm text-slate-300">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Environment:</span>
                            <span className="font-mono text-indigo-400">Laravel v{laravelVersion} (PHP v{phpVersion})</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-400">Frontend Stack:</span>
                            <span className="font-mono text-emerald-400">React 19 + Inertia.js 2.0 + TailwindCSS</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-400">Status:</span>
                            <span className="font-semibold text-emerald-400">✓ Ready for Development</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://laravel.com/docs"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition"
                        >
                            Laravel Docs
                        </a>
                        <a
                            href="https://inertiajs.com"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition text-slate-200"
                        >
                            Inertia Docs
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
