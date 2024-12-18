import BackButton from "../components/BackButton";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28 mb-8">
        <BackButton></BackButton>
        <div className="lg:px-20 lg:hidden">
          <div className="lg:flex lg:flex-row w-full">
            <div className="w-full mt-5 flex flex-col lg:flex-col-reverse lg:justify-start lg:items-start">
              <Image
                src="/logo-aircon-2.png"
                width={300}
                height={300}
                alt="Logo"
                className=""
              />{" "}
              <p className="text-8xl mt-3 lg:text-start font-winter">
                About Us
              </p>
            </div>
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
              <div className="w-full mt-5 flex flex-col justify-center gap-5">
                <p className="text-xl font-medium lg:text-2xl">
                  Hello Conners! Kalian pasti bertanya-tanya apa sih AIRCON
                  (Airlangga Convention) itu?
                </p>
                <p className="text-xl font-medium lg:text-2xl">
                  AIRCON adalah sebuah kompetisi untuk para pelajar SMA/K
                  seperti Kompetisi Karya Tulis Ilmiah, Infografis, Try Out,
                  Mobile Legends, Business Plan, dan Basket.
                </p>
                <p className="text-xl font-medium lg:text-2xl">
                  Kalian juga bisa hadir dan nonton keseruan AIRCON saat sekolah
                  kalian bertanding serta mendukung sebagai supporter.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between mt-7">
            <Image
              src="/Photo1.jpg"
              width={145}
              height={145}
              alt="Photo1"
              className="rounded-lg lg:w-96"
            ></Image>
            <Image
              src="/Photo2.jpg"
              width={145}
              height={145}
              alt="Photo2"
              className="rounded-lg lg:w-96"
            ></Image>
          </div>
        </div>
        <div className="hidden lg:block w-full mt-5">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col w-1/2 justify-center items-center">
              <Image
                src="/logo-aircon-2.png"
                width={600}
                height={600}
                alt="Logo"
                className=""
              />
            </div>
            <div className="mt-5 flex flex-col justify-center gap-5 w-1/2">
              <p className="text-xl font-medium lg:text-2xl">
                Hello Conners!! Kalian pasti bertanya-tanya apa sih AIRCON itu
                (Airlangga Convention)?
              </p>
              <p className="text-xl font-medium lg:text-2xl">
                AIRCON adalah sebuah acara kompetisi yang sangat spesial yang
                diselenggarakan untuk para pelajar SMA/K di seluruh Indonesia.
                Kompetisi ini melibatkan berbagai cabang lomba yang seru dan
                penuh tantangan, seperti Kompetisi Menulis, Olimpiade Cerdas
                Cermat, Poster, Basket, dan Futsal.
              </p>
              <p className="text-xl font-medium lg:text-2xl">
                Tapi itu belum semuanya! Selain ikut berkompetisi, kalian juga
                bisa datang dan menyaksikan keseruan acara AIRCON secara
                langsung. Kalian dapat menyemangati dan mendukung teman-teman
                atau bahkan sekolah kalian yang sedang bertanding di berbagai
                cabang lomba.
              </p>
              <p className="text-xl font-medium lg:text-2xl">
                Jadi, jangan lewatkan kesempatan emas untuk ikut serta dalam
                AIRCON yang pastinya akan penuh dengan pengalaman seru,
                tantangan, dan kebanggaan. Ayo, persiapkan diri kalian dan
                tunjukkan kemampuan terbaik di AIRCON!
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between mt-10">
            <Image
              src="/Photo1.jpg"
              width={145}
              height={145}
              alt="Photo1"
              className="rounded-lg lg:w-80"
            ></Image>
            <Image
              src="/Photo2.jpg"
              width={145}
              height={145}
              alt="Photo2"
              className="rounded-lg lg:w-80"
            ></Image>
            <Image
              src="/Photo3.jpg"
              width={145}
              height={145}
              alt="Photo3"
              className="rounded-lg lg:w-80"
            ></Image>
            <Image
              src="/Photo4.jpg"
              width={145}
              height={145}
              alt="Photo4"
              className="rounded-lg lg:w-80"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
