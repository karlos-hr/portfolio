import { IProject } from "../../core/interfaces/projects.interface";



export const projects : IProject[] = [
    {
        title: 'Poker Notebook',
        subtitle: 'Poker Learning App',
        tags : [
            {
                name:'Django',
                icon: 'django.icon.svg',
                textColor: "text-white",
                bgColor : "bg-green-900",
                width: 14,
                height: 14
            },
            {
                name: 'CSS',
                icon: 'css.icon.svg',
                textColor: "text-white",
                bgColor:"bg-blue-500",       
                width: 16,
                height: 16
            },
            {
                name: 'HTML',
                icon: 'html.icon.svg',
                textColor: "text-white",
                bgColor:"bg-orange-500",
                width: 16,
                height: 16
            },
            {
                name: 'JS',
                icon: 'javascript.icon.svg',
                textColor: "text-white",
                bgColor:"bg-yellow-500",     
                width: 16,
                height: 16
            }
        ],
        images: [
            "projects/pokernotebook/1.png",
            "projects/pokernotebook/3.png",
            "projects/pokernotebook/4.png",
            "projects/pokernotebook/5.png"
        ],
        link : "https://pokernotebook.es/",
        description: [
            "Document technical specifications, architectural decisions, and codebase changes for knowledge sharing and future reference.",
            "Develop user-friendly interfaces for form creation and management using Django",
            "Stay updated on emerging security techniques and trends relevant to development. "
        ]

    }
]