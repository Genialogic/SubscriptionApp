import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitLoader from "@/components/utils/submitLoader";
import { useNavigate } from "react-router-dom";

const Required = () => <span className="text-red-500">*</span>;

function Register() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen justify-center content-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Criar uma nova conta</CardTitle>
          <CardDescription>
            Insira seus dados para criar uma nova conta na plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">
                  Nome
                  <Required />
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Sobrenome</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                E-mail
                <Required />
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.nome@exemplo.com.br"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex flex-cols-2 justify-between">
                <Label htmlFor="password">
                  Senha
                  <Required />
                </Label>
                <Label className="italic text-xs font-light">
                  A senha deve possuir no mínimo 8 caracteres.
                </Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex flex-cols-2 justify-between">
                <Label htmlFor="repeat-password">
                  Repita a sua senha
                  <Required />
                </Label>
                <Label className="italic text-xs font-light">
                  As duas senhas devem coincidir.
                </Label>
              </div>
              <Input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <SubmitLoader text="Registrar" />
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              Entrar em uma conta existente
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
