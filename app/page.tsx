"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col px-4 justify-center">
        <h1>OUTA TIME !</h1>
        <p className="text-xl">
          Le jeu d&apos;ambiance en ligne avec vos amis !
        </p>
      </div>
      <div className="flex flex-col p-4 justify-center">
        <h2 className="text-2xl uppercase">Qu&apos;est ce que c&apos;est ?</h2>
        <p className="text-justify text-sm">
          Plongez dans l&apos;univers du célèbre jeu d&apos;ambiance,
          Time&apos;s Up, revisité pour une expérience en ligne !
          <br />
          Que vous soyez entre amis ou en famille, testez vos talents de
          communication et de rapidité dans ce jeu captivant.
          <br />
          Le principe est simple : en équipes, faites deviner des personnages,
          objets ou expressions à vos coéquipiers à travers plusieurs manches.
          <br />
          Mais attention, chaque tour devient plus difficile !
          <br />
          La première manche vous permet de tout dire, la deuxième impose des
          restrictions et la troisième se joue uniquement en mimant.
          <br />
          Rires et moments inoubliables garantis !
          <br />
          Jouez où vous voulez, quand vous voulez, avec un accès facile et
          rapide via notre plateforme en ligne.
          <br />À vos chronos, prêts, devinez !
        </p>

        <Button
          onClick={() => router.push("/jouer")}
          className="mt-6 font-bold"
          color="primary"
          variant="contained"
        >
          Jouer !
        </Button>
      </div>
    </>
  );
}
