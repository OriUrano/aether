import { readable, writable } from 'svelte/store';

export const sideTabClosed = writable(false);
export const l = writable([2/3,1/6,1/6]);

export const mouse = readable({x: 0, y: 0}, function start(set) {
    // @ts-ignore
    function mouseRead(e) {
        set({x: e.clientX, y: e.clientY})
    }
	document.body.addEventListener("mousemove", mouseRead)

	return function stop() {
		document.body.removeEventListener("mousemove", mouseRead);
	};
});




export const layout = {
    layout: ["blue", ["red", "green"]]
}