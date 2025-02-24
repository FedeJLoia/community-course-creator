
import { cn } from "@/lib/utils";

interface TopicCardProps {
  title: string;
  description: string;
  className?: string;
}

export const TopicCard = ({ title, description, className }: TopicCardProps) => {
  return (
    <div className={cn("glass p-6 rounded-xl fade-up", className)}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
