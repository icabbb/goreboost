"use client"
import { JSX, SVGProps, useEffect } from "react"
import { IconChevronsUp, IconFileAnalytics, IconSpy, IconGift, IconCloudStorm, IconAward } from '@tabler/icons-react';
import NavBoost from "@/components/navbar";




export default function Component() {
  useEffect(() => {
    const handleScroll = () => {
      const comprobantesSection = document.getElementById('comprobantes');

      if (comprobantesSection) {
        const sectionTop = comprobantesSection.offsetTop;
        const sectionHeight = comprobantesSection.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const opacity = 1 - (scrollPosition - sectionTop) / sectionHeight;
          const imgElement = comprobantesSection.querySelector('img');
          if (imgElement) {
            imgElement.style.opacity = opacity.toString();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#2a2d6c] text-white">
      <NavBoost />
      <header className="py-24 px-8 text-center">
        <h1 className="text-6xl font-bold uppercase">Goreboosting</h1>
        <p className="text-2xl mt-4">El mejor eloboost de todo LATAM</p>
        <p className="text-xl mt-2">Tu ránking, bajo tu control.</p>
      </header>
      <section className="px-8 py-16">
        <div className="grid grid-cols-2 gap-8 relative">
          <div className="relative">
            <div className="absolute inset-0 z-0 opacity-50 transform -translate-y-1/2 scale-75">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" style={{ overflow: "hidden", display: "block" }} width="900" height="900"><defs><linearGradient id="two-35" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="hsl(162, 100%, 58%)" stopOpacity="1"></stop><stop offset="100%" stopColor="hsl(270, 73%, 53%)" stopOpacity="1"></stop></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-65" d="M 158.904507 49.015549 C 145.583929 78.238815 196.939733 104.988274 200.760491 136.876185 C 204.41078 167.341369 210.732517 217.859597 181.734466 227.887813 C 125.637482 247.287485 99.707142 91.613613 44.02595 112.176293 C -2.371698 129.310625 49.776485 220.932996 19.48683 260.033687 C 0.099963 285.06005 -39.154615 311.437191 -68.220489 298.89349 C -104.271902 283.335103 -72.695266 204.311549 -107.777022 186.675276 C -151.046933 164.92266 -214.922491 265.484854 -247.968598 230.081234 C -280.804489 194.902826 -180.277905 139.777288 -195.356934 94.078941 C -205.450716 63.488833 -280.281202 73.997312 -277.839562 41.877575 C -273.952631 -9.254936 -161.772525 23.606256 -135.479865 -20.420304 C -127.558561 -33.684377 -142.13129 -51.894107 -139.294814 -67.080847 C -136.407267 -82.541026 -122.319524 -94.713847 -118.527407 -109.977362 C -111.385672 -138.723307 -138.267294 -180.992892 -115.282836 -199.675729 C -96.435976 -214.995334 -64.876587 -177.261713 -42.739462 -187.253816 C -5.751812 -203.949046 -18.657054 -293.90313 21.873665 -291.883784 C 60.490941 -289.95977 36.282113 -197.987349 73.222472 -186.567817 C 123.425246 -171.048418 172.788922 -300.762833 211.60425 -265.343338 C 258.540548 -222.513353 101.635193 -145.814938 132.022349 -90.011314 C 149.230848 -58.409258 206.782433 -88.111573 239.880773 -73.99342 C 276.563375 -58.346394 343.119803 -39.131884 335.429659 -0.000001 C 323.771661 59.322617 183.980044 -5.996262 158.904507 49.015549 Z " fill="url(#two-35)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g></svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold text-center">Sobre goreboosting</h2>
              <p className="mt-6 text-lg">
                Goreboosting se inició en agosto del 2022, haciendo eloboost en Soloq/DuoQ, con el pasar del tiempo la gente fue confiando en el servicio, y así mismo, comenzaron a llegar más y más cuentas por boostear, a tal punto que sobraban cuentas pero faltaba tiempo ¿O quizás más personal? ahí fue cuando se realizó la gestión de armar un stack de 5 de SOLO RADIANTES para subir 5 cuentas simultaneas, y fue todo un éxito. Hoy en día llevo más de 1785 cuentas subidas, 0 baneos/reclamos y muchos clientes satisfechos, ya que se le deja en el rango deseado, se arregla el MMR y hay 0 derrotas al momento de boostear. También hago algunos boost anónimos por twitch para que la gente vea como se hace, fue un éxito también, más de 2000 seguidores en 3 meses y 100 viewers cada día.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img
              alt="Gaming Illustration"
              className="aspect-[3/2] object-cover rounded-lg w-4/5 h-auto"
              src="/gore.webp"
            />
          </div>

        </div>
      </section>
      <section className="px-8 py-16 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/fond.webp')" }} id="comprobantes">
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-center mb-12">¿Cómo ayudamos?</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <IconChevronsUp stroke={2} />
                <h3 className="text-xl font-bold">Subimos tu MMR Interno</h3>
              </div>
              <p className="mt-2 text-lg font-semibold">
                Gracias a las victorias amplias y el buen desempeño, tu MMR interno sube, haciendo que en un futuro te toque gente más competente ya sea en tu equipo como en el equipo rival.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <IconFileAnalytics />
                <h3 className="text-xl font-bold">Estadísticas</h3>
              </div>
              <p className="mt-2 text-lg font-semibold">
                Por las victorias ya antes mencionadas, tus estadísticas en tracker y Valorant aumentan.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <IconSpy stroke={2} />
                <h3 className="text-xl font-bold">Anónimato</h3>
              </div>
              <p className="mt-2 text-lg font-semibold">
                Todo lo hacemos bajo lo anónimo, no publicamos tu nombre, ni tu número de ranking en el caso de que lo tengas, jamás en 1700 cuentas han baneado a un usuario por "boosting", ya que no damos say en el juego, ni publicamos nada con los nombres de los clientes ni las cuentas.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <IconCloudStorm />
                <h3 className="text-xl font-bold">Rapidez</h3>
              </div>
              <p className="mt-2 text-lg font-semibold">
                Tenemos victorias amplias y aplastantes, en cualquier rango, no importa si son en Hierro o Radiant, esto hace el proceso mucho más rápido y es por eso que goreboosting es tan solicitado. LAS/LAN, máximo son 2 días de boost y está todo listo.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <IconGift />
                <h3 className="text-xl font-bold">Regalos extras</h3>
              </div>
              <p className="mt-2 text-lg font-semibold">
                Si desean algún buddy de algún rango, se lo aseguramos llegando al rango indicado, y si gustan, facilitamos el clip de animación cuando se llega al rango deseado, todo gratuito, sin cobros extras.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <IconAward />
                <h3 className="text-xl font-bold">Buen comportamiento</h3>
              </div>
              <p className="mt-2 text-lg font-semibold">
                Somos profesionales en lo que hacemos, y lo tratamos con seriedad. Al momento de jugar en la cuenta del cliente, muteamos al equipo enemigo, ocultamos nombre y solo ganamos. No damos espacio a la toxicidad, ya que nos hacemos responsables.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 py-16">
        <h1 className="text-3xl font-semibold text-center mb-6">Equipo</h1>
        <div className="flex justify-center">
          <span className="block text-center text-sm mb-8 max-w-3xl">
            Estos son los integrantes que están hoy haciendo el boost durante más de 1 año ya en goreboosting, han generado cientos de ingresos durante este tiempo, dejando satisfechos a cada cliente que confía en goreboosting. Como dije anteriormente, 0 cuentas baneadas, 0 reclamos, 0 estafas, todo transparente. Son personas de confianza, con algunos llevo más de 12 años jugando, con otros solo un par, pero todos conocidos en persona y grandes amigos.
          </span>
        </div>
        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <img
              alt="Avatar 1"
              className="mx-auto h-24 w-24 rounded-full"
              height="100"
              src="/Jett_icon.webp"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <p className="mt-4">GORE</p>
          </div>
          <div className="text-center">
            <img
              alt="Avatar 2"
              className="mx-auto h-24 w-24 rounded-full"
              height="100"
              src="/Breach.webp"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <p className="mt-4">fAster</p>
          </div>
          <div className="text-center">
            <img
              alt="Avatar 3"
              className="mx-auto h-24 w-24 rounded-full"
              height="100"
              src="/raze.webp"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <p className="mt-4">Adamfps</p>
          </div>
          <div className="text-center">
            <img
              alt="Avatar 4"
              className="mx-auto h-24 w-24 rounded-full"
              height="100"
              src="/killjoy.webp"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <p className="mt-4">zenn</p>
          </div>
          <div className="text-center">
            <img
              alt="Avatar 5"
              className="mx-auto h-24 w-24 rounded-full"
              height="100"
              src="/Skye_icon.webp"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <p className="mt-4">flashero</p>
          </div>
          <div className="text-center">
            <img
              alt="Avatar 5"
              className="mx-auto h-24 w-24 rounded-full"
              height="100"
              src="/omen.webp"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <p className="mt-4">kr1ss</p>
          </div>


        </div>
      </section>
      <footer className="bg-[#1b1d41] py-8 px-8">
        <div className="flex justify-between items-center">
          <div>
            <p>2024 Goreboosting. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <FacebookIcon className="h-6 w-6" />
            <TwitterIcon className="h-6 w-6" />
            <InstagramIcon className="h-6 w-6" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function CloudLightningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function ShieldCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function TimerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function AnonimoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M 25 2 C 15.058594 2 7 4.6875 7 8 C 7 8 7 16.082031 7 25 C 7 30.082031 12.417969 44.082031 25 47 C 37.582031 44.082031 43 30.082031 43 25 C 43 16.082031 43 8 43 8 C 43 4.6875 34.941406 2 25 2 Z M 17 11 C 20.4375 11 22.195313 14.074219 22.5625 14.4375 C 23.148438 15.023438 23.148438 15.976563 22.5625 16.558594 C 21.976563 17.144531 21.023438 17.144531 20.441406 16.558594 C 20.027344 16.148438 18.6875 13 16 13 C 14.613281 13 12.953125 13.640625 11 15 C 12.855469 11.878906 15.003906 11 17 11 Z M 20 18.5 C 19.082031 19.40625 17.640625 20 16 20 C 14.359375 20 12.917969 19.40625 12 18.5 C 12.917969 17.59375 14.359375 17 16 17 C 17.640625 17 19.082031 17.59375 20 18.5 Z M 27 43 L 25 45 L 23 43 L 23 38 L 27 38 Z M 34 34 L 27 34 L 25 32 L 23 34 L 16 34 L 11 26 L 17 31 L 21 31 L 24 28 L 26 28 L 29 31 L 33 31 L 39 26 Z M 30 18.5 C 30.917969 17.59375 32.359375 17 34 17 C 35.640625 17 37.082031 17.59375 38 18.5 C 37.082031 19.40625 35.640625 20 34 20 C 32.359375 20 30.917969 19.40625 30 18.5 Z M 34 13 C 31.3125 13 29.972656 16.148438 29.5625 16.5625 C 28.976563 17.148438 28.023438 17.148438 27.441406 16.5625 C 26.855469 15.976563 26.855469 15.023438 27.441406 14.441406 C 27.804688 14.074219 29.5625 11 33 11 C 34.996094 11 37.144531 11.878906 39 15 C 37.046875 13.640625 35.386719 13 34 13 Z"></path>
    </svg>
  )
}