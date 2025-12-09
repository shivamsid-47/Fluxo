import React, { useEffect, useState } from 'react';
import { X, Download, Share } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

declare global {
    interface Window {
        deferredPrompt?: BeforeInstallPromptEvent | null;
    }
}

export const PWAInstallModal: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if event was already captured in global scope
        if (window.deferredPrompt) {
            setDeferredPrompt(window.deferredPrompt);
            setIsVisible(true);
        }

        // iOS Detection
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        // Check if running in standalone mode (already installed)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

        if (isIosDevice && !isStandalone) {
            setIsIOS(true);
            // Show modal for iOS users too, but with different instructions
            // Delay slightly to not be annoying immediately
            setTimeout(() => setIsVisible(true), 1000);
        }

        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setIsVisible(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-[2rem] p-6 max-w-sm w-full shadow-2xl relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange"></div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-slate-300 hover:text-slate-800 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm p-2 mx-auto mt-2">
                    <img src="/pwa-192x192.png" className="w-full h-full object-contain" alt="App Icon" />
                </div>

                <h3 className="text-xl font-black text-slate-800 mt-4">Install App</h3>
                <p className="text-sm text-slate-500 font-bold mt-1">
                    {isIOS ? "Install for the best experience on iOS." : "Get the full experience on your home screen."}
                </p>

                <div className="w-full pt-4 space-y-3">
                    {isIOS ? (
                        <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl text-left border border-slate-100">
                            <p className="flex items-center gap-2 mb-2 font-bold"><Share size={16} /> 1. Tap the Share button</p>
                            <p className="flex items-center gap-2 font-bold"><span className="w-4 h-4 flex items-center justify-center border border-slate-400 rounded-sm text-[10px]">+</span> 2. Select 'Add to Home Screen'</p>
                        </div>
                    ) : (
                        <button
                            onClick={handleInstallClick}
                            className="w-full py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={18} /> Install Now
                        </button>
                    )}

                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-xs font-bold text-slate-400 hover:text-slate-600 block w-full mt-2"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
};
