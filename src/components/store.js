import { writable } from 'svelte/store';
import news from '../news.json';

export const state = writable('init');
export const score = writable(0);
export const prev = writable([]);
export const change = writable('');
export const question = writable({});
export const answerText = writable('');

export function increment() {
	score.update((n) => n + 1);
	change.set('+');
}

export function decrement() {
	score.update((n) => n - 1);
}

export function startGame() {
	state.set('playing');
}

export function pauseGame() {
	state.set('paused');
}

export function addToPrevious(qst) {
	prev.update((arr) => [...arr, qst]);
}

export function getQuestion() {
	answerText.set('');
	const list = Math.round(Math.random())
		? { src: 'zaytung', news: news.zaytung }
		: { src: 'akit', news: news.akit };

	const id = Math.round(Math.random() * list.news.length);

	addToPrevious({ src: list.src, id });
	//Add check for previous id's
	question.set({ ...list.news[id], src: list.src });
}
