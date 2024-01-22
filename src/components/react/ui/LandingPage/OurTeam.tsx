import type { Teams } from "@assets/team";
import { teams } from "@assets/team";
import { Icon } from "astro-iconify";

const TeamList = ({ team, color }: { team: Teams; color: string }) => {
  const displaySocial = () => {
    const socials = [];

    if (team.linkedin) {
      socials.push(
        <a
          key={team.name + "_linkedin"}
          href={team.linkedin}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="uil:linkedin" />
        </a>
      );
    }

    if (team.github) {
      socials.push(
        <a
          key={team.name + "_github"}
          href={team.github}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="uil:github" />
        </a>
      );
    }

    if (team.twitter) {
      socials.push(
        <a
          key={team.name + "_x"}
          href={team.twitter}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="simple-icons:x" />
        </a>
      );
    }

    if (team.facebook) {
      socials.push(
        <a
          key={team.name + "_facebook"}
          href={team.facebook}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="uil:facebook" />
        </a>
      );
    }

    if (team.website) {
      socials.push(
        <a
          key={team.name + "_website"}
          href={team.website}
          target="_blank"
          style={{ color }}
        >
          <Icon icon="material-symbols:language" />
        </a>
      );
    }

    return socials;
  };

  return (
    <div>
      <div className="flex flex-wrap justify-start">
        <div className="max-sm:w-20 sm:w-40 md:w-48 lg:w-64" style={{ color }}>
          <img
            src={team.image}
            className="max-sm:w-20 max-sm:h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
            alt={team.name}
          />
          <div className="py-4">
            <p className="text-xl max-md:text-base max-sm:text-sm font-semibold">
              {team.name}
            </p>
            <p
              className="text-lg max-md:text-sm max-sm:text-xs font-medium mb-2"
              style={{ color: "#A7ADB9" }}
            >
              {team.role}
            </p>
            <div className="mb-1 flex gap-x-2 text-xl max-md:text-base max-sm:text-sm items-center">
              {displaySocial()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OurTeam() {
  let teamSlices;
  let alignments: any;
  let colors: any;

  if (window.innerWidth >= 1600) {
    alignments = [
      "justify-start",
      "justify-center",
      "justify-end",
      "justify-center",
      "justify-end",
    ];
    colors = [
      ["#00B4D5", "#00CE7F", "#F8572B"],
      ["#EF82EB", "#FF9934", "#5F01D1", "#075A82"],
      ["#00CE7F", "#F8572B", "#FF9934", "#00B4D5"],
      ["#5F01D1", "#EF82EB", "#00CE7F"],
      ["#FF9934", "#075A82", "#5F01D1"],
    ];
    teamSlices = [
      teams.slice(0, 3),
      teams.slice(3, 7),
      teams.slice(7, 11),
      teams.slice(11, 14),
      teams.slice(14, 17),
    ];
  } else if (window.innerWidth >= 1280) {
    alignments = "justify-start";
    colors = [
      ["#00B4D5", "#00CE7F", "#F8572B"],
      ["#EF82EB", "#FF9934", "#5F01D1", "#075A82"],
      ["#00CE7F", "#F8572B", "#FF9934", "#00B4D5"],
      ["#5F01D1", "#EF82EB", "#00CE7F", "#FF9934"],
      ["#075A82", "#5F01D1"],
    ];
    teamSlices = [
      teams.slice(0, 3),
      teams.slice(3, 7),
      teams.slice(7, 11),
      teams.slice(11, 15),
      teams.slice(15, 17),
    ];
  } else {
    alignments = "justify-start";
    (colors = [
      ["#00B4D5", "#00CE7F", "#F8572B"],
      ["#EF82EB", "#FF9934", "#5F01D1"],
      ["#075A82", "#00CE7F", "#F8572B"],
      ["#FF9934", "#00B4D5", "#5F01D1"],
      ["#EF82EB", "#00CE7F", "#FF9934"],
      ["#075A82", "#5F01D1"],
    ]),
      (teamSlices = [
        teams.slice(0, 3),
        teams.slice(3, 6),
        teams.slice(6, 9),
        teams.slice(9, 12),
        teams.slice(12, 15),
        teams.slice(15, 17),
      ]);
  }

  return (
    <div className="flex flex-col justify-between bg-white sm:px-8 md:px-16 py-8">
      <div className="flex flex-col gap-y-4 px-8 py-16 items-end">
        <div className="flex justify-center items-center ml-2 bg-header-orange text-white font-extrabold text-4xl leading-10 tracking-tighter uppercase p-2 w-64 h-24">
          Our Team
        </div>
        <div className="flex flex-wrap gap-x-4">
          <Icon
            icon="fluent:sparkle-32-filled"
            color="#ffc801"
            width="40px"
            height="40px"
          />
          <div className="flex justify-end items-center ml-2 bg-primary text-white p-2 w-max">
            Be a Volunteer{" "}
            <Icon className="ml-2" icon="ic:round-add-reaction" color="white" />
          </div>
        </div>
      </div>
      {teamSlices.map((teamSlice, index) => (
        <div
          key={`team-slice-${index}`}
          className={`flex flex-wrap gap-x-4 gap-y-8 mt-8 max-sm:ml-8 ${
            alignments[index]
          } ${window.innerWidth >= 1600 && index === 3 ? "ml-80" : ""}`}
        >
          {teamSlice.map((team, teamIndex) => (
            <TeamList
              key={`team-${index}-${teamIndex}`}
              team={team}
              color={colors[index] && colors[index][teamIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
