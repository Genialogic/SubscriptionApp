import { Line } from "@/components/charts/line";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import NumberTicker from "@/components/magicui/number-ticker";
import { DatePickerDemo } from "@/components/utils/datePicker";
import { cn } from "@/lib/utils";
import { Gem } from "lucide-react";
import S from "./styles.module.scss";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className={`${S.layout}`}>
      <div className={`flex flex-col gap-4 ${S.col1}`}>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <GradualSpacing
                className="font-bold text-3xl tracking-[-0.15em]"
                text="Receita total"
              />
              <AnimatedGradientText>
                <span
                  className={cn(
                    `flex gap-2 font-bold text-4xl animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  <span>R$</span>
                  <NumberTicker value={90000} />
                </span>
              </AnimatedGradientText>
            </div>
            <DatePickerDemo />
          </div>
          <div className="flex justify-between gap-4">
            <Line title="Receita total" />
            <Line title="Assinaturas ativas" />
            <Line title="Serviços prestados" />
            <Line title="Cartela de clientes" />
          </div>
        </div>
        <Card></Card>
      </div>

      <div className={`border rounded w-1/3 p-4 flex flex-col gap-4 ${S.col2}`}>
        <GradualSpacing
          className="font-bold text-xl tracking-[-0.25em]"
          text="Últimas transações"
        />
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2 justify-between items-center w-full px-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-slate-200 flex items-center justify-center h-10 w-10">
                <Gem className="text-slate-700" size={18} />
              </div>
              <p className="flex flex-col">
                <span className="font-medium text-base leading-4">
                  Gerenciamento de caixa
                </span>
                <span className="text-sm leading-4">Plano empresarial</span>
              </p>
            </div>
            <p className="flex flex-col text-right">
              <span className="font-semibold text-sm leading-4">R$ 600,00</span>
              <span className="text-sm leading-4">01 Ago. 2024</span>
            </p>
          </div>
          <div className="h-px w-[95%] bg-slate-200"></div>
          <div className="flex gap-2 justify-between items-center w-full px-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-slate-200 flex items-center justify-center h-10 w-10">
                <Gem className="text-slate-700" size={18} />
              </div>
              <p className="flex flex-col">
                <span className="font-medium text-base leading-4">
                  Gerenciamento de caixa
                </span>
                <span className="text-sm leading-4">Plano empresarial</span>
              </p>
            </div>
            <p className="flex flex-col text-right">
              <span className="font-semibold text-sm leading-4">R$ 600,00</span>
              <span className="text-sm leading-4">01 Ago. 2024</span>
            </p>
          </div>
          <div className="h-px w-[95%] bg-slate-200"></div>
          <div className="flex gap-2 justify-between items-center w-full px-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-slate-200 flex items-center justify-center h-10 w-10">
                <Gem className="text-slate-700" size={18} />
              </div>
              <p className="flex flex-col">
                <span className="font-medium text-base leading-4">
                  Gerenciamento de caixa
                </span>
                <span className="text-sm leading-4">Plano empresarial</span>
              </p>
            </div>
            <p className="flex flex-col text-right">
              <span className="font-semibold text-sm leading-4">R$ 600,00</span>
              <span className="text-sm leading-4">01 Ago. 2024</span>
            </p>
          </div>
          <div className="h-px w-[95%] bg-slate-200"></div>
          <div className="flex gap-2 justify-between items-center w-full px-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-slate-200 flex items-center justify-center h-10 w-10">
                <Gem className="text-slate-700" size={18} />
              </div>
              <p className="flex flex-col">
                <span className="font-medium text-base leading-4">
                  Gerenciamento de caixa
                </span>
                <span className="text-sm leading-4">Plano empresarial</span>
              </p>
            </div>
            <p className="flex flex-col text-right">
              <span className="font-semibold text-sm leading-4">R$ 600,00</span>
              <span className="text-sm leading-4">01 Ago. 2024</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
