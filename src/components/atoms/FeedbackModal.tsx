import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type: "success" | "error";
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
    isOpen,
    onClose,
    title,
    message,
    type,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        className={`
              relative w-full max-w-md rounded-2xl border p-6 shadow-2xl
              ${type === "success"
                                ? "bg-black-200/90 border-green-500/30 shadow-green-500/10"
                                : "bg-black-200/90 border-red-500/30 shadow-red-500/10"
                            }
            `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div
                                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 
                  ${type === "success"
                                        ? "border-green-500 text-green-500"
                                        : "border-red-500 text-red-500"
                                    }`}
                            >
                                {type === "success" ? (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </div>

                            <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
                            <p className="mb-6 text-secondary">{message}</p>

                            <button
                                onClick={onClose}
                                className={`
                  rounded-xl px-8 py-3 font-bold text-white transition-all hover:scale-105
                  ${type === "success"
                                        ? "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20"
                                        : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/20"
                                    }
                `}
                            >
                                Tamam
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FeedbackModal;
