import { Icon } from "@iconify/react";
import Heading2 from "./Heading2";
import { useRef, useState } from "react";

type Speaker = {
  name: string;
  description: string;
  github?: string;
  twitter?: string;
  image: string;
};

const speakers: Array<Speaker> = [
  {
    name: "Łukasz Langa",
    description: `
    " Łukasz is a long-time contributor to the Python programming language. He created Black, a popular code formatter for Python. He is also the Release Manager for Python 3.8 and 3.9.
Łukasz is equally interested in music and software engineering. He builds software for musical instruments and produces music as RPLKTR.
Between 2013 and 2018 he worked for Facebook where he helped transition Instagram from Python 2 to Python 3. Currently, he is serving as the CPython Developer in Residence for the Python Software Foundation. Łukasz is now located in Poznań, Poland. "
    `,
    github: "https://github.com/ambv",
    twitter: "https://twitter.com/llanga",
    image: "https://ik.imagekit.io/p9bsqmrho/tr:w-200/landing/lukasz.jpg",
  },
  {
    name: "Chia-liang Kao",
    description: `
      " clkao (Chia-liang Kao) has been an open source software developer since 2000. He believes that good collaboration model and tools drive innovation.
      In 2013, he created SVK, a distributed version control system prior to git, helping developers collaborate and was adopted by Apple.
      He co-founded the g0v.tw community in 2012, advocating information transparency and digital-activism through the open source model. g0v.tw was awarded as "Digital Communities: Award of Distinction" by Prix Ars Electronica 2018.
        He started InfuseAI in 2018 to help data and AI teams to be productive. InfuseAI launched PipeRider in 2022 to bring better code review to data applications. "
    `,
    image:
      "https://ik.imagekit.io/p9bsqmrho/tr:w-200/landing/chia-liang-kao.png",
  },
  {
    name: "Anthony Shaw",
    description: `" Anthony Shaw is from Sydney, Australia and is a contributor to many open-source communities.
      He runs and contributes to several popular open-source tools for DevOps, Security, Automation, and Code Quality.
      Anthony been recognized for his contribution to open source, including as Fellow of the Python Software Foundation.
      Anthony runs a <a href="https://tonybaloney.github.io/#blog" style="text-decoration: underline">Python Blog</a> and
      YouTube channel and has recently published a <a href="https://realpython.com/products/cpython-internals-book/" style="text-decoration: underline">book</a> on the Python compiler. "
      `,
    image: "https://ik.imagekit.io/p9bsqmrho/keynote/anthony.png",
  },
  {
    name: "Naomi Ceder",
    description: `" Naomi Ceder earned a Ph.D in Classics several decades ago, but switched from ancient human languages to computer languages sometime in the last century. Since 2001, she has been learning, teaching, writing about, and using <a href="https://www.naomiceder.tech/pages/speaking/speakerbio/#:~:text=about%2C%20and%20using-,Python,-." style="text-decoration: underline">Python</a>.<br />
      An elected fellow of the <a href="https://www.naomiceder.tech/pages/speaking/speakerbio/#:~:text=Python%20Software%20Foundation" style="text-decoration: underline">Python Software Foundation</a>, Naomi is a past chair of its board of directors, and in 2022 became the seventh person selected to recieve the PSF Distinguished Service Award. A founder of <a href="https://www.naomiceder.tech/pages/speaking/speakerbio/#:~:text=A%20founder%20of-,Trans*Code,-%2C%20a%20hackday%20centered" style="text-decoration: underline">Trans*Code</a>, a hackday centered on the trans and non-binary community, she also speaks internationally about the Python community and inclusion and diversity in technology in general. <br />
      In her spare time Naomi enjoys sketching, playing the guitar, and deep philosophical conversations with her dog. "`,
    image: "https://ik.imagekit.io/p9bsqmrho/keynote/naomi.png",
  },
];

const KeynoteSpeaker = ({
  speaker,
  color,
}: {
  speaker: Speaker;
  color: string;
}) => {
  const [isShowFullContent, setIsShowFullContent] = useState(false);
  const contentEL = useRef<HTMLParagraphElement>(null);

  const displaySocial = () => {
    const socials = [];

    if (speaker.twitter) {
      socials.push(
        <a
          key={speaker.name + "_twitter"}
          href={speaker.twitter}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="uil:twitter" />
        </a>
      );
    }

    if (speaker.github) {
      socials.push(
        <a
          key={speaker.name + "_github"}
          href={speaker.github}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="uil:github" />
        </a>
      );
    }

    return socials;
  };

  return (
    <div className="col-span-3 grid grid-cols-10 gap-x-4 gap-y-8">
      <div className="md:col-span-3 col-span-4">
        <div
          className="max-xl:h-32 max-xl:w-32 h-42 w-42 mx-auto rounded-full rounded-br-none overflow-hidden p-1"
          style={{ background: color }}
        >
          <div className="h-full w-full mx-auto rounded-full rounded-br-none overflow-hidden">
            <img
              className="w-full"
              width={200}
              height={200}
              src={speaker.image}
              alt={speaker.name}
            />
          </div>
        </div>
      </div>

      <div className="ml-4 inline-block md:col-span-7 col-span-full max-lg:mt-4">
        {/* Content */}

        <div>
          <p className="text-xl font-medium" style={{ color }}>
            {speaker.name}
          </p>

          <div className="mb-1 flex gap-x-2 text-xl items-center">
            {displaySocial()}
          </div>
        </div>

        {/* Session name */}
        {/* <p className="text-xl font-medium">Title</p> */}

        {/* Session description */}
        <div
          onClick={() => setIsShowFullContent(!isShowFullContent)}
          className={`
              ${isShowFullContent ? "overflow-auto" : "overflow-clip"}
                relative transition-all rounded-md group cursor-pointer
              `}
          style={{
            maxHeight: isShowFullContent
              ? contentEL.current?.clientHeight
              : "128px",
          }}
        >
          <p
            ref={contentEL}
            className="font-light relative"
            dangerouslySetInnerHTML={{ __html: speaker.description }}
          ></p>

          {!isShowFullContent && (
            <button role="button" aria-label="Expand" className="bg-black/5 backdrop-blur-md hover:bg-black/25 group-hover:bg-black/25 border-gray-400 border rounded-b-md text-slate-500 absolute bottom-0 left-0 w-full flex justify-center items-center cursor-pointer">
              <span className="hidden" aria-hidden="true">
                Read more speaker description
              </span>
              <Icon icon="mingcute:down-fill" className="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Keynote() {
  const listKeynote = () => {
    const colors = ["#54B0D0", "#60CA86", "#E4613D", "#DF86E3"];

    return speakers.map((speaker, index) => {
      return (
        <KeynoteSpeaker
          key={`speaker-${index}`}
          speaker={speaker}
          color={colors[index % colors.length]}
        />
      );
    });
  };

  return (
    <div
      id="program"
      className="flex flex-col text-black bg-slate-100 px-8 md:px-16 py-8"
    >
      <Heading2 title="Keynotes" />

      <div className="my-8">
        <div className="grid lg:grid-cols-6 gap-x-4 gap-y-8 mt-8">
          {listKeynote()}
        </div>
      </div>
    </div>
  );
}
