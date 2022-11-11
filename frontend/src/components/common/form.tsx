import React, { FormEvent, useState } from "react";
import Link from "next/link";

interface PropType {
  formType: string;
}

export function Form({ formType }: PropType) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit( e : FormEvent<HTMLFormElement>, formType : string){
    e.preventDefault();
    if (formType === "login"){
        console.log("LOGIN -- ", user, password);
    } else {
        console.log("REGISTER -- ", user, password);
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e, formType)}
        className="flex flex-col gap-5 max-w-xl mx-auto"
      >
        <input
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-3 border rounded-md"
          type="email"
          placeholder="Insira seu email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-md mb-1"
          type="password"
          placeholder="Senha"
          required
        />
        {formType === "login" ? (
          <>
            <Link className="" href="/404">
              Esqueceu sua senha?
            </Link>
            <button className="inline-block w-full bg-customBlack-300 text-center p-3 rounded-md text-white font-semibold">
              Iniciar sessão com email
            </button>
          </>
        ) : (
          <button className="inline-block w-full bg-customBlack-300 text-center p-3 rounded-md text-white font-semibold">
            Regristrar-se com email
          </button>
        )}
      </form>
      {formType === "login" ? (
        <Link
          href="/cadastrar-se"
          className="inline-block w-full text-center p-3 rounded-md text-secondary font-semibold"
        >
          Registrar-se com email
        </Link>
      ) : (
        <Link
          href="/iniciar-sessao"
          className="inline-block w-full text-center p-3 rounded-md text-secondary font-semibold"
        >
          Iniciar sessão com email
        </Link>
      )}
    </>
  );
}
