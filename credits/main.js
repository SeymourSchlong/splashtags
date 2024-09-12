const credits = [
    {
        name: "seymour",
        contribution: "Website creator",
        links: {
            twitter: "spaghettitron",
            bluesky: "splashtagmaker.com",
            github: "https://github.com/SeymourSchlong/"
        }
    },
    {
        name: "Raven_The_Cute",
        contribution: "Translation help",
        links: {
            twitter: "Raven_The_Cute",
            github: "https://kaiserwholearns.github.io/"
        }
    },
    {
        name: "LeanYoshi",
        contribution: "Splatoon database",
        links: {
            twitter: "LeanYoshi",
            github: "https://leanny.github.io/"
        }
    },
    {
        name: "DeadLineSMB",
        contribution: "Splatband banners",
        links: {
            twitter: "deadlinesmb_art",
            bluesky: "deadlinesmbart.bsky.social",
            linktree: "https://linktr.ee/deadlinesmb"
        }
    },
    {
        name: "ElectroDev",
        contribution: "Special weapon banners",
        links: {
            twitter: "EIectroDev",
            bluesky: "electrodev.bsky.social",
            github: "https://electrodev1.github.io/"
        }
    },
    {
        name: "Lucyfer",
        contribution: "Pride banners",
        links: {
            twitter: "lildevilhorns",
            bluesky: "lildevilhorns.bsky.social"
        }
    },
    {
        name: "mya",
        contribution: "Grandfest banners",
        links: {
            twitter: "sillymxowmeow"
        }
    },
    {
        name: "Zeeto",
        contribution: "Splatband badges",
        links: {
            twitter: "zeeto_art"
        }
    },
    {
        name: "Sharkinodraws",
        contribution: "Salmon Run egg badges",
        links: {
            twitter: "sharkinodraws"
        }
    },
]

const load = () => {
    const creditContainer = document.querySelector("#credit-container");

    credits.forEach(wonderfulPerson => {
        const creditParent = document.createElement('div');
        creditParent.className = 'credit';

        const creditName = document.createElement('span');
        creditName.textContent = wonderfulPerson.name;
        creditName.className = 'name';

        const creditContribution = document.createElement('span');
        creditContribution.textContent = wonderfulPerson.contribution;

        const creditLinkIcons = document.createElement('div');
        creditLinkIcons.className = "link-icons";

        creditParent.appendChild(creditContribution);
        creditParent.appendChild(creditName);
        creditParent.appendChild(creditLinkIcons);

        Object.keys(wonderfulPerson.links).forEach(source => {
            const linkRef = document.createElement('a');
            linkRef.href = wonderfulPerson.links[source];
            linkRef.target = "_blank";
            linkRef.title = source;

            if (source == "twitter") {
                linkRef.href = 'https://twitter.com/' + wonderfulPerson.links[source];
            } else if (source == "bluesky") {
                linkRef.href = 'https://bsky.app/profile/' + wonderfulPerson.links[source];
            }

            const linkIcon = document.createElement('div');
            linkIcon.className = 'icon ' + source;

            linkRef.appendChild(linkIcon);
            creditLinkIcons.appendChild(linkRef);
        });

        creditContainer.appendChild(creditParent);
    });
}