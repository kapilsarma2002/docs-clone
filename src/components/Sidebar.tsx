import React from 'react';

const Sidebar = () => {
  const apps = [
    {
      name: "calender",
      link: "https://calendar.google.com/calendar/u/0/r",
      icon: "https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png",
    },
    {
      name: "keep",
      link: "https://www.google.com/keep/",
      icon: "https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png",
    },
    {
      name: "tasks",
      link: "https://support.google.com/a/users/answer/9310341?hl=en",
      icon: "https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png",
    },
    {
      name: "contacts",
      link: "https://contacts.google.com/",
      icon: "https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png",
    },
    {
      name: "maps",
      link: "https://www.google.com/maps",
      icon: "https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png",
    },
  ];

  return (
    <div className="flex-1 bg-white text-center text-2xl">
      <div className="mx-7 h-screen flex-col pt-16">
        {apps.map((app) => (
          <div key={app.name} className="p-3">
            <a href={app.link}>
              <img
                src={app.icon}
                alt={app.name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
