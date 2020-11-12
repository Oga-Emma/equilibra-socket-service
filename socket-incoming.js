const outgoing = require('./socket-outgoing')
const socket = require('socket.io-client')('https://api.theequilibra.com/users-api');

socket.on('connect', function () {
    console.log('Connected external');
});

socket.on('topic-changed', (payload) => {
    outgoing.emitTopicChange(payload);
});
socket.on('comment', (payload) => {
    outgoing.emitNewComment(payload);
});
socket.on('account-suspended', (payload) => {
    outgoing.emitAccountSuspended(payload);
});
socket.on('join-room', (payload) => {
    outgoing.emitJoinRoom(payload)
});
socket.on('leave-room', (payload) => {
    outgoing.emitLeaveRoom(payload);
});
socket.on('vote-topic-change', (payload) => {
    outgoing.emitTopicChangeVote(payload);
});
socket.on('vote-topic-closed', (payload) => {
    outgoing.emitTopicChangeVoteEnd(payload);
});
socket.on('topic-discussion-vote', (payload) => {
    outgoing.emitDiscussionVote(payload);
});
socket.on('close-discussion-vote', (payload) => {
    outgoing.emitDiscussionVoteEnd(payload)
});
socket.on('new-vote', (payload) => {
    outgoing.vote(payload);
});
socket.on('refresh-account', (payload) => {
    outgoing.refreshAccount(payload)
});

socket.on('disconnect', function () {
    console.log('Disconnected');
});
