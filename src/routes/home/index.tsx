import { BorderBeam } from "@/components/magicui/border-beam.tsx";
import { cn } from "@/lib/utils";
import { CreditCard, Settings, Sparkles, UserPen } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4 overflow-hidden">
        <div className="relative h-[200px] w-1/3 border rounded-xl pt-12 p-4">
          <BorderBeam className="z-10" />
          <h2 className="absolute top-0 left-0 p-2 border-r border-b rounded-br-xl">
            Assinando desde maio de 2024.
          </h2>
          <div
            className={cn(
              "text-3xl font-bold group relative max-w-fit py-1.5 duration-500 ease-out [--bg-size:300%]"
            )}
          >
            <h1
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Plano Premium
            </h1>
          </div>
          <p>Próxima data de pagamento: 05 de agosto de 2024</p>
          <div className="flex gap-4 absolute bottom-4">
            <img
              src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
              alt=""
              className="w-10 aspect-video border rounded"
            />
            <p className="flex gap-2">
              <span className="flex gap-0.5 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
              </span>
              <span className="flex gap-0.5 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
              </span>
              <span className="flex gap-0.5 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
              </span>
              <span className="font-semibold">0890</span>
            </p>
          </div>
        </div>
        <div className="relative h-[200px] w-2/3 border rounded-xl flex">
          <div className="w-1/4 border-r flex flex-col justify-center items-center gap-1 cursor-pointer select-none transition hover:bg-slate-50">
            <CreditCard size={38} />
            <h1 className="leading-5">
              Gerenciar
              <br />
              assinatura
            </h1>
          </div>
          <div className="w-1/4 border-r flex flex-col justify-center items-center gap-1 cursor-pointer select-none transition hover:bg-slate-50">
            <Sparkles size={38} />
            <h1 className="leading-5">Benefícios</h1>
          </div>
          <div className="w-1/4 border-r flex flex-col justify-center items-center gap-1 cursor-pointer select-none transition hover:bg-slate-50">
            <Settings size={38} />
            <h1 className="leading-5">Configurações</h1>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-1 cursor-pointer select-none transition hover:bg-slate-50">
            <UserPen size={38} />
            <h1 className="leading-5">Editar perfil</h1>
          </div>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Nº do pedido</TableHead>
            <TableHead>Plano</TableHead>
            <TableHead>Data de emissão</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">0072138-2024</TableCell>
            <TableCell>Plano Premium</TableCell>
            <TableCell>05 de julho de 2024</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell className="text-right">R$ 19,99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">0072138-2024</TableCell>
            <TableCell>Plano Premium</TableCell>
            <TableCell>05 de junho de 2024</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell className="text-right">R$ 19,99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">0072138-2024</TableCell>
            <TableCell>Plano Premium</TableCell>
            <TableCell>05 de maio de 2024</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell className="text-right">R$ 19,99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">0072138-2024</TableCell>
            <TableCell>Plano Premium</TableCell>
            <TableCell>05 de abril de 2024</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell className="text-right">R$ 19,99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">0072138-2024</TableCell>
            <TableCell>Plano Premium</TableCell>
            <TableCell>05 de março de 2024</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell className="text-right">R$ 19,99</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
