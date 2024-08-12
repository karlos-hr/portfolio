import { ISkill } from "../../core/interfaces/skill.interface";

export const skills : ISkill[] = [
    {
        title : {
            name: 'Frontend',
            color: {
                from : "from-blue-700",
                via:  "via-blue-200",
                to: "to-blue-500"
            }
        },
        technologies : [
            {
                icon:{
                    url: "skills/icons8-html-48.png",
                },
                name: "HTML",
                link: "https://www.w3schools.com/html/"
            },
            {
                icon:{
                    url: "skills/icons8-css-48.png",
                },
                name: "CSS",
                link: "https://www.w3schools.com/css/"
            },
            {
                icon:{
                    url: "skills/icons8-javascript-48.png",
                },
                name: "JavaScript",
                link: "https://www.w3schools.com/js/default.asp"
            },
            {
                icon:{
                    url: "skills/icons8-typescript-48.png",
                },
                name: "TypeScript",
                link: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
            },
            {
                icon:{
                    url: "skills/icons8-angular-48.png",
                },
                name: "Angular",
                link: "https://angular.dev/"
            },
            {
                icon:{
                    url: "skills/Djangoproject.png",
                },
                name: "Django",
                link: "https://www.djangoproject.com/"
            },
            {
                icon:{
                    url: "skills/icons8-bootstrap-48.png",
                },
                name: "Bootstrap",
                link: "https://getbootstrap.com/"
            },
            {
                icon:{
                    url: "skills/icons8-tailwindcss-48.png",
                },
                name: "Tailwind",
                link: "https://tailwindcss.com/"
            },
            {
                icon:{
                    url: "skills/material-design.svg",
                },
                name: "Material",
                link: "https://m3.material.io/"
            },
            {
                icon:{
                    url: "skills/icons8-xml-48.png",
                },
                name: "XML",
                link: "https://www.w3schools.com/xml/default.asp"
            },
            {
                icon:{
                    url: "skills/icons8-placeholder-thumbnail-json-48.png",
                },
                name: "JSON",
                link: "https://www.json.org/json-en.html"
            },
        ]
    },
    {
        title : {
            name: 'Backend',
            color: {
                from : "from-red-700",
                via:  "via-red-200",
                to: "to-red-500"
            }
        },
        technologies : [
            {
                icon:{
                    url: "skills/icons8-php-48.png",
                },
                name: "PHP",
                link : "https://www.php.net/"
            },
            {
                icon:{
                    url: "skills/icons8-python-48.png",
                },
                name: "Python",
                link: "https://www.python.org/"
            },
            {
                icon:{
                    url: "skills/Djangoproject.png",
                },
                name: "Django",
                link: "https://www.djangoproject.com/"
            },
            {
                icon:{
                    url: "skills/icons8-java-48.png",
                },
                name: "Java",
                link: "https://dev.java/learn/getting-started/"
            },
            {
                icon:{
                    url: "skills/icons8-c-48.png",
                },
                name: "C#",
                link: "https://www.w3schools.com/cs/index.php"
            },
            {
                icon:{
                    url: "skills/icons8-xml-48.png",
                },
                name: "SOAP"
            },
            {
                icon:{
                    url: "skills/icons8-placeholder-thumbnail-json-48.png",
                },
                name: "REST"
            },
            {
                icon:{
                    url: "skills/icons8-swagger-48.png",
                },
                name: "Swagger",
                link: "https://swagger.io/"
            },
            {
                icon:{
                    url: "skills/icons8-sql-server-48.png",
                },
                name: "SQL Server"
            },
            {
                icon:{
                    url: "skills/icons8-sqlite.svg",
                },
                name: "SQLite"
            },
            {
                icon:{
                    url: "skills/icons8-mysql-48.png",
                },
                name: "MySQL"
            }
        ]
    },
    {
        title : {
            name: 'Tools',
            color: {
                from : "from-gray-700",
                via:  "via-gray-200",
                to: "to-gray-500"
            }
        },
        technologies : [
            {
                icon:{
                    url: "skills/iis.png",
                },
                name: "IIS",
                link :"https://learn.microsoft.com/es-es/iis/get-started/introduction-to-iis/iis-web-server-overview"
            },
            {
                icon:{
                    url: "skills/icons8-git-48.png",
                },
                name: "Git",
                link : "https://git-scm.com/"
            },
            {
                icon:{
                    url: "skills/icons8-visual-studio-code-48.png",
                },
                name: "VS",
                link: "https://code.visualstudio.com/"
            },
            {
                icon:{
                    url: "skills/icons8-bitbucket-is-a-web-based-version-control-repository-hosting-service-48.png",
                },
                name: "Bitbucket",
                link : "https://bitbucket.org/product/"
            },
            {
                icon:{
                    url: "skills/icons8-github.svg",
                },
                name: "GitHub",
                link: "https://github.com/"
            },
            {
                icon:{
                    url: "skills/icons8-docker-48.png",
                },
                name: "Docker",
                link: "https://www.docker.com/"
            },
            {
                icon:{
                    url: "skills/soapui.png",
                },
                name: "SoapUI",
                link : "https://www.soapui.org/"
            },
            {
                icon:{
                    url: "skills/icons8-postman-is-the-only-complete-api-development-environment-48.png",
                },
                name: "Postman",
                link: "https://www.postman.com/"
            },
            {
                icon:{
                    url: "skills/clickup.png",
                },
                name: "ClickUp"
            },
            {
                icon:{
                    url: "skills/jira.png",
                },
                name: "Jira"
            },
            {
                icon:{
                    url: "skills/sqlservermanagement.png",
                    width: 128,
                    height: 128
                },
                name : "SQL Server Management",
                link : "https://learn.microsoft.com/es-es/sql/ssms/tutorials/ssms-configuration?view=sql-server-ver16"
            }
        ]
    }
]  