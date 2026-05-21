const homeScenarios = [
	{
		place: 'Tutorial room',
		title: '“They get special treatment anyway.”',
		context: 'A class comment turns equity support into resentment.',
		options: [
			{
				label: 'Say nothing',
				strength: 'risk',
				room: 'Nobody may mean to agree. But from the outside, silence can look like permission.',
				burden: 'A First Nations student may be left deciding whether to absorb it, challenge it or let it sit.',
				line: 'That is support, not special treatment.'
			},
			{
				label: 'Ask what they mean',
				strength: 'strong',
				room: 'The room gets a pause. The comment is no longer just floating there.',
				burden: 'You take some pressure off the person being talked about.',
				line: 'What do you mean by “special treatment”?'
			},
			{
				label: 'Name the myth',
				strength: 'strong',
				room: 'The myth is named without turning it into a long argument.',
				burden: 'They do not have to be the one who turns pain into a lesson for everyone else.',
				line: 'That is support, not special treatment.'
			},
			{
				label: 'Ask the tutor to pause',
				strength: 'strong',
				room: 'The tutor is invited to hold the learning space, not leave it to students to manage.',
				burden: 'Responsibility moves to someone with a role in the room.',
				line: 'Can we pause there? I think that needs to be addressed.'
			}
		]
	},
	{
		place: 'Group chat',
		title: 'A racist meme gets laughing emojis.',
		context: 'Everyone can see who reacts and who lets it sit there.',
		options: [
			{
				label: 'Ignore it',
				strength: 'risk',
				room: 'The chat may keep moving, but the meme is still sitting there for everyone to see.',
				burden: 'Anyone targeted has to decide whether to speak up, leave or carry it quietly.',
				line: 'Can we not have racist memes in this chat?'
			},
			{
				label: 'Reply in the chat',
				strength: 'strong',
				room: 'The group sees a boundary in the same place the meme appeared.',
				burden: 'The harm is not left for one person to explain.',
				line: 'Can we not have racist memes in this chat?'
			},
			{
				label: 'Message them privately',
				strength: 'risk',
				room: 'The sender may hear from you, but the chat still sees the meme sitting there.',
				burden: 'Private follow-up can help, but the group norm may stay unchanged.',
				line: 'That meme is racist. Please delete it from the chat.'
			},
			{
				label: 'Ask the admin to remove it',
				strength: 'strong',
				room: 'The chat gets a visible limit, not just private discomfort.',
				burden: 'The person harmed does not have to manage the group alone.',
				line: 'Can an admin remove this? It should not stay in the chat.'
			}
		]
	},
	{
		place: 'Class discussion',
		title: '“Can you explain the Aboriginal view?”',
		context: 'One student is put on the spot to speak for many peoples.',
		options: [
			{
				label: 'Wait for them to answer',
				strength: 'risk',
				room: 'Nobody may mean to pressure them. But the spotlight stays on one person.',
				burden: 'One student is left to represent many peoples and experiences.',
				line: 'Let’s not put that on one person.'
			},
			{
				label: 'Name the pressure',
				strength: 'strong',
				room: 'The room hears that the question asks too much of one person.',
				burden: 'The person asked does not have to refuse, explain or educate the class alone.',
				line: 'Let’s not put that on one person.'
			},
			{
				label: 'Suggest public resources',
				strength: 'strong',
				room: 'Learning is redirected to places made for public learning.',
				burden: 'The class does not take free teaching from one student.',
				line: 'Let’s start with public resources instead of putting this on one classmate.'
			},
			{
				label: 'Check in after class',
				strength: 'strong',
				room: 'The room may not change yet, but the person knows someone noticed.',
				burden: 'Support can reduce isolation, especially if speaking up was not safe.',
				line: 'Sorry that landed on you. Do you want space or support?'
			}
		]
	},
	{
		place: 'Before class',
		title: '“Are you really Aboriginal?”',
		context: 'A casual question turns identity into something to prove.',
		options: [
			{
				label: 'Say nothing',
				strength: 'risk',
				room: 'Nobody may want a conflict before class. But the question can start to sound acceptable.',
				burden: 'The person asked may feel they have to prove who they are.',
				line: 'We do not need to question someone’s identity like that.'
			},
			{
				label: 'Name the boundary',
				strength: 'strong',
				room: 'The boundary is short, and the question stops being treated as harmless curiosity.',
				burden: 'The person targeted does not have to justify their identity in front of others.',
				line: 'We do not need to question someone’s identity like that.'
			},
			{
				label: 'Change the subject',
				strength: 'risk',
				room: 'The pressure may drop for a moment, but nobody hears what was wrong.',
				burden: 'The person may still be left wondering whether anyone understood.',
				line: 'Let’s not ask people to prove their identity.'
			},
			{
				label: 'Check in privately',
				strength: 'strong',
				room: 'The public moment may have passed, but the person knows someone noticed.',
				burden: 'They do not have to carry the discomfort alone.',
				line: 'That was an uncomfortable question. Are you okay?'
			}
		]
	},
	{
		place: 'Placement',
		title: '“This family is non-compliant.”',
		context: 'A professional label appears before anyone checks barriers, trust or cultural context.',
		options: [
			{
				label: 'Accept the label',
				strength: 'risk',
				room: 'The label can start doing the thinking before anyone has checked the barriers.',
				burden: 'The family can become “the problem” before trust, access or cultural context is considered.',
				line: 'What might be making engagement harder here?'
			},
			{
				label: 'Ask about barriers',
				strength: 'strong',
				room: 'The conversation moves from blame toward a fuller assessment.',
				burden: 'The family is not reduced to a label.',
				line: 'What might be making engagement harder here?'
			},
			{
				label: 'Check for cultural assumption',
				strength: 'strong',
				room: 'The practice risk is named without turning the conversation into a personal attack.',
				burden: 'Responsibility stays with the service system, not just the family.',
				line: 'Can we slow down? I think there is an assumption there.'
			},
			{
				label: 'Take it to supervision',
				strength: 'strong',
				room: 'The concern is treated as something to supervise, not hallway discomfort.',
				burden: 'You are not leaving the concern unmanaged.',
				line: 'Can we take this to supervision before we label the family?'
			}
		]
	},
	{
		place: 'Campus event',
		title: '“Why do we do Acknowledgement of Country every time?”',
		context: 'A public moment of respect is treated like an annoying script.',
		options: [
			{
				label: 'Laugh politely',
				strength: 'risk',
				room: 'It may feel easier in the moment. It can also make the eye-roll feel shared.',
				burden: 'People who value the acknowledgement may feel the room is not with them.',
				line: 'It is not just a script. It is about whose Country we are on.'
			},
			{
				label: 'Ask what it acknowledges',
				strength: 'strong',
				room: 'The comment has to slow down and face its assumption.',
				burden: 'You do not leave the discomfort with First Nations people in the room.',
				line: 'What do you think it is meant to acknowledge?'
			},
			{
				label: 'Name the purpose',
				strength: 'strong',
				room: 'The purpose is named without a long lecture.',
				burden: 'The room hears that respect is not optional background noise.',
				line: 'It is not just a script. It is about whose Country we are on.'
			},
			{
				label: 'Ask the organiser to explain',
				strength: 'strong',
				room: 'The organiser can set a clearer norm for the event.',
				burden: 'The explanation does not have to come from a First Nations attendee.',
				line: 'Could the organiser explain why we do it? That might help.'
			}
		]
	}
];

const chainReveals = [
	{
		kicker: 'Step 1',
		title: 'A comment is made.',
		copy: 'It might sound like a joke, a question or a quick opinion. That does not mean it lands lightly.'
	},
	{
		kicker: 'Step 2',
		title: 'The room moves on.',
		copy: 'If nobody responds, the room learns that this can happen here.'
	},
	{
		kicker: 'Step 3',
		title: 'The burden moves.',
		copy: 'The person targeted may have to absorb it, explain it, or decide whether it is safe to speak.'
	},
	{
		kicker: 'Step 4',
		title: 'Safety changes.',
		copy: 'One comment can change how safe a class, chat, placement or event feels.'
	},
	{
		kicker: 'Step 5',
		title: 'People adjust.',
		copy: 'Someone may speak less, avoid the space, or brace for the next comment.'
	},
	{
		kicker: 'Step 6',
		title: 'Wellbeing is affected.',
		copy: 'Racism is not only about one sentence. It changes how people feel in the places where they study and work.'
	}
];

const everydayMoments = [
	{
		title: '“It was only a joke.”',
		sounds: 'A racist comment is defended as humour, banter or not serious.',
		does: 'It asks the person harmed to prove they are not overreacting. It can turn shame back onto the person who objects.',
		move: 'Ask whether the joke relies on a stereotype. If it does, do not defend it as harmless.',
		line: 'If the joke needs a stereotype to work, it is not just a joke.'
	},
	{
		title: '“They get special treatment.”',
		sounds: 'Equity support, scholarships or identified services are framed as unfair advantage.',
		does: 'It turns repair for historical and ongoing exclusion into resentment. It can make First Nations students feel watched, doubted or undeserving.',
		move: 'Ask what barrier the support is responding to. Equity is not a shortcut; it is a response to unequal conditions.',
		line: 'That is support, not special treatment.'
	},
	{
		title: '“I don’t see race.”',
		sounds: 'Someone tries to sound fair by saying race does not matter to them.',
		does: 'It can erase the real effects of racism, culture, history and identity. Not seeing race can also mean not seeing harm.',
		move: 'Respect people equally without pretending that race and racism have no effect.',
		line: 'Treating people fairly means noticing the barriers they actually face.'
	},
	{
		title: '“Are you really Aboriginal?”',
		sounds: 'A person’s identity is questioned because they do not fit someone else’s expectation.',
		does: 'It makes identity something to be proven to others. That can be humiliating, exhausting and unsafe.',
		move: 'Accept how people identify. Do not make appearance, surname or family history a test.',
		line: 'We do not need to question someone’s identity like that.'
	},
	{
		title: '“Can you explain the Aboriginal view?”',
		sounds: 'One First Nations student is asked to speak for all Aboriginal and Torres Strait Islander peoples.',
		does: 'It turns a student into a cultural help desk. It also treats diverse peoples, Nations and experiences as one view.',
		move: 'Use public First Nations-led resources first. Ask only with consent, relationship and care.',
		line: 'Let’s not put that on one person.'
	},
	{
		title: '“No one reported it, so it must be fine.”',
		sounds: 'Harm is dismissed because there was no formal complaint.',
		does: 'Many people do not report racism because they expect disbelief, backlash, delay or nothing changing.',
		move: 'Take the behaviour seriously even when no formal report exists.',
		line: 'Not reported does not mean not harmful.'
	},
	{
		title: '“That happened in the past.”',
		sounds: 'Colonisation, dispossession and past policy are treated as finished history.',
		does: 'It disconnects current inequality from the systems that produced it. It can also silence truth-telling.',
		move: 'Recognise that history can continue through institutions, land, family, education, health and public attitudes.',
		line: 'The past is not past if its effects are still organised into the present.'
	},
	{
		title: '“I’m just asking questions.”',
		sounds: 'A question is used to repeat a stereotype or make someone defend their existence.',
		does: 'Questions can still carry assumptions. Curiosity does not remove responsibility for impact.',
		move: 'Check whether the question is something you can learn from public resources before asking a person to carry it.',
		line: 'Curiosity is fine. Putting the load on someone else is not.'
	}
];

const learnFeedback = {
	public: {
		kicker: 'Better first step',
		title: 'Start with resources made for public learning.',
		copy: 'If you later ask someone, ask with consent and accept “no”.'
	},
	front: {
		kicker: 'Risk',
		title: 'This puts one person on display.',
		copy: 'It asks them to manage the room and speak for many peoples, histories and experiences.'
	},
	private: {
		kicker: 'Still pressure',
		title: 'Private can still be pressure.',
		copy: 'A relationship and consent matter. Public First Nations-led resources usually come first.'
	}
};

const scenarios = [
	{
		label: 'A joke is excused',
		place: 'Tutorial room',
		comment: '“It was only a joke.”',
		context: 'The room laughs. One person goes quiet. The next few seconds decide whether the joke becomes normal.',
		keeper: 'If the joke needs a stereotype to work, it is not just a joke.',
		options: [
			{
				text: 'Stay quiet so it does not get awkward.',
				title: 'The awkwardness moves to the person harmed.',
				copy: 'Silence can make the joke feel accepted, even when people privately disagree.',
				impact: { belonging: -8, safety: -7, burden: 10 }
			},
			{
				text: 'If the joke needs a stereotype to work, it is not just a joke.',
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
		label: 'Special treatment myth',
		place: 'Group assignment chat',
		comment: '“They get special treatment anyway.”',
		context: 'Equity support is framed as unfair advantage. The myth can shame students for using support or being present.',
		keeper: 'That is support, not special treatment.',
		options: [
			{
				text: 'That is racist.',
				title: 'You named the issue, but not the myth.',
				copy: 'It may be true, but the conversation can turn into defensiveness before the false belief is challenged.',
				impact: { belonging: 2, safety: -2, burden: 4 }
			},
			{
				text: 'That is support, not special treatment.',
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
		comment: '“I do not see race. I treat everyone the same.”',
		context: 'The intention may sound fair. The impact can be that racism becomes harder to name.',
		keeper: 'Treating people fairly means noticing the barriers they actually face.',
		options: [
			{
				text: 'Agree and move on.',
				title: 'Good intentions can hide harm.',
				copy: 'Ignoring race can also ignore the different ways racism shapes safety, trust and belonging.',
				impact: { belonging: -6, safety: -5, burden: 7 }
			},
			{
				text: 'Treating people fairly means noticing the barriers they actually face.',
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
		comment: '“Can you explain the Aboriginal view?”',
		context: 'One person is asked to represent diverse peoples, histories and communities.',
		keeper: 'Let’s not put that on one person.',
		options: [
			{
				text: 'Wait for them to answer.',
				title: 'Pressure can still sit there.',
				copy: 'Silence after the question can make one student carry the room even if nobody intended harm.',
				impact: { belonging: -5, safety: -5, burden: 9 }
			},
			{
				text: 'Let’s not put that on one person.',
				best: true,
				title: 'You moved the learning burden back to the group.',
				copy: 'This protects the student from being treated as the room’s cultural help desk.',
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
		comment: '“Are you really Aboriginal?”',
		context: 'The question can sound casual. It can also make someone feel examined, doubted or exposed.',
		keeper: 'We do not need to question someone’s identity like that.',
		options: [
			{
				text: 'Say nothing because it feels awkward.',
				title: 'The person is left to manage the question.',
				copy: 'That can make identity feel like something to defend in public.',
				impact: { belonging: -8, safety: -8, burden: 12 }
			},
			{
				text: 'We do not need to question someone’s identity like that.',
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
		keeper: 'Can we not have racist memes in this chat?',
		options: [
			{
				text: 'Leave the chat.',
				title: 'You protect yourself, but the chat norm stays.',
				copy: 'Leaving may be right for your safety. It does not tell the group where the boundary is.',
				impact: { belonging: -3, safety: 2, burden: 5 }
			},
			{
				text: 'Can we not have racist memes in this chat?',
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
		comment: '“This family is non-compliant.”',
		context: 'A label is used before checking cultural, historical, service or trust barriers.',
		keeper: 'Can we slow down? I think there is an assumption there.',
		options: [
			{
				text: 'Accept the wording.',
				title: 'Labels can travel quickly.',
				copy: 'In professional settings, casual assumptions can become case notes, risk judgements or service decisions.',
				impact: { belonging: -6, safety: -7, burden: 8 }
			},
			{
				text: 'Can we slow down? I think there is an assumption there.',
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
		comment: '“Why do we have to do this every time?”',
		context: 'The eye-roll can turn respect into a performance people are invited to resent.',
		keeper: 'It is not just a script. It is about whose Country we are on.',
		options: [
			{
				text: 'Laugh politely.',
				title: 'Polite laughter teaches permission.',
				copy: 'Even small approval can make disrespect easier next time.',
				impact: { belonging: -7, safety: -6, burden: 7 }
			},
			{
				text: 'It is not just a script. It is about whose Country we are on.',
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
let savedLines = [];
let selectedHomeScenario = null;
let selectedHomeAction = null;
let currentHomeLine = '';
let homeSavedLines = [];

function updateReveal(element, item) {
	if (!element || !item) return;
	element.innerHTML = `
		<p class="feedback-label">${item.kicker}</p>
		<h4>${item.title}</h4>
		<p>${item.copy}</p>
	`;
}

async function copyTextToClipboard(text) {
	if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
		await navigator.clipboard.writeText(text);
		return;
	}
	const textarea = document.createElement('textarea');
	textarea.value = text;
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'fixed';
	textarea.style.left = '-9999px';
	document.body.appendChild(textarea);
	textarea.select();
	const copied = document.execCommand('copy');
	document.body.removeChild(textarea);
	if (!copied) throw new Error('Copy command failed');
}

function showManualCopy(anchorButton, text) {
	const parent = anchorButton.closest('.share-card, .line-card, .line-bank article, .freeze-grid article') || anchorButton.parentElement;
	if (!parent) return;
	parent.querySelector('.manual-copy-box')?.remove();
	const textarea = document.createElement('textarea');
	textarea.className = 'manual-copy-box';
	textarea.value = text;
	textarea.setAttribute('readonly', '');
	parent.appendChild(textarea);
	textarea.focus();
	textarea.select();
}

function initHomeMomentFlow() {
	const scenarioCards = document.getElementById('scenario-cards');
	const place = document.getElementById('home-moment-place');
	const title = document.getElementById('home-moment-title');
	const context = document.getElementById('home-moment-context');
	const actionChoices = document.getElementById('home-action-choices');
	const result = document.getElementById('home-result');
	const savedLinesList = document.getElementById('home-saved-lines');
	const copyButton = document.getElementById('copy-home-lines');
	const restartButton = document.getElementById('restart-home-flow');
	if (!scenarioCards || !actionChoices || !result || !savedLinesList) return;

		scenarioCards.innerHTML = homeScenarios.map((scenario, index) => `
			<button type="button" class="scenario-card" data-scenario="${index}" aria-pressed="false">
				<span>${scenario.place}</span>
				<strong>${scenario.title}</strong>
				<small>${scenario.context}</small>
			</button>
	`).join('');

	function renderSavedHomeLines() {
		if (!homeSavedLines.length) {
			savedLinesList.innerHTML = '<li>Pick a moment. Keep one line.</li>';
			return;
		}
		savedLinesList.innerHTML = homeSavedLines.slice(0, 3).map((line) => `<li>${line}</li>`).join('');
	}

	function setResultIntro() {
		result.innerHTML = `
			<p class="feedback-label">Step 2</p>
			<h3>Choose one move.</h3>
			<div class="result-lines">
				<div><span>What everyone hears</span><p>Pick a moment first.</p></div>
				<div><span>Who gets left with it</span><p>Choose one move.</p></div>
				<div><span>Try this line</span><p>Then keep the line if it feels usable.</p></div>
			</div>
			<button id="save-home-line" type="button" class="save-line-button" disabled>Save this line</button>
		`;
	}

	function renderActionChoices() {
		if (!selectedHomeScenario) {
			actionChoices.innerHTML = '<p class="action-placeholder">Pick a moment first.</p>';
			return;
		}
		actionChoices.innerHTML = selectedHomeScenario.options.map((option, index) => `
			<button type="button" data-action="${index}" class="${option.strength === 'strong' ? 'strong-option' : 'risk-option'}" aria-pressed="false">
				${option.label}
			</button>
		`).join('');
		actionChoices.querySelectorAll('button').forEach((button) => {
			button.addEventListener('click', () => selectAction(Number(button.dataset.action)));
		});
	}

	function getHomeFeedback(option) {
		const label = option.label.toLowerCase();
		if (label.includes('ask the tutor') || label.includes('ask the admin') || label.includes('ask the organiser') || label.includes('take it to supervision')) {
			return 'You are not leaving it for one student to carry.';
		}
		if (label.startsWith('ask') || label.includes('ask about') || label.includes('suggest public resources')) return 'The room gets a pause. The comment is no longer just floating there.';
		if (label.includes('name') || label.includes('reply in the chat') || label.includes('check for cultural assumption')) return 'One short line can show the room where the limit is.';
		if (label.includes('check in') || label.includes('message them privately')) return 'The moment has passed, but support still matters.';
		if (label.includes('say nothing') || label.includes('ignore') || label.includes('wait for') || label.includes('accept the label') || label.includes('laugh politely')) {
			return 'Nobody may mean to agree. But silence can look like permission.';
		}
		if (label.includes('change the subject')) return 'This can lower the heat, but the burden may stay.';
		return 'Look at what this changes in the room.';
	}

	function renderResult() {
		if (!selectedHomeScenario || selectedHomeAction === null) return;
		const option = selectedHomeScenario.options[selectedHomeAction];
		currentHomeLine = option.line;
		result.innerHTML = `
			<p class="feedback-label">Step 2</p>
			<h3>${getHomeFeedback(option)}</h3>
			<div class="result-lines">
				<div><span>What everyone hears</span><p>${option.room}</p></div>
				<div><span>Who gets left with it</span><p>${option.burden}</p></div>
				<div><span>Try this line</span><p>${currentHomeLine}</p></div>
			</div>
			<button id="save-home-line" type="button" class="save-line-button">Save this line</button>
		`;
		result.querySelector('#save-home-line').addEventListener('click', saveHomeLine);
	}

	function selectScenario(index) {
		selectedHomeScenario = homeScenarios[index];
		selectedHomeAction = null;
		currentHomeLine = '';
		place.textContent = selectedHomeScenario.place;
		title.textContent = selectedHomeScenario.title;
		context.textContent = selectedHomeScenario.context;
			scenarioCards.querySelectorAll('.scenario-card').forEach((button, buttonIndex) => {
				const isSelected = buttonIndex === index;
				button.classList.toggle('active', isSelected);
				button.setAttribute('aria-pressed', String(isSelected));
			});
			renderActionChoices();
			setResultIntro();
		}

	function selectAction(action) {
		if (!selectedHomeScenario) return;
			selectedHomeAction = action;
			actionChoices.querySelectorAll('button').forEach((button) => {
				const isSelected = Number(button.dataset.action) === action;
				button.classList.toggle('active', isSelected);
				button.setAttribute('aria-pressed', String(isSelected));
			});
			renderResult();
		}

	function saveHomeLine() {
		if (!currentHomeLine) return;
		homeSavedLines = [currentHomeLine, ...homeSavedLines.filter((line) => line !== currentHomeLine)].slice(0, 3);
		renderSavedHomeLines();
		result.querySelector('#save-home-line').textContent = 'Saved';
		document.getElementById('my-line')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	async function copyHomeLines() {
		const text = homeSavedLines.length
			? homeSavedLines.map((line, index) => `${index + 1}. ${line}`).join('\n')
			: 'Pick a moment. Keep one line.';
		try {
			await copyTextToClipboard(text);
			const original = copyButton.textContent;
			copyButton.textContent = 'Copied';
			setTimeout(() => { copyButton.textContent = original; }, 1100);
		} catch {
			const original = copyButton.textContent;
			showManualCopy(copyButton, text);
			copyButton.textContent = 'Text selected';
			setTimeout(() => { copyButton.textContent = original; }, 1400);
		}
	}

	function restartHomeFlow() {
		selectedHomeScenario = null;
		selectedHomeAction = null;
		currentHomeLine = '';
		homeSavedLines = [];
		renderSavedHomeLines();
		place.textContent = 'Choose a moment first';
		title.textContent = 'What happened?';
		context.textContent = 'Pick a card above. Then choose what you would do in the next few seconds.';
			scenarioCards.querySelectorAll('.scenario-card').forEach((button) => {
				button.classList.remove('active');
				button.setAttribute('aria-pressed', 'false');
			});
			renderActionChoices();
		result.innerHTML = `
			<p class="feedback-label">Step 2</p>
			<h3>Choose a moment and a move.</h3>
			<div class="result-lines">
				<div><span>What everyone hears</span><p>Pick a moment first.</p></div>
				<div><span>Who gets left with it</span><p>Choose one move.</p></div>
				<div><span>Try this line</span><p>Then keep the line if it feels usable.</p></div>
			</div>
			<button id="save-home-line" type="button" class="save-line-button" disabled>Save this line</button>
		`;
	}

	scenarioCards.querySelectorAll('.scenario-card').forEach((button) => {
		button.addEventListener('click', () => selectScenario(Number(button.dataset.scenario)));
	});
	copyButton?.addEventListener('click', copyHomeLines);
	restartButton?.addEventListener('click', restartHomeFlow);
	renderSavedHomeLines();
	renderActionChoices();
}

function initChain() {
	const buttons = document.querySelectorAll('#chain-list button');
	const reveal = document.getElementById('chain-reveal');
	if (!buttons.length || !reveal) return;

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			buttons.forEach((item) => item.classList.remove('active'));
			button.classList.add('active');
			const index = Number(button.dataset.chain);
			updateReveal(reveal, chainReveals[index]);
		});
	});
}

function initMomentCards() {
	const container = document.getElementById('moment-cards');
	if (!container) return;

	container.innerHTML = everydayMoments.map((moment, index) => `
		<article class="moment-card">
			<button type="button" aria-expanded="false" data-card="${index}">
				<span>${String(index + 1).padStart(2, '0')}</span>
				<strong>${moment.title}</strong>
			</button>
			<div class="moment-card-body" hidden>
				<div>
					<h3>What it sounds like</h3>
					<p>${moment.sounds}</p>
				</div>
				<div>
					<h3>What it can do</h3>
					<p>${moment.does}</p>
				</div>
				<div>
					<h3>Better move</h3>
					<p>${moment.move}</p>
				</div>
				<blockquote>${moment.line}</blockquote>
			</div>
		</article>
	`).join('');

	container.querySelectorAll('.moment-card button').forEach((button) => {
		button.addEventListener('click', () => {
			const card = button.closest('.moment-card');
			const body = card.querySelector('.moment-card-body');
			const isOpen = !body.hidden;
			body.hidden = isOpen;
			button.setAttribute('aria-expanded', String(!isOpen));
			card.classList.toggle('open', !isOpen);
		});
	});
}

function initLearnChoices() {
	const buttons = document.querySelectorAll('#learn-choices button');
	const feedback = document.getElementById('learn-feedback');
	if (!buttons.length || !feedback) return;

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			buttons.forEach((item) => item.classList.remove('active'));
			button.classList.add('active');
			updateReveal(feedback, learnFeedback[button.dataset.learn]);
		});
	});
}

function initPractice() {
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

	if (!scenarioList || !responseOptions) return;

	function renderSavedLines() {
		if (!savedLinesList) return;
		if (!savedLines.length) {
			savedLinesList.innerHTML = '<li>Choose a moment above and save a line.</li>';
			return;
		}
		savedLinesList.innerHTML = savedLines.map((line) => `<li>${line}</li>`).join('');
	}

	function createImpactPills(impact) {
		const labels = [
			['belonging', 'Belonging', 'room feels a little steadier', 'room can feel less safe'],
			['safety', 'Safety', 'someone has more room to breathe', 'someone may brace for the next comment'],
			['burden', 'Burden', 'not left on one person', 'left with the person harmed']
		];
		return labels.map(([key, label, goodText, riskText]) => {
			const value = impact[key];
			const isGood = key === 'burden' ? value <= 0 : value >= 0;
			return `<div class="impact-pill ${isGood ? 'good' : 'risk'}"><span>${label}</span><strong>${isGood ? goodText : riskText}</strong></div>`;
		}).join('');
	}

	function chooseOption(option, keeper) {
		document.querySelectorAll('.choice-button').forEach((button) => {
			button.disabled = true;
			if (button.textContent === option.text) {
				button.classList.add(option.best ? 'is-best' : 'is-risky');
			}
		});
		feedbackKicker.textContent = option.best ? 'This might help' : 'Notice what it leaves behind';
		feedbackTitle.textContent = option.title;
		feedbackCopy.textContent = option.copy;
		keeperLine.textContent = keeper;
		impactRow.innerHTML = createImpactPills(option.impact);
		responseFeedback.hidden = false;
	}

	function renderScenario(index) {
		const scenario = scenarios[index];
		currentScenario = index;
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

	function saveCurrentLine() {
		const line = scenarios[currentScenario].keeper;
		if (!savedLines.includes(line)) savedLines.push(line);
		renderSavedLines();
		saveLineButton.textContent = 'Saved';
		saveLineButton.disabled = true;
		document.getElementById('card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	async function copySavedLines() {
		const text = savedLines.length
			? savedLines.map((line, index) => `${index + 1}. ${line}`).join('\n')
			: 'Choose a moment and save a line first.';
		try {
			await copyTextToClipboard(text);
			const original = copyLinesButton.textContent;
			copyLinesButton.textContent = 'Copied';
			setTimeout(() => { copyLinesButton.textContent = original; }, 1200);
		} catch {
			const original = copyLinesButton.textContent;
			showManualCopy(copyLinesButton, text);
			copyLinesButton.textContent = 'Text selected';
			setTimeout(() => { copyLinesButton.textContent = original; }, 1400);
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
	copyLinesButton?.addEventListener('click', copySavedLines);

	renderSavedLines();
	renderScenario(0);
}

function initLineCopyButtons() {
	document.querySelectorAll('.line-bank button').forEach((button) => {
		button.addEventListener('click', async () => {
			try {
				await copyTextToClipboard(button.textContent);
				const original = button.textContent;
				button.textContent = 'Copied';
				setTimeout(() => { button.textContent = original; }, 900);
			} catch {
				const original = button.textContent;
				showManualCopy(button, button.textContent);
				button.textContent = 'Text selected';
				setTimeout(() => { button.textContent = original; }, 1200);
			}
		});
	});
}

function initFreezeCopyButtons() {
	document.querySelectorAll('.freeze-copy').forEach((button) => {
		button.addEventListener('click', async () => {
			const text = button.textContent.trim();
			try {
				await copyTextToClipboard(text);
				const original = button.textContent;
				button.textContent = 'Copied';
				setTimeout(() => { button.textContent = original; }, 900);
			} catch {
				const original = button.textContent;
				showManualCopy(button, text);
				button.textContent = 'Text selected';
				setTimeout(() => { button.textContent = original; }, 1200);
			}
		});
	});
}

initHomeMomentFlow();
initChain();
initMomentCards();
initLearnChoices();
initPractice();
initLineCopyButtons();
initFreezeCopyButtons();
