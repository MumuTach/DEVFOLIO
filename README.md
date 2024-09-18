# DEVFOLIO

## My Personal portfolio made with Angular 18
Welcome to my personal portfolio website! This project showcases my journey as a junior developer, highlighting my skills, projects, and experience in web development. 
Built with Angular 18, this site serves as a central hub for my work, allowing you to explore the various projects I've created, learn more about me, and get in touch.

## [Demo Link](https://github.com/banesullivan/README?tab=readme-ov-file#-leave-a-good-impression)

<div align="center">
  <img src="MonPortFolio-FrontEnd/MonPortFolio.gif" alt="DevFolio Demo" width="100%" />
  <br>
</div>

## Sections 
✔️ Home\
✔️ About me\
✔️ Projects\
✔️ Contact me\
✔️ Resume

## Technologies used 🛠️
- **Angular 18** 🚀
- **HTML5** 🚀
- **CSS3** 🚀
- **Typescript** 🚀
- **JavaScript** 🚀
- **SCSS** 🚀

## How To Use 🔧
I will encourage you to clone and rename this project to use for your own purposes.

From your command line, first clone FevFolio:

```bash
# Clone this repository
$ git clone https://github.com/MumuTach/DEVFOLIO

# Go into the repository
$ cd DEVFOLIO

# Remove current origin repository
$ git remote remove origin
```

## Deployment 📦
Once you have done with your setup. You need to put your website online!
I highly recommend to use Netlify to achieve this on the EASIEST WAY

Before going to Netlify you have to follow some steps :
1. Create a netlify.toml file in the root of your project
```bash
# netlify.toml
[build]
base = "Name_of_your_project"
command = "npm run build:prod"
publish = "dist/browser"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```
2. Open your package.json and add this line in the scripts section and under the actual build:
"build:prod": "ng build --configuration=production"
3. Open the .gitignore and delete the /dist in compiled output section
4. Open angular.json and delete the name of your project after /dist in section name_of_project -> architect -> build -> options -> outputpath
5. Run the command npm run build:prod
6. You can see a dist folder created in your files
7. Commit and push the changes to git
8. You can now go to your netlify account
9. In section site overview, click on Add a new site -> import an existing project -> deploy with github
10. Choose your project
11. The configuration of your project is now open
12. Choose branch main in branch to deploy section
13. Write npm run build:prod in build section and dist/browser in publish directory
14. You can now click on the deploy button at the bottom of the page

Your site is alive 🥳
## Find a bug?
If you found and issue, please submit that issue using the issue tab above

#### Note: 
I'm currently looking for good **Job Opportunities** both **Remote ( Worldwide )** and **On-Site ( Anywhere in Canada )**. 
So, if you have a good opportunity that matches my skills experience then you can contact me on my **[Linkedin](https://www.linkedin.com/in/murielle-mobou-tachago-12154b210/)** or my email id **moboutachago@yahoo.fr** 🙌
