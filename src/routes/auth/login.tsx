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
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen justify-center content-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Entrar</CardTitle>
          <CardDescription>
            Insira seus dados para acessar a plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
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
                <Label htmlFor="password">Senha</Label>
                <Link to="/recuperar" className="underline text-xs">
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <SubmitLoader text="Login" />
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                navigate("/registro");
              }}
            >
              Registrar uma nova conta
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
