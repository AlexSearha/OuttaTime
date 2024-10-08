"use client";
import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import avatar from "@/public/outta_time_avatar.webp";
import { lora } from "@/fonts/Font";

export default function Home() {
  const router = useRouter();

  return (
    <div className="md:max-w-7xl">
      <div className="flex flex-col px-4 justify-center my-4 gap-2">
        <Image
          src={avatar}
          alt="outta time image"
          width={500}
          height={500}
          className="rounded-md shadow-xl"
        />
        <div className={`${lora.className}`}>
          <h1 className="font-bold">OUTA TIME !</h1>
          <p className="text-xl ">
            Le jeu d&apos;ambiance en ligne avec vos amis.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4 justify-center">
        <h2 className={`${lora.className} font-bold`}>
          Qu&apos;est ce que c&apos;est ?
        </h2>
        <p className="text-justify">
          Plongez dans l&apos;univers du célèbre jeu d&apos;ambiance,
          <span className="italic font-bold text-titileColor">
            Time&apos;s Up
          </span>
          , revisité pour une expérience en ligne !
          <br />
          Que vous soyez entre amis ou en famille, testez vos talents de
          communication et de rapidité dans ce jeu captivant.
          <br />
          Le principe est simple : en équipes, faites deviner des personnages,
          objets ou expressions à vos coéquipiers à travers plusieurs manches.
          <br />
          Mais attention, chaque tour devient plus difficile !
          <br />
          <ol className="list-decimal ml-4 my-2 italic">
            <li>La première manche vous permet de tout dire.</li>
            <li>la deuxième impose de ne dire qu&apos; un mot.</li>
            <li>La troisième se joue uniquement en mimant.</li>
          </ol>
          Rires et moments inoubliables garantis !
          <br />
          Jouez où vous voulez, quand vous voulez, avec un accès facile et
          rapide via notre plateforme en ligne.
          <br />À vos chronos, prêts, devinez !
        </p>

        <div className="flex justify-center">
          <Button
            onClick={() => router.push("/jouer")}
            className="mt-6 text-2xl font-bold h-16 w-72 animate-bounce hover:animate-none"
            color="primary"
            variant="contained"
          >
            Jouer !
          </Button>
        </div>
      </div>
    </div>
  );
}
