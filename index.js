

window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready!');
    console.log(window.location.href);
    fillSessionStorage();
});

function fillSessionStorage() {
	let i = 0;
	let chunk = 'X'.repeat(500_000);

	try {
		while (true) {
			sessionStorage.setItem('data_' + i, chunk);
			i++;
		}
	} catch (e) {
		console.error(e);
	}
}