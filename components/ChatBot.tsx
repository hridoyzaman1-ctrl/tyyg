import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import { GoogleGenAI } from "@google/genai"; // Removed for OpenRouter compatibility
import { SERVICES } from '../data';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const ChatBot: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: "Hello! I'm THYNKBot. How can I help you architect your digital future today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("Need help?");

    const [position, setPosition] = useState<{ x: number, y: number } | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [hasMoved, setHasMoved] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // New visibility state

    const dragRef = useRef<HTMLDivElement>(null);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const initialElemPos = useRef({ x: 0, y: 0 });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    useEffect(() => {
        const getPromptsForPath = (path: string) => {
            if (path.includes('website')) return ["Speed tips?", "Tech stack help?"];
            if (path.includes('app-development')) return ["Native or Hybrid?", "App roadmap?"];
            if (path.includes('ecommerce')) return ["Store audit?", "Boost sales?"];
            if (path.includes('software')) return ["Architecture help?", "Security audit?"];
            return ["Need a strategy?", "Start project?"];
        };

        const interval = setInterval(() => {
            if (!isOpen && !isDragging) {
                const prompts = getPromptsForPath(location.pathname);
                setPopupMessage(prompts[Math.floor(Math.random() * prompts.length)]);
                setShowPopup(true);
            }
        }, 45000);

        const initialTimer = setTimeout(() => {
            if (!isOpen && !isDragging) {
                const prompts = getPromptsForPath(location.pathname);
                setPopupMessage(prompts[Math.floor(Math.random() * prompts.length)]);
                setShowPopup(true);
            }
        }, 12000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimer);
        };
    }, [isOpen, isDragging, location.pathname]);

    // Scroll Visibility Logic
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                // If on Home, only show after scrolling past Hero (approx 80vh)
                setIsVisible(window.scrollY > window.innerHeight * 0.8);
            } else {
                setIsVisible(true);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleDragStart = (clientX: number, clientY: number) => {
        if (!dragRef.current) return;
        setIsDragging(true);
        setHasMoved(false);
        const rect = dragRef.current.getBoundingClientRect();
        const currentX = position ? position.x : rect.left;
        const currentY = position ? position.y : rect.top;
        initialElemPos.current = { x: currentX, y: currentY };
        dragStartPos.current = { x: clientX, y: clientY };
        if (!position) setPosition({ x: currentX, y: currentY });
    };

    const handleDragMove = (clientX: number, clientY: number) => {
        if (!isDragging) return;
        const dx = clientX - dragStartPos.current.x;
        const dy = clientY - dragStartPos.current.y;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) setHasMoved(true);
        let newX = initialElemPos.current.x + dx;
        let newY = initialElemPos.current.y + dy;
        newX = Math.max(10, Math.min(newX, window.innerWidth - 65));
        newY = Math.max(10, Math.min(newY, window.innerHeight - 65));
        setPosition({ x: newX, y: newY });
    };

    const handleDragEnd = () => setIsDragging(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => isDragging && handleDragMove(e.clientX, e.clientY);
        const onMouseUp = () => isDragging && handleDragEnd();
        const onTouchMove = (e: TouchEvent) => { if (isDragging) { e.preventDefault(); handleDragMove(e.touches[0].clientX, e.touches[0].clientY); } };
        const onTouchEnd = () => isDragging && handleDragEnd();
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove, { passive: false });
            window.addEventListener('touchend', onTouchEnd);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [isDragging]);

    const toggleOpen = () => { if (!hasMoved) { setIsOpen(!isOpen); setShowPopup(false); } };

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        const newHistory = [...messages, { role: 'user' as const, text: userMessage }];
        setMessages(newHistory);
        setInputValue('');
        setIsLoading(true);

        try {
            const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

            // Check if key is missing
            if (!apiKey || apiKey === 'undefined') {
                throw new Error('API Key not configured');
            }

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "google/gemini-pro", // Or "google/gemini-2.0-flash-exp:free" if available, keeping generic
                    "messages": [
                        {
                            "role": "system",
                            "content": `You are THYNKBot, Thynkit's expert AI. Provide short, punchy, expert advice on digital infrastructure, web dev, and app sizing. Context: ${SERVICES.map(s => s.title).join(', ')}`
                        },
                        ...newHistory.map(m => ({
                            role: m.role === 'model' ? 'assistant' : 'user',
                            content: m.text
                        }))
                    ]
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error("OpenRouter Error:", errText);
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            const responseText = data.choices[0]?.message?.content || "I couldn't generate a response.";

            setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'model', text: "Connection failed. Please check your API Key settings." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const isTopHalf = position ? position.y < window.innerHeight / 2 : false;
    const isLeftHalf = position ? position.x < window.innerWidth / 2 : false;

    return (
        <div
            ref={dragRef}
            className={`fixed z-[60] flex flex-col items-end transition-all duration-500 ${!position ? 'bottom-6 right-6' : ''} ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90 pointer-events-none'}`}
            style={position ? { left: position.x, top: position.y } : {}}
        >

            {/* Minimized Dialogue Popup */}
            {showPopup && !isOpen && !isDragging && (
                <div className={`absolute pointer-events-auto bg-white dark:bg-[#1F2937] text-gray-800 dark:text-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in z-50 min-w-[120px] max-w-[160px] transition-all transform scale-90 md:scale-100
                ${isTopHalf ? 'top-full mt-2' : 'bottom-full mb-2'}
                ${isLeftHalf ? 'left-0 origin-top-left' : 'right-0 origin-bottom-right'}
            `}>
                    <button onClick={(e) => { e.stopPropagation(); setShowPopup(false); }} className="absolute -top-1 -right-1 w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-[8px] hover:bg-red-500 hover:text-white">
                        <i className="fas fa-times"></i>
                    </button>
                    <p className="text-xs font-medium leading-tight">{popupMessage}</p>
                    <div className={`absolute w-2 h-2 bg-white dark:bg-[#1F2937] transform rotate-45 border-r border-b border-gray-100 dark:border-gray-700
                   ${isTopHalf ? '-top-1 border-t border-l border-b-0 border-r-0' : '-bottom-1'}
                   ${isLeftHalf ? 'left-4' : 'right-4'}
                `}></div>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className={`
              fixed md:absolute
              bg-white dark:bg-[#1F2937] 
              w-[calc(100vw-32px)] md:w-[380px] 
              h-[70vh] md:h-[550px] 
              rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col transition-all duration-300
              ${/* Positioning Logic */ ''}
              ${/* Mobile: Centered */ 'inset-x-4 bottom-24 md:inset-auto'}
              ${/* Desktop Positioning Relative to ChatHead */ ''}
              ${!position ? 'md:bottom-20 md:right-0' : (
                        isTopHalf
                            ? 'md:top-16 ' + (isLeftHalf ? 'md:left-0' : 'md:right-0')
                            : 'md:bottom-16 ' + (isLeftHalf ? 'md:left-0' : 'md:right-0')
                    )}
            `}>
                    {/* Header */}
                    <div
                        className="bg-primary p-4 flex justify-between items-center"
                    >
                        <div className="flex items-center gap-2 text-white">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <i className="fas fa-robot text-sm"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm leading-none">THYNKBot</h3>
                                <span className="text-[10px] text-white/70">AI Infrastructure Expert</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="text-white/70 hover:text-white transition-colors">
                                <i className="fas fa-ellipsis-h"></i>
                            </button>
                            <button onClick={toggleOpen} className="text-white/70 hover:text-white transition-colors">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-[#111827]/50 scrollbar-hide">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3 border border-gray-100 dark:border-gray-700 flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-[#1F2937] border-t border-gray-100 dark:border-gray-700 flex gap-2 items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-100 dark:bg-gray-900 border-transparent rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white outline-none transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            <i className="fas fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button (ChatHead) */}
            <button
                onClick={toggleOpen}
                onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 cursor-grab z-50 group
                ${isOpen ? 'bg-gray-800 text-white animate-none' : 'bg-primary text-white animate-pulse-slow'}
            `}
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl transition-transform duration-300 group-hover:rotate-12`}></i>
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white dark:border-black"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default ChatBot;