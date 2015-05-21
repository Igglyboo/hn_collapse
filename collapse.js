(function () {
    'use strict';
    var comments = document.getElementsByClassName('athing');
    var commentsLength = comments.length;

    for (var i = 0; i < commentsLength; i++) {
        var currentComment = comments[i];
        var currentCommentHeader = currentComment.getElementsByClassName('comhead')[0];
        var collapseTag = document.createElement('a');
        collapseTag.textContent = ' [-] ';
        collapseTag.className = 'collapse';
        currentCommentHeader.insertBefore(collapseTag, currentCommentHeader.firstChild);
    }
})();

