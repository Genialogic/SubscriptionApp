import GradualSpacing from "@/components/magicui/gradual-spacing";
import { ChevronRight } from "lucide-react";
import React from "react";

interface Plan1Props {
  title: string;
  description: string;
  plans: {
    icon: any;
    title: string;
    description: string;
  }[];
}

export default function Plan1({ title, description, plans }: Plan1Props) {
  return (
    <div className="border rounded w-full px-10 py-4 flex flex-col gap-4 shadow-lg">
      <div className="flex flex-col items-start">
        <GradualSpacing
          className="text-lg font-bold tracking-[-0.25em] text-black dark:text-white"
          text={title}
        />
        <p
          className="leading-5 text-ellipsis overflow-hidden text-ms text-slate-700"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col items-center">
        {plans.map((plan, index) => (
          <>
            {index > 0 && <div className="h-px w-[90%] bg-slate-200"></div>}
            <div
              key={index}
              className="w-full radius flex items-center py-3 px-4 cursor-pointer transition hover:bg-slate-100"
            >
              <div className="flex flex-col leading-4">
                <h1 className="font-semibold text-md flex gap-1 items-center">
                  {React.createElement(plan.icon, {
                    size: 14,
                  })}{" "}
                  {plan.title}
                </h1>
                <p
                  className="leading-4 text-sm ps-5 w-3/4 text-ellipsis overflow-hidden text-slate-600"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {plan.description}
                </p>
              </div>
              <ChevronRight size={22} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
