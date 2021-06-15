import { writable } from 'svelte/store';
import news from '../news.json';

export const state = writable('init');
export const score = writable(0);
export const prev = writable([]);
export const question = writable({});

export function increment() {
	score.update((n) => n + 1);
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

export function addToPrevious(id) {
	prev.update((arr) => [...arr, id]);
}

export function getQuestion() {
	const list = Math.round(Math.random())
		? { src: 'zaytung', news: news.zaytung }
		: { src: 'akit', news: news.akit };

	const id = Math.round(Math.random() * list.news.length);
	addToPrevious(id);
	//Add check for previous id's
	question.set({ ...list.news[id], src: list.src });
}
