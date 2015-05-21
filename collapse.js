(function () {
    'use strict';
    var comments = document.getElementsByClassName('athing');
    var commentsLength = comments.length;

    // We start at i=1 because the first .athing is the submission title
    for (var i = 1; i < commentsLength; i++) {
        var currentComment = comments[i];
        var currentCommentHeader = currentComment.getElementsByClassName('comhead')[0];
        var currentCommentBody = currentComment.getElementsByClassName('comment')[0];
        var collapseTag = document.createElement('a');

        collapseTag.textContent = ' [-] ';
        collapseTag.className = 'collapse';
        collapseTag.onclick = getCollapseFunction(currentComment, currentCommentHeader, currentCommentBody);

        currentCommentHeader.insertBefore(collapseTag, currentCommentHeader.firstChild);
    }

    function getCollapseFunction(comment, commentHeader, commentBody) {
        return function () {
            if (commentBody.classList.contains('hidden')) {
                commentBody.classList.remove('hidden');
                this.textContent = ' [-] ';
            } else {
                commentBody.classList.add('hidden');
                this.textContent = ' [+] ';
            }
        }
    }
})();

