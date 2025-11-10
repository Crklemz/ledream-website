"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string[];
  onValueChange: (value: string[]) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      defaultValue,
      value: controlledValue,
      onValueChange,
      children,
      className,
      collapsible = true,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | string[]
    >(() => {
      if (type === "multiple") {
        return defaultValue ?? [];
      }
      return defaultValue ?? "";
    });

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handleValueChange = React.useCallback(
      (newValue: string | string[]) => {
        if (!isControlled) {
          setUncontrolledValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [isControlled, onValueChange]
    );

    const contextValue = React.useMemo<AccordionContextValue>(() => {
      const valueArray = Array.isArray(value) ? value : value ? [value] : [];
      return {
        value: valueArray,
        onValueChange: (newValue: string[]) => {
          if (type === "single") {
            const singleValue = newValue[0] ?? "";
            if (collapsible && singleValue === valueArray[0]) {
              handleValueChange("");
            } else {
              handleValueChange(singleValue);
            }
          } else {
            handleValueChange(newValue);
          }
        },
      };
    }, [value, type, collapsible, handleValueChange]);

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("w-full", className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext = React.createContext<
  AccordionItemContextValue | undefined
>(undefined);

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const isOpen = context.value.includes(itemContext.value);

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-semibold text-neutral-white transition-all",
        "hover:text-neon-blue focus:outline-none focus-visible:text-neon-blue",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => {
        const newValue = isOpen
          ? context.value.filter((v) => v !== itemContext.value)
          : [...context.value, itemContext.value];
        context.onValueChange(newValue);
      }}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-neutral-white/60 transition-transform duration-200" />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const isOpen = context.value.includes(itemContext.value);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all duration-200",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div
        className={cn(
          "pb-4 pt-0 text-neutral-white/80 leading-relaxed",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

// AccordionItem with context provider
const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ value, children, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  const isOpen = context.value.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        ref={ref}
        className={cn(
          "border-b border-neutral-white/10",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};

