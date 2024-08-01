import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  EllipsisVertical,
  ListFilter,
  Pencil,
  RefreshCcw,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Clients() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 relative">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Clientes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex lg:flex-row sm:grid sm:grid-cols-2 gap-2 xl:gap-4 justify-between">
        <div className="flex gap-2 xl:gap-4 w-1/2">
          <div className="relative w-1/2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              type="search"
              placeholder="Procure por alguma informação aqui..."
              className="w-full appearance-none bg-background pl-8 shadow-none"
            />
          </div>
          <div className="w-1/5">
            <Select
              onValueChange={(e) => {
                setFilter(e);
              }}
              defaultValue={filter}
            >
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <ListFilter className="w-4 h-4" />
                  <SelectValue placeholder="Filtrar" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status:</SelectLabel>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Ativos</SelectItem>
                  <SelectItem value="inactive">Inativos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <RefreshCcw className="w-3 h-3" />
          Atualizar dados
        </Button>
      </div>

      <div className="flex flex-col gap-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell md:hidden w-[70px] lg:table-cell">
                ID
              </TableHead>
              <TableHead>Nome</TableHead>
              <TableHead className="hidden md:table-cell">E-mail</TableHead>
              <TableHead className="hidden xl:table-cell">
                Assinaturas
              </TableHead>
              <TableHead className="hidden xl:table-cell">
                Tempo de assinatura
              </TableHead>
              <TableHead className="hidden xl:table-cell text-right">
                Mét. de Pagamento
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium hidden sm:table-cell md:hidden lg:table-cell">
                #1
              </TableCell>
              <TableCell className="flex gap-2 align-center">
                <DropdownMenu>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <DropdownMenuTrigger asChild>
                          <div className="w-5 h-5 border rounded flex items-center justify-center">
                            <EllipsisVertical className="h-3 w-3" />
                          </div>
                        </DropdownMenuTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ações rápidas</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuItem
                      className="gap-2 cursor-pointer"
                      onClick={() => {
                        navigate(`/clientes/1`);
                      }}
                    >
                      <Pencil className="h-4 w-4" /> Editar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to={`/clientes/1`} className="underline">
                  David Aquino
                </Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                dqueiroz2005@gmail.com
              </TableCell>
              <TableCell className="hidden xl:table-cell">
                Controle de Caixa
              </TableCell>
              <TableCell className="hidden xl:table-cell">3 meses</TableCell>
              <TableCell className="hidden xl:table-cell text-right">
                Boleto Bancário
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
