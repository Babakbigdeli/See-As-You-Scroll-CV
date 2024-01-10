// to have the arrowkey to scroll the div  without the need to click on it
window.onload = function() {
    var activDiv = document.getElementById('backgroundMiddle');
    activDiv.focus();
    // to refocus the div when user clicks elsewhere on the document
    activDiv.addEventListener('blur', function() {
        activDiv.focus();
    });
}


const checkTarget = document.getElementById('myName')
console.log(window.scrollY)
const scrollableDiv = document.getElementById('backgroundMiddle');
const scrollSpeed = 0.2;
document.addEventListener('wheel', (event) => {
    scrollableDiv.scrollTop += event.deltaY * scrollSpeed;
    });

const rootElement = document.querySelector('.foreground');
const options = {
    root: rootElement,
    rootMargin: "-250px 0px 0px 0px",
    threshold: 1, 
    };
const captions = [
    {
    target: 'myName',
    insertionDiv: 'backgroundRight',
    attrToInsert: 
    `<p>My name is pronounced bɑːˈb&aelig;k, as if you merge the words bob&back on those adjacent Bs.</p>
    <p>I reside in Manchester and by submitting this CV, I'm seeking positions in Web Development. </p>
    <p>It's only a four minutes read. I've tried to keep it concise. You're not going to sit there scrolling forever.</p>`,
    },
    {
    target: 'languages',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `<p>I know</p>
    <ul>
    <li>Javascript</li>
    <li>Typescript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>MySQL</li>
    <li>And some Python</li>
    </ul>`,
    },
    {
    target: 'libraries',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `<p>I have hands-on experience with the following:</p>
    <ul>
    <li>NodeJs</li>
    <li style="text-align: left;">ReactJs, jQuery, Express, Sequelize, EJS, Handlebars, Jest, Bootstrap, Tailwind</li>
    <li style="text-align: left;">Github, GitLab, MongoDB, Postman, Figma, Balsamiq</li>
    <li>Shopify and Liquid, WordPress</li>
    </ul>
    <p>And I'm enthusiastic about expanding this list further.</p>`,
    },
    {
    target: 'MU',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `<p>It happened during the lockdown. Over a span of 24 weeks, I engaged in an intensive bootcamp program that emphasized 
    industry-leading practices and pragmatic software development standards.<br>Throughout the course, 
    I actively&nbsp;learned how to make and launch full-stack web applications. 
    My learning involved exploring new languages and frameworks through collaborative efforts with peers, 
    resulting in the development of nearly 20 small applications.</p>`,
    },
    {
    target: 'codeNation',
    insertionDiv: 'backgroundRight',
    attrToInsert: 
    `<p>A program spanning four weeks primarily centered on foundational Python concepts.</p>`,
    },
    {
    target: 'Intellithing',
    insertionDiv: 'backgroundRight',
    attrToInsert: 
    `<p>Collaborated with a team of front-end developers on the construction of a web portal for an AI and LLM project. 
    The project is developed using React, Typescript, and Tailwind. We adhered to an AGILE approach with a SCRUM team collaboration framework 
    and a GitHub Project task-board system. During intervals between sprints, I engaged with the Digital Marketing team, contributing
    to marketing campaigns utilizing tools like Linkedin Sales Navigator and Pipedrive.</p>`,
    },
    {
    target: 'opensupplies',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `<p>
    My initial exposure to Shopify marked my entrance into the world of eCommerce. Overseeing the management of two Shopify stores, I explored
    the Liquid templating language, crafting themes, and tailoring the storefronts' visual identity. This experience was an invaluable journey that provided 
    me with an in-depth understanding of the eCommerce landscape, one that I thoroughly enjoyed.</p>`,
    },
    {
    target: 'previousExprience',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `I bring forth over 20 years of extensive experience in administrative and logistics roles, spanning from clerical positions to managerial
    responsibilities across various companies. This diverse journey has not only equipped me with a wide array of skills but has also honed my 
    adaptability. From high-pressure heavy industrial site works on remote islands to corporate environments within bustling metropolises, 
    I've successfully experienced both extremes of work settings. Check my Linkedin profile (link follows) for details.`,
    },
    {
    target: 'personalProfile',
    insertionDiv: 'foregroundRight',
    attrToInsert:
    `<p>I champion teamwork, and from my experience, effective communication and seamless information flow stand out as crucial elements for successful teamwork.</p>
    <p>I appreciate a methodical and logical approach to work where you systematically organize tasks, follow a structured process, and apply rational thinking to problem-solving.</p>
    <p>My biggest passion is learning and exploring new things. As I've matured and became more disciplined, my enthusiasm has only intensified. 
    And this was a pivotal factor in my decision to transition careers. I have an avid interest in music, reading, films, and practicing meditation and yoga.</p>
    <p>Fact: In the majority of companies I've been part of, I've received a promotion within my first year of employment.</p>`,
    },
    {target: 'summary',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `<p>I consider myself an experienced professional with a wealth of skills, versatility, and flexibility. Applying for this position reflects my 
    confidence in meeting the job requirements and performing up to the expected standards. 
    I possess the attitude and approach needed for success. Skills, if I don't have them, I will learn them in no time.
    I am convinced I would make a valuable addition to your team.</p>`,
    },
    {
    target: 'myContacts',
    insertionDiv: 'backgroundRight',
    attrToInsert:
    `<p>Phone: 07456184955</p>
    <p>Email: <a href="mailto:babakbigdeli@gmail.com">babakbigdeli@gmail.com</a></p>
    <p>LinkedIn: <a style="text-align: left; font-size: 36px;" href="https://www.linkedin.com/in/babak-bigdeli-3b999055"; target="_blank">Click Here</a></p>
    <p>Github:&nbsp;<a style="text-align: left; font-size: 36px;" href="https://github.com/Babakbigdeli"; target="_blank">Click Here</a></p>
    <p>My Printable CV: <a style="text-align: left; font-size: 36px;" href="https://drive.google.com/file/d/1R6taMOMiAz7SLNdGrI4IHz0Xtnj5d7LQ/view?usp=sharing"; target="_blank">Click Here</a></p>
    `,
    },
    {
    target: 'thisCV',
    insertionDiv: 'foregroundRight',
    attrToInsert:
    ``,
    },

    ];
    


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const targetElement = captions.find(item => item.target === entry.target.id);
    const { insertionDiv, attrToInsert } = targetElement;
    const captionDiv = document.getElementById(insertionDiv);
    if (targetElement && entry.isIntersecting ) {
        const elem = document.createElement('div');
        elem.innerHTML = attrToInsert;
        captionDiv.appendChild(elem);
    } else if (!targetElement || !entry.isIntersecting){captionDiv.textContent=""}
    });
    }, options);
    captions.forEach(({target}) => {
    const observedElement = document.getElementById(target);
    
    observer.observe(observedElement);
    });



