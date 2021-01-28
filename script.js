console.log('hello world');

function shuffleReviews() {
	var ul = document.getElementById('shuffle');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}