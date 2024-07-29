import Plan1 from "@/components/cards/plans/plan1";
import BarHorizontal from "@/components/charts/bar-horizontal";
import Donnut from "@/components/charts/donnut";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import ShineBorder from "@/components/magicui/shine-border";
import ShinyButton from "@/components/magicui/shiny-button";
import { ChartConfig } from "@/components/ui/chart";
import { Box, Gem, Pencil, Star } from "lucide-react";

const chartDataMonths = [
  { month: "Janeiro", value: 186 },
  { month: "Fevereiro", value: 305 },
  { month: "Março", value: 237 },
  { month: "Abril", value: 73 },
  { month: "Maio", value: 209 },
  { month: "Junho", value: 214 },
];
const chartConfigMonths = {
  value: {
    label: "Assinaturas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "cc", value: 275, fill: "var(--color-cc)" },
  {
    browser: "systemManagement",
    value: 200,
    fill: "var(--color-systemManagement)",
  },
];
const chartConfig = {
  principal: {
    label: "Assinaturas",
  },
  cc: {
    label: "C. Caixa",
    color: "hsl(var(--chart-1))",
  },
  systemManagement: {
    label: "S. Gerenciamento",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Plans() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <ShineBorder
          className="rounded-lg border w-4/6 py-6 px-10 overflow-hidden relative"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex flex-col gap-6">
            <button className="flex items-center gap-2 absolute top-4 right-4 border rounded px-4 py-1 transition hover:bg-slate-100">
              <Pencil size={16} />
              <p>Editar</p>
            </button>
            <div className="flex flex-col items-start gap-1">
              <GradualSpacing
                className="text-4xl font-bold tracking-[-0.15em] text-black dark:text-white"
                text="Controle de Caixa"
              />
              <p className="leading-5">
                Nosso serviço de controle de caixa oferece uma solução completa
                para gerenciar suas finanças com eficiência e precisão.
                Projetado para atender desde pequenas empresas até grandes
                corporações, nosso sistema facilita o acompanhamento de entradas
                e saídas de dinheiro, otimiza o fluxo de caixa e proporciona
                insights financeiros valiosos para a tomada de decisões. Com uma
                interface intuitiva e ferramentas avançadas, você terá total
                controle sobre suas finanças, economizando tempo e recursos.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="border rounded flex flex-col gap-2 p-4">
                <div>
                  <h1 className="text-xl font-semibold">Plano básico</h1>
                  <p className="text-sm text-slate-800 leading-none">
                    Ideal para pequenas empresas e autônomos que estão começando
                    a organizar suas finanças.
                  </p>
                </div>
                <ShinyButton text="Ver mais" />
              </div>
              <div className="border rounded flex flex-col gap-2 p-4">
                <div>
                  <h1 className="text-xl font-semibold">Plano profissional</h1>
                  <p className="text-sm text-slate-800 leading-none">
                    Perfeito para empresas de médio porte que precisam de
                    funcionalidades avançadas e relatórios detalhados.
                  </p>
                </div>
                <ShinyButton text="Ver mais" />
              </div>
              <div className="border rounded flex flex-col gap-2 p-4">
                <div>
                  <h1 className="text-xl font-semibold">Plano empresarial</h1>
                  <p className="text-sm text-slate-800 leading-none">
                    Desenhado para grandes corporações que necessitam de uma
                    gestão financeira completa e personalizada.
                  </p>
                </div>
                <ShinyButton text="Ver mais" />
              </div>
            </div>
          </div>
        </ShineBorder>
        <div className="rounded-lg border w-3/6 py-6 px-0 overflow-hidden relative flex flex-col">
          <div className="flex flex-col items-start gap-1 px-10">
            <GradualSpacing
              className="text-4xl font-bold tracking-[-0.15em] text-black dark:text-white"
              text="Total de Assinaturas"
            />
            <p className="leading-5">
              Verifique quais são os serviços que estão sendo mais assinados e
              sua progressão ao decorrer dos meses.
            </p>
          </div>
          <div></div>
          <div className="w-full flex items-center">
            <BarHorizontal
              chartData={chartDataMonths}
              chartConfig={chartConfigMonths}
              className="w-full h-2/3"
            />
            <Donnut
              chartData={chartData}
              chartConfig={chartConfig}
              className="w-full h-2/3"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Plan1
          title="Gerenciamento de Sistemas"
          description="Nosso sistema de gerenciamento oferece uma solução integrada para otimizar a infraestrutura de TI da sua empresa. Com foco em segurança, eficiência e escalabilidade, nossa plataforma permite monitorar, manter e melhorar todos os aspectos dos seus sistemas tecnológicos. Seja você uma pequena empresa ou uma grande corporação, nosso serviço garante que seus sistemas operem de forma harmoniosa, minimizando o tempo de inatividade e maximizando a produtividade."
          plans={[
            {
              icon: Box,
              title: "Plano básico",
              description:
                "Ideal para pequenas empresas que buscam uma solução confiável para gerenciar seus sistemas de TI.",
            },
            {
              icon: Star,
              title: "Plano profissional",
              description:
                "Perfeito para empresas de médio porte que necessitam de funcionalidades avançadas e maior suporte técnico.",
            },
            {
              icon: Gem,
              title: "Plano empresarial",
              description:
                "Desenhado para grandes corporações que exigem um gerenciamento completo e personalizado dos seus sistemas de TI.",
            },
          ]}
        />
        <Plan1
          title="Serviço de Backup"
          description="Nosso serviço de backup e recuperação de dados oferece uma solução robusta para proteger as informações críticas da sua empresa contra perda, corrupção ou ataques cibernéticos. Com backups automáticos e opções de recuperação rápida, garantimos que seus dados estejam sempre seguros e acessíveis quando você precisar. Nossa tecnologia de ponta assegura que sua empresa possa continuar operando sem interrupções, mesmo em caso de desastres ou falhas de sistema."
          plans={[
            {
              icon: Box,
              title: "Plano básico",
              description:
                "Ideal para pequenas empresas que precisam de uma solução confiável para proteger seus dados.",
            },
            {
              icon: Star,
              title: "Plano profissional",
              description:
                "Perfeito para empresas de médio porte que necessitam de uma proteção de dados mais robusta e opções de recuperação rápida.",
            },
            {
              icon: Gem,
              title: "Plano empresarial",
              description:
                "Desenhado para grandes corporações que exigem a máxima proteção e disponibilidade dos seus dados críticos.",
            },
          ]}
        />
        <Plan1
          title="Monitoramento de rede"
          description="Nosso serviço de monitoramento de segurança de rede oferece uma solução abrangente para proteger a infraestrutura de TI da sua empresa contra ameaças cibernéticas. Com ferramentas avançadas de detecção e resposta a incidentes, garantimos que suas redes permaneçam seguras e operacionais. Nossa equipe de especialistas trabalha 24/7 para identificar e neutralizar qualquer vulnerabilidade, proporcionando paz de espírito e permitindo que você se concentre nas atividades principais do seu negócio."
          plans={[
            {
              icon: Box,
              title: "Plano básico",
              description:
                "Ideal para pequenas empresas que buscam uma proteção essencial para suas redes.",
            },
            {
              icon: Star,
              title: "Plano profissional",
              description:
                "Perfeito para empresas de médio porte que necessitam de uma segurança de rede mais robusta.",
            },
            {
              icon: Gem,
              title: "Plano empresarial",
              description:
                "Desenhado para grandes corporações que exigem o mais alto nível de segurança para suas redes.",
            },
          ]}
        />
      </div>
    </div>
  );
}
