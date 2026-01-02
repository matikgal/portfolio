
import { Loader2 } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <Loader2 className="w-6 h-6 text-primary animate-spin" />
    </div>
  );
}
