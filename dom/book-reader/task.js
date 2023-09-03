const fontSizeSmall = document.querySelectorAll('.font-size');
const bookBig = document.getElementById('book');

fontSizeSmall.forEach((size) => {
	size.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeSmall.forEach((el) => {
			el.classList.remove('font-size_active');
		});

		size.classList.add('font-size_active');
		if (size.classList.contains('font-size_small')) {
			bookBig.classList.add('book_fs-small');
		} else {
			bookBig.classList.remove('book_fs-small');
		}

		if (size.classList.contains('font-size_big')) {
			bookBig.classList.add('book_fs-big');
		} else {
			bookBig.classList.remove('book_fs-big');
		}
	});
});

const fontSizeBig = document.querySelectorAll('.font-size');
const bookSmall = document.getElementById('book');

fontSizeBig.forEach((size) => {
	size.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeBig.forEach((el) => {
			el.classList.remove('font-size_active');
		});

		size.classList.add('font-size_active');
		if (size.classList.contains('font-size_small')) {
			bookSmall.classList.add('book_fs-small');
		} else {
			bookSmall.classList.remove('book_fs-small');
		}

		if (size.classList.contains('font-size_big')) {
			bookSmall.classList.add('book_fs-big');
		} else {
			bookSmall.classList.remove('book_fs-big');
		}
	});
});
