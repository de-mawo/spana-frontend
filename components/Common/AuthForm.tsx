"use client";


import { Icons } from "./Icons";
import { Button } from "../ui/button";


export function AuthForm() {

  const LoginWithGoogle = () => {
    window.open(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/authorize/google`, '_self')
  }
  
  return (
    <div className="grid gap-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" onClick={LoginWithGoogle}>
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
       

    </div>
  );
}
