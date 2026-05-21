const scenarios = [
	{
		label: 'A joke landed badly',
		place: 'Tutorial room',
		comment: '"It was only a joke."',
		context: 'The room laughs. One person goes quiet. The next few seconds decide whether the joke becomes normal.',
		keeper: 'Can we not make identity the punchline?',
		options: [
			{
				text: 'Stay quiet so it does not get awkward.',
				title: 'The awkwardness moves to the person harmed.',
				copy: 'Silence can make the joke feel accepted, even when people privately disagree.',
				impact: { belonging: -8, safety: -7, burden: 10 }
			},
			{
				text: 'Can we not make identity the punchline?',
				best: true,
				title: 'You paused the pattern.',
				copy: 'This is short, clear and does not ask the person targeted to explain why it hurt.',
				impact: { belonging: 12, safety: 10, burden: -10 }
			},
			{
				text: 'Check in quietly after class.',
				title: 'Support helps, but the room still learned something.',
				copy: 'Checking in matters. If nobody interrupts the joke, the group norm may still stay unchanged.',
				impact: { belonging: 4, safety: 5, burden: -3 }
			}
		]
	},
	{
		label: 'Someone says special treatment',
		place: 'Group assignment chat',
		comment: '"They get special treatment anyway."',
		context: 'Equity support is framed as unfair advantage. The myth can shame students for using support or being present.',
		keeper: 'Equity is not special treatment. It is about removing barriers.',
		options: [
			{
				text: 'That is racist.',
				title: 'You named the issue, but not the myth.',
				copy: 'It may be true, but the conversation can turn into defensiveness before the false belief is challenged.',
				impact: { belonging: 2, safety: -2, burden: 4 }
			},
			{
				text: 'Equity is not special treatment. It is about removing barriers.',
				best: true,
				title: 'You shifted the frame.',
				copy: 'This challenges the dominant myth without making a First Nations student defend support programs.',
				impact: { belonging: 12, safety: 9, burden: -9 }
			},
			{
				text: 'Where did you hear that?',
				title: 'You slowed the stereotype.',
				copy: 'A calm question can move the group back to evidence instead of repeating resentment.',
				impact: { belonging: 7, safety: 6, burden: -4 }
			}
		]
	},
	{
		label: 'Colour-blind comment',
		place: 'Campus conversation',
		comment: '"I do not see race. I treat everyone the same."',
		context: 'The intention may sound fair. The impact can be that racism becomes harder to name.',
		keeper: 'I get the intention, but racism still sees race.',
		options: [
			{
				text: 'Agree and move on.',
				title: 'Good intentions can hide harm.',
				copy: 'Ignoring race can also ignore the different ways racism shapes safety, trust and belonging.',
				impact: { belonging: -6, safety: -5, burden: 7 }
			},
			{
				text: 'I get the intention, but racism still sees race.',
				best: true,
				title: 'You kept the tone open and named the harm.',
				copy: 'This does not attack the person. It makes the pattern visible.',
				impact: { belonging: 10, safety: 9, burden: -7 }
			},
			{
				text: 'That is not how racism works.',
				title: 'Accurate, but harder to hear.',
				copy: 'This may work with a close friend. In a mixed room, a more specific line often travels better.',
				impact: { belonging: 2, safety: -3, burden: 3 }
			}
		]
	},
	{
		label: 'One student is put on the spot',
		place: 'Class discussion',
		comment: '"Can you explain the Aboriginal view?"',
		context: 'One person is asked to represent diverse peoples, histories and communities.',
		keeper: 'Let us not put one person on the spot. We can use First Nations-led resources.',
		options: [
			{
				text: 'Wait for them to answer.',
				title: 'Pressure can still sit there.',
				copy: 'Silence after the question can make one student carry the room even if nobody intended harm.',
				impact: { belonging: -5, safety: -5, burden: 9 }
			},
			{
				text: 'Let us not put one person on the spot. We can use First Nations-led resources.',
				best: true,
				title: 'You moved the learning burden back to the group.',
				copy: 'This protects the student from being treated as the room\'s cultural help desk.',
				impact: { belonging: 12, safety: 10, burden: -12 }
			},
			{
				text: 'Ask if they are comfortable answering.',
				title: 'Consent matters, but the spotlight remains.',
				copy: 'This is better than assuming. Still, the group can do its own learning first.',
				impact: { belonging: 4, safety: 4, burden: 1 }
			}
		]
	},
	{
		label: 'Identity is questioned',
		place: 'Before class',
		comment: '"Are you really Aboriginal?"',
		context: 'The question can sound casual. It can also make someone feel examined, doubted or exposed.',
		keeper: 'That is not something we should ask someone to prove.',
		options: [
			{
				text: 'Say nothing because it feels awkward.',
				title: 'The person is left to manage the question.',
				copy: 'That can make identity feel like something to defend in public.',
				impact: { belonging: -8, safety: -8, burden: 12 }
			},
			{
				text: 'That is not something we should ask someone to prove.',
				best: true,
				title: 'You set a clear boundary.',
				copy: 'This interrupts the demand for proof without asking for personal disclosure.',
				impact: { belonging: 11, safety: 11, burden: -11 }
			},
			{
				text: 'Change the subject.',
				title: 'Pressure may drop, but the boundary is unclear.',
				copy: 'Redirecting can help in the moment. A clear line better protects the person from the question returning.',
				impact: { belonging: 3, safety: 4, burden: -2 }
			}
		]
	},
	{
		label: 'A racist meme appears',
		place: 'Student group chat',
		comment: 'A racist meme appears. Several people react with laughing emojis.',
		context: 'Online silence can look like agreement because everyone can see who speaks and who lets it pass.',
		keeper: 'I do not want racist memes in this chat. Please delete it.',
		options: [
			{
				text: 'Leave the chat.',
				title: 'You protect yourself, but the chat norm stays.',
				copy: 'Leaving may be right for your safety. It does not tell the group where the boundary is.',
				impact: { belonging: -3, safety: 2, burden: 5 }
			},
			{
				text: 'I do not want racist memes in this chat. Please delete it.',
				best: true,
				title: 'You made the group boundary visible.',
				copy: 'This names the behaviour and asks for a concrete action.',
				impact: { belonging: 10, safety: 10, burden: -8 }
			},
			{
				text: 'Message the sender privately.',
				title: 'Useful when public response may escalate.',
				copy: 'A private message can help. Others in the chat may still be unsure whether the meme was acceptable.',
				impact: { belonging: 5, safety: 6, burden: -3 }
			}
		]
	},
	{
		label: 'Placement language feels off',
		place: 'Placement discussion',
		comment: '"This family is non-compliant."',
		context: 'A label is used before checking cultural, historical, service or trust barriers.',
		keeper: 'Can we check whether we are making a cultural assumption here?',
		options: [
			{
				text: 'Accept the wording.',
				title: 'Labels can travel quickly.',
				copy: 'In professional settings, casual assumptions can become case notes, risk judgements or service decisions.',
				impact: { belonging: -6, safety: -7, burden: 8 }
			},
			{
				text: 'Can we check whether we are making a cultural assumption here?',
				best: true,
				title: 'You slowed the judgement.',
				copy: 'This is professional, non-accusatory and relevant to culturally safe practice.',
				impact: { belonging: 10, safety: 10, burden: -7 }
			},
			{
				text: 'Raise it later in supervision.',
				title: 'Good if the room is unsafe.',
				copy: 'Supervision matters. If the label affects immediate practice, it is worth slowing it down early.',
				impact: { belonging: 4, safety: 5, burden: 0 }
			}
		]
	},
	{
		label: 'Acknowledgement is dismissed',
		place: 'Campus event',
		comment: '"Why do we have to do this every time?"',
		context: 'The eye-roll can turn respect into a performance people are invited to resent.',
		keeper: 'This is not just a script. It is about whose Country we are on.',
		options: [
			{
				text: 'Laugh politely.',
				title: 'Polite laughter teaches permission.',
				copy: 'Even small approval can make disrespect easier next time.',
				impact: { belonging: -7, safety: -6, burden: 7 }
			},
			{
				text: 'This is not just a script. It is about whose Country we are on.',
				best: true,
				title: 'You brought the moment back to place.',
				copy: 'This connects the comment to history and respect without turning it into a lecture.',
				impact: { belonging: 10, safety: 8, burden: -6 }
			},
			{
				text: 'You do not have to like it.',
				title: 'The frustration is clear, but the learning is thin.',
				copy: 'It may express a boundary. It does not help the group understand why the moment matters.',
				impact: { belonging: 1, safety: -2, burden: 2 }
			}
		]
	}
];

let currentScenario = 0;
let selectedOption = null;
let savedLines = [];

const scenarioList = document.getElementById('scenario-list');
const scenarioCount = document.getElementById('scenario-count');
const scenarioProgress = document.getElementById('scenario-progress');
const scenePlace = document.getElementById('scene-place');
const sceneComment = document.getElementById('scene-comment');
const sceneContext = document.getElementById('scene-context');
const responseOptions = document.getElementById('response-options');
const responseFeedback = document.getElementById('response-feedback');
const feedbackKicker = document.getElementById('feedback-kicker');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackCopy = document.getElementById('feedback-copy');
const impactRow = document.getElementById('impact-row');
const keeperLine = document.getElementById('keeper-line');
const saveLineButton = document.getElementById('save-line');
const nextScenarioButton = document.getElementById('next-scenario');
const savedLinesList = document.getElementById('saved-lines');
const copyLinesButton = document.getElementById('copy-lines');

function renderScenario(index) {
	const scenario = scenarios[index];
	currentScenario = index;
	selectedOption = null;
	scenarioCount.textContent = `Moment ${index + 1} of ${scenarios.length}`;
	scenarioProgress.style.width = `${((index + 1) / scenarios.length) * 100}%`;
	scenePlace.textContent = scenario.place;
	sceneComment.textContent = scenario.comment;
	sceneContext.textContent = scenario.context;
	responseFeedback.hidden = true;
	saveLineButton.disabled = false;
	saveLineButton.textContent = 'Save line';
	nextScenarioButton.textContent = index === scenarios.length - 1 ? 'Back to first moment' : 'Next moment';
	responseOptions.innerHTML = '';
	scenario.options.forEach((option) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'choice-button';
		button.textContent = option.text;
		button.addEventListener('click', () => chooseOption(option, scenario.keeper));
		responseOptions.appendChild(button);
	});
	document.querySelectorAll('.scenario-list button').forEach((button, buttonIndex) => {
		button.classList.toggle('active', buttonIndex === index);
	});
}

function chooseOption(option, keeper) {
	selectedOption = option;
	document.querySelectorAll('.choice-button').forEach((button) => {
		button.disabled = true;
		if (button.textContent === option.text) {
			button.classList.add(option.best ? 'is-best' : 'is-risky');
		}
	});
	feedbackKicker.textContent = option.best ? 'Strong move' : 'Notice the risk';
	feedbackTitle.textContent = option.title;
	feedbackCopy.textContent = option.copy;
	keeperLine.textContent = keeper;
	impactRow.innerHTML = createImpactPills(option.impact);
	responseFeedback.hidden = false;
}

function createImpactPills(impact) {
	const labels = [
		['belonging', 'Belonging'],
		['safety', 'Safety'],
		['burden', 'Burden']
	];
	return labels.map(([key, label]) => {
		const value = impact[key];
		const sign = value > 0 ? '+' : '';
		const isGood = key === 'burden' ? value <= 0 : value >= 0;
		return `<div class="impact-pill ${isGood ? 'good' : 'risk'}"><span>${label}</span><strong>${sign}${value}</strong></div>`;
	}).join('');
}

function saveCurrentLine() {
	const line = scenarios[currentScenario].keeper;
	if (!savedLines.includes(line)) savedLines.push(line);
	renderSavedLines();
	saveLineButton.textContent = 'Saved';
	saveLineButton.disabled = true;
	document.getElementById('card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderSavedLines() {
	if (!savedLines.length) {
		savedLinesList.innerHTML = '<li>Choose a moment above and save a line.</li>';
		return;
	}
	savedLinesList.innerHTML = savedLines.map((line) => `<li>${line}</li>`).join('');
}

async function copySavedLines() {
	const text = savedLines.length
		? savedLines.map((line, index) => `${index + 1}. ${line}`).join('\n')
		: 'Choose a moment and save a line first.';
	try {
		await navigator.clipboard.writeText(text);
		const original = copyLinesButton.textContent;
		copyLinesButton.textContent = 'Copied';
		setTimeout(() => { copyLinesButton.textContent = original; }, 1200);
	} catch {
		const original = copyLinesButton.textContent;
		copyLinesButton.textContent = 'Copy failed';
		setTimeout(() => { copyLinesButton.textContent = original; }, 1200);
	}
}

scenarios.forEach((scenario, index) => {
	const button = document.createElement('button');
	button.type = 'button';
	button.textContent = scenario.label;
	button.addEventListener('click', () => renderScenario(index));
	scenarioList.appendChild(button);
});

saveLineButton.addEventListener('click', saveCurrentLine);

nextScenarioButton.addEventListener('click', () => {
	const nextIndex = currentScenario === scenarios.length - 1 ? 0 : currentScenario + 1;
	renderScenario(nextIndex);
});

copyLinesButton.addEventListener('click', copySavedLines);

renderSavedLines();
renderScenario(0);
