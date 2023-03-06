"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

import { items as mock } from "./mock";

interface AccordionItem {
  header: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}
const Accordion = ({ items = mock }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue="item-1"
      className={clsx("space-y-4 w-full")}
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="w-full rounded-lg focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:outline-none"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between bg-white px-4 py-2 text-left dark:bg-gray-800"
              )}
            >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {header}
              </span>
              <ChevronDownIcon
                className={clsx(
                  "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full px-4 pt-1 pb-3 bg-white rounded-b-lg dark:bg-gray-800">
            <div className="text-sm text-gray-700 dark:text-gray-400">
              {content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export { Accordion, mock };
export type { AccordionItem, AccordionProps };
