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

export const mouseUpOrDown = readable(false, function start(set) {
    // @ts-ignore
    function mouseUp(e) {
        set(true)
    }
    // @ts-ignore
    function mouseDown(e) {
        set(false)
    }
	document.body.addEventListener("mouseup", mouseUp)
	document.body.addEventListener("mousedown", mouseDown)

	return function stop() {
		document.body.removeEventListener("mouseup", mouseUp);
		document.body.removeEventListener("mousedown", mouseDown);
	};
});

// export const resize = readable({x: window.innerWidth, y: window.innerHeight}, function start(set) {
//     // @ts-ignore
//     function resizeRead(e) {
//         console.log("Resize");
//         set({x: window.innerWidth, y: window.innerHeight})
//     }
// 	window.addEventListener("resize", resizeRead)

// 	return function stop() {
// 		window.removeEventListener("resize", resizeRead);
// 	};
// });

export const layout = {
    layout: ["blue", ["red", "green"]]
}