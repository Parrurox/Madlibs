

const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');

const submitMadLibs = (event) => {
    //required to prevent the form from reloading on submit
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `
        <h3>Your story:</h3>
        <p>So, you finally want to know about my <span class="inserted-text">${userSubmission.feel}</span> story. My name is <span class="inserted-text">${userSubmission.urname}</span> and these two are my best friends, the <span class="inserted-text">${userSubmission.adjective_1}</span>, <span class="inserted-text">${userSubmission.noun_1}</span>, and the 
        <span class="inserted-text"> ${userSubmission.adjective_2}</span> 
       <span class="inserted-text">${userSubmission.noun_2}</span> 
       Of all the things we're good at, finding a loving partner isn't one of them. <span class="inserted-text">${userSubmission.noun_1}</span> being the <span class="inserted-text">${userSubmission.insult1}</span>, always ends up <span class="inserted-text">${userSubmission.insult1}</span>ing in front of Crush, forcing the respectable individual to flee the area out of embarrassment. On the other hand, <span class="inserted-text">${userSubmission.noun_2}</span>, for the love of <span class="inserted-text">${userSubmission.food}</span>, can't help being a complete <span class="inserted-text">${userSubmission.insult2}</span> in proximity to the opposite gender. As for me, I tend to do what's known as a classic <span class="inserted-text">${userSubmission.urname}</span> blunder in our college, where I <span class="inserted-text">${userSubmission.insulting_verb}</span> my way into conversation with my crush, only for them to realise that I have yet again done the biggest <span class="inserted-text">${userSubmission.urname}</span> blunder by committing the unforgivably painful Cringe.
        Now that I’m <span class="inserted-text">${userSubmission.feel}</span>, it’s time to share my story with others.

    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `
        <button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>
    `;
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}