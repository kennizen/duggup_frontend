import profilePic from "$lib/assets/images/profile_pic_4x.png";
import duggupLogo from "$lib/assets/logos/duggup_logo.svg";
import steve from "$lib/assets/images/steave.jpg";
import sam from "$lib/assets/images/sam.jpg";
import computer from "$lib/assets/images/computer.jpg";
import arbitary from "$lib/assets/images/arbitary.png";
import betterNowLogo from "$lib/assets/images/com.jfif";

export type UserData = {
  avatar: string;
  name: {
    firstname: string;
    middlename: string;
    lastname: string;
  };
};

type Timeline = {
  date: string;
  posts: {
    cover: string;
    desc: string;
  }[];
  by: {
    company: {
      logo: string;
      name: string;
      location: string;
      joinedDate: string;
      designation: string;
      jobType: string[];
    };
  };
};

export type UserInfoById = {
  userInfo: UserData & {
    about: string;
  };
  work: {
    designation: string;
    company: {
      logo: string;
      name: string;
    };
  };
  timeline: Timeline[];
};

export const userData: UserData = {
  avatar: profilePic,
  name: {
    firstname: "Krishna",
    middlename: "",
    lastname: "Kiran",
  },
};

export const userDataById: UserInfoById = {
  userInfo: {
    avatar: profilePic,
    name: {
      firstname: "Krishna",
      middlename: "",
      lastname: "Kiran",
    },
    about:
      "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
  },
  work: {
    company: {
      logo: duggupLogo,
      name: "Duggup",
    },
    designation: "Co-Founder and CEO",
  },
  timeline: [
    {
      date: "Dec 2023",
      posts: [
        {
          cover: steve,
          desc: "No amount of technology can convert a bad story into a good story.",
        },
        {
          cover: sam,
          desc: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have a big house.",
        },
      ],
      by: {
        company: {
          name: "Duggup",
          designation: "Co-Founder and CEO",
          jobType: ["Full-time", "Remote"],
          joinedDate: "Nov 2023",
          location: "San Francisco Bay Area",
          logo: duggupLogo,
        },
      },
    },
    {
      date: "Nov 2023",
      posts: [
        {
          cover: computer,
          desc: "Startup Lesson I am reflecting. Don't build for the 'average person'.",
        },
        {
          cover: arbitary,
          desc: "Your biggest regrets at 80 will be acts of omission.",
        },
      ],
      by: {
        company: {
          name: "BetterUp",
          designation: "VP Engineering",
          jobType: ["Full-time"],
          joinedDate: "Sept 2022",
          location: "San Francisco Bay Area",
          logo: betterNowLogo,
        },
      },
    },
  ],
};
