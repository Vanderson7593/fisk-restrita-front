/* eslint-disable @next/next/link-passhref */
import React from "react";
import Head from "next/head";
import { Flex, Container } from "./marketing.styles";
import Link from "next/link";
import Campanha2022 from "../../../public/icons/campanha2022.svg";
import BarradoInfantil from "../../../public/icons/barradoInfantil.svg";
import BuddyFisk from "../../../public/icons/buddyFisk.svg";
import DatasComemorativas from "../../../public/icons/datasComemorativas.svg";
import Disney from "../../../public/icons/disney.svg";
import Premios from "../../../public/icons/premios.svg";
import Intercambio2022 from "../../../public/icons/intercambio2022.svg";
import SelosComemorativos from "../../../public/icons/selosComemorativos.svg";
import NovasUnidades from "../../../public/icons/novasUnidades.svg";
import Pesquisa from "../../../public/icons/pesquisa.svg";
import AcoesPontuais from "../../../public/icons/acoesPontuais.svg";
import Videos from "../../../public/icons/videos.svg";
import PecasEspeciais from "../../../public/icons/pecasEspeciais.svg";
import FiskPorDentro from "../../../public/icons/fiskPorDentro.svg";
import MrFisk from "../../../public/icons/mrFisk.svg";
import ComunicacaoCoronaVirus from "../../../public/icons/comunicacaoCoronaVirus.svg";
import Gifs from "../../../public/icons/gifs.svg";
import Treinamentos from "../../../public/icons/treinamentos.svg";

const Marketing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Marketing | Fisk Área Restrita</title>
      </Head>
      <Flex>
        <Container>
          <div className="menu-vertical">
            <div className="menu-vertical-container">
              <div>
                <Campanha2022 />
                <Link href="/">Campanha 2022</Link>
              </div>
              <div>
                <BarradoInfantil />
                <Link href="/">Barrado Infantil</Link>
              </div>
              <div>
                <BuddyFisk />
                <Link href="/">Buddy Fisk</Link>
              </div>
              <div>
                <DatasComemorativas />
                <Link href="/">Datas Comemorativas</Link>
              </div>
              <div>
                <Disney />
                <Link href="/">Disney</Link>
              </div>
              <div>
                <Premios />
                <Link href="/">Prêmios</Link>
              </div>
              <div>
                <Intercambio2022 />
                <Link href="/">Intercâmbio 2022</Link>
              </div>
              <div>
                <SelosComemorativos />
                <Link href="/">Selos Comemorativos</Link>
              </div>
              <div>
                <NovasUnidades />
                <Link href="/">Novas Unidades - Faixa Banner</Link>
              </div>
              <div>
                <Pesquisa />
                <Link href="/">Pesquisa</Link>
              </div>
              <div>
                <AcoesPontuais />
                <Link href="/">Ações Pontuais</Link>
              </div>
              <div>
                <Videos />
                <Link href="/">Vídeos</Link>
              </div>
              <div>
                <PecasEspeciais />
                <Link href="/">Peças Especiais</Link>
              </div>
              <div>
                <FiskPorDentro />
                <Link href="/">Fisk por Dentro</Link>
              </div>
              <div>
                <MrFisk />
                <Link href="/">Mr. Fisk</Link>
              </div>
              <div>
                <ComunicacaoCoronaVirus />
                <Link href="/">Comunicação Corona Vírus</Link>
              </div>
              <div>
                <Gifs />
                <Link href="/">Gif’s Institucionais</Link>
              </div>
              <div>
                <Treinamentos />
                <Link href="/">Treinamentos</Link>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <p>Data</p>
          </div>
        </Container>
      </Flex>
    </>
  );
};

export default Marketing;
