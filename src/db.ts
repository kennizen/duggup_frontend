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
  avatar: "src/lib/assets/images/profile_pic_4x.png",
  name: {
    firstname: "Krishna",
    middlename: "",
    lastname: "Kiran",
  },
};

export const userDataById: UserInfoById = {
  userInfo: {
    avatar: "src/lib/assets/images/profile_pic_4x.png",
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
      logo: "src/lib/assets/logos/duggup_logo.svg",
      name: "Duggup",
    },
    designation: "Co-Founder and CEO",
  },
  timeline: [
    {
      date: "Dec 2023",
      posts: [
        {
          cover: "src/lib/assets/images/steave.jpg",
          desc: "No amount of technology can convert a bad story into a good story.",
        },
        {
          cover: "src/lib/assets/images/sam.jpg",
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
          logo: "src/lib/assets/logos/duggup_logo.svg",
        },
      },
    },
    {
      date: "Nov 2023",
      posts: [
        {
          cover: "src/lib/assets/images/computer.jpg",
          desc: "Startup Lesson I am reflecting. Don't build for the 'average person'.",
        },
        {
          cover: "src/lib/assets/images/arbitary.png",
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
          logo: "src/lib/assets/images/com.jfif",
        },
      },
    },
  ],
};
