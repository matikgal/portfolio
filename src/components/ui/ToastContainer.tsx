
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();
  return (
    <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 shadow-xl min-w-[280px]"
          >
            {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-500" />}
            {toast.type === "error" && <XCircle className="w-5 h-5 text-red-500" />}
            {toast.type === "info" && <Info className="w-5 h-5 text-blue-500" />}
            <span className="text-sm font-medium text-slate-900 dark:text-white">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
