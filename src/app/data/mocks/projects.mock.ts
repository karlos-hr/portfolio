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
                bgColor:"bg-blue-600",       
                width: 16,
                height: 16
            },
            {
                name: 'HTML',
                icon: 'html.icon.svg',
                textColor: "text-white",
                bgColor:"bg-orange-800",
                width: 16,
                height: 16
            },
            {
                name: 'JavaScript',
                icon: 'javascript.icon.svg',
                textColor: "text-white",
                bgColor:"bg-yellow-700",     
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
            " Collaborate with researchers and domain experts to understand requirements and translate them into technical solutions.",
            "Follow coding standards, version control best practices, and project management methodologies. ",
            "Provide technical support and troubleshooting assistance to users and stakeholders",
        ]

    },
    {
        title: 'Energy Intelligence Research Group',
        subtitle: 'Forms/Questionnaires App',
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
                bgColor:"bg-blue-600",       
                width: 16,
                height: 16
            },
            {
                name: 'HTML',
                icon: 'html.icon.svg',
                textColor: "text-white",
                bgColor:"bg-orange-800",
                width: 16,
                height: 16
            },
            {
                name: 'JavaScript',
                icon: 'javascript.icon.svg',
                textColor: "text-white",
                bgColor:"bg-yellow-700",     
                width: 16,
                height: 16
            }
        ],
        images: [
            "projects/improving/1.png",
            "projects/improving/2.png",
            "projects/improving/3.png",
            "projects/improving/4.png",
            "projects/improving/5.png",
            "projects/improving/6.png",
            "projects/improving/7.png"
        ],
        link : "",
        description: [
            "Document technical specifications, architectural decisions, and codebase changes for knowledge sharing and future reference.",
            "Develop user-friendly interfaces for form creation and management",
            "Stay updated on emerging security techniques and trends relevant to development. "

        ]

    },
    {
        title: 'Shield Market',
        subtitle: 'Market website',
        tags : [
            {
                name:'Angular',
                icon: 'skills/icons8-angular-48.png',
                textColor: "text-white",
                bgColor : "bg-red-900",
                width: 14,
                height: 14
            },
            {
                name:'Django',
                icon: 'django.icon.svg',
                textColor: "text-white",
                bgColor : "bg-green-900",
                width: 14,
                height: 14
            },
            {
                name: 'HTML',
                icon: 'html.icon.svg',
                textColor: "text-white",
                bgColor:"bg-orange-800",
                width: 16,
                height: 16
            },
            {
                name: 'TypeScript',
                icon: 'skills/icons8-typescript-48.png',
                textColor: "text-white",
                bgColor:"bg-blue-600",
                width: 16,
                height: 16
            },
            {
                name: 'SCSS',
                icon: 'css.icon.svg',
                textColor: "text-white",
                bgColor:"bg-pink-600",       
                width: 16,
                height: 16
            },
            {
                name: 'Bootstrap',
                icon: 'skills/icons8-bootstrap-48.png',
                textColor: "text-white",
                bgColor:"bg-purple-800",       
                width: 16,
                height: 16
            },
            {
                name: 'Material',
                icon: 'skills/material-design.svg',
                textColor: "text-black",
                bgColor:"bg-white",       
                width: 16,
                height: 16
            },
        ],
        images: [
            "projects/shield-market/1.png",
            "projects/shield-market/2.png",
            "projects/shield-market/3.png",
            "projects/shield-market/4.png",
            "projects/shield-market/5.png"
        ],
        link : "",
        description: [
            "Design and implement a scalable platform for selling and uploading plugins, supporting both free and premium offerings with various subscription plans.",
            "Integrate user authentication features including email verification, secure sign-up processes, and role-based access control.",
            "Implement a secure plugin upload system with built-in version control and mechanisms to protect the internal code of the plugins from unauthorized access or tampering."
        ]

    },
    
]